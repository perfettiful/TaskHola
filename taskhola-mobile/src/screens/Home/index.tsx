import React, { useState, useEffect } from 'react';
import { Alert, Image, FlatList, Text, TextInput, TouchableOpacity, Animated, View } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import { Clipboard } from '@assets/index';
import { TaskItem } from './components/Task';
import { Header } from '../../components/Header';
import { AntDesign } from '@expo/vector-icons';
import { Info } from '../../components/Info';
import { styles } from './styles';

export type Task = {
  task_id: string
  task_description: string;
  user_email: string;
};

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [task, setTask] = useState('');
  const [taskCounter, setTaskCounter] = useState(0);
  const [taskDoneCounter, setTaskDoneCounter] = useState(0);


  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/tasks/?format=json');
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
      Alert.alert('Error', 'Failed to fetch tasks. Please try again.');
    }
  };

  function handleTaskAdd(): void {
    if (tasks.some(item => item.task_description === task)) {
      return Alert.alert('home.alertTaskExists.title', 'home.alertTaskExists.message');
    }
    if (task.trim() === '') {
      setTask('');
      return Alert.alert('home.alertTaskEmpty.title', 'home.alertTaskEmpty.message');
    }
    const taskObject = {
      task_description: task,
      user_email: 'teste@teste.com',
      task_id: '123456789',
    };

    setTasks(prevState => [...prevState, taskObject]);
    setTaskCounter(prevState => prevState + 1);
    setTask('');
  }

  function handleTaskRemove(name: string): void {
    Alert.alert('home.alertTaskRemove.title'), 'home.alertTaskRemove.message', { name }, [
      {
        text: 'home.alertTaskRemove.textNo',
        style: 'cancel',
      },
      {
        text: 'home.alertTaskRemove.textYes',
        onPress: () => {
          setTasks(prevState => prevState.filter(item => item.task_description !== name));
          setTaskCounter(prevState => prevState - 1);
        },

      }
    ];
  }

  function handleTaskDoneCounter(value: boolean): void {
    if (value) {
      setTaskDoneCounter(prevState => prevState + 1);
    } else {
      setTaskDoneCounter(prevState => prevState - 1);
    }
  }

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Make it a great day!"
          keyboardAppearance='dark'
          autoCapitalize='words'
          keyboardType='default'
          placeholderTextColor={'#808080'}
          onChangeText={setTask}
          value={task}
        />

        <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
          <AntDesign name='pluscircleo' size={20} color={'#FFF'} />
        </TouchableOpacity>
      </View>

      <Info taskCounter={taskCounter} taskDoneCounter={taskDoneCounter} />

      <FlatList
        data={tasks}
        keyExtractor={item => item.task_id}
        renderItem={({ item }) => (
          <TaskItem
            key={item.task_description}
            name={item}
            onCheckPressed={(value) => handleTaskDoneCounter(value)}
            onRemove={() => handleTaskRemove(item.task_description)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <>
            <Image source={Clipboard} style={styles.emptyListImage} />
            <Text style={styles.emptyListBold}>
              {'home.emptyListTitle'}
            </Text>
            <Text style={styles.emptyList}>
              {'home.emptyListSubTitle'}
            </Text>
          </>
        )}
      />
    </View>
  );
}