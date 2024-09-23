import React, { useState, useEffect } from 'react';
import { Alert, Image, FlatList, Text, TextInput, TouchableOpacity, Animated, View } from 'react-native';
import { Clipboard } from '@assets/index';
import { TaskItem } from './components/Task';
import { Header } from '../../components/Header';
import { AntDesign } from '@expo/vector-icons';
import { Info } from '../../components/Info';
import { styles } from './styles';
import { fetchTasks, removeTask, completeTask, createTask } from '../../api/taskApi';

export type Task = {
  task_id: string
  task_description: string;
  created_at: string;
  deleted: boolean;
  completed: boolean;
};

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [task, setTask] = useState('');
  const [taskCounter, setTaskCounter] = useState(0);

  useEffect(() => {
    fetchTasksData();
  }, []);

  const fetchTasksData = async () => {
    try {
      const data = await fetchTasks();

      const dataFiltered = data.filter((item: Task) => !item.completed && !item.deleted);

      setTaskCounter(dataFiltered.length);
      setTasks(dataFiltered);
    } catch (error) {
      console.error('Error fetching tasks:', error);
      Alert.alert('Error', 'Failed to fetch tasks. Please try again.');
    }
  };

  const handleAddTask = async () => {
    if (tasks.some(item => item.task_description === task)) {
      return Alert.alert('Duplicate Task', 'Task entries must be unique.');
    }
    if (task.trim() === '') {
      return Alert.alert('Error', 'Task description cannot be empty');
    }

    try {
      const newTask = await createTask(task);
      setTasks([...tasks, newTask]);

      setTaskCounter(prevState => prevState + 1);

    } catch (error) {
      console.error('Error adding task:', error);
      Alert.alert('Error', 'Failed to add task. Please try again.');
    }
  };

  const handleTaskRemove = async (taskId: string) => {
    try {

      await removeTask(taskId);

      setTasks(prevState => prevState.filter(item => item.task_id !== taskId));
      setTaskCounter(prevState => prevState - 1);

    } catch (error) {
      console.error('Error removing task:', error);
      Alert.alert('Error', 'Failed to remove task. Please try again.');
    }
  };

  const handleTaskDoneCounter = async (taskId: string) => {
    try {
      await completeTask(taskId);

      setTaskCounter(prevState => prevState - 1);

      setTasks(prevState => prevState.map(task => 
        task.task_id === taskId ? { ...task, completed: true } : task
      ));

    } catch (error) {
      console.error('Error completing task:', error);
      Alert.alert('Error', 'Failed to complete task. Please try again.');
    }
  };
  
  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Add a task to do ..."
          keyboardAppearance='dark'
          autoCapitalize='words'
          keyboardType='default'
          placeholderTextColor={'#808080'}
          onChangeText={setTask}
          value={task}
        />

        <TouchableOpacity style={styles.button} onPress={handleAddTask}>
          <AntDesign name='edit' size={20} color={'#FFF'} />
        </TouchableOpacity>

      </View>

      <Info taskCounter={taskCounter} />

      <FlatList
        data={tasks}
        keyExtractor={item => item.task_id}
        renderItem={({ item }) => (
          <TaskItem
            key={item.task_description}
            name={item}
            isDone={item.completed}
            onCheckPressed={() => handleTaskDoneCounter(item.task_id)}
            onRemove={() => handleTaskRemove(item.task_id)}
          />
        )}
        showsVerticalScrollIndicator={true}

        ListEmptyComponent={() => (
          <>
            <Image source={Clipboard} style={styles.emptyListImage} />
            <Text style={styles.emptyListBold}>
              {'You have no tasks registered yet.'}
            </Text>
            <Text style={styles.emptyList}>
              {'Create some tasks and organize your to-do items.'}
            </Text>
          </>
        )}
      />
    </View>
  );
}