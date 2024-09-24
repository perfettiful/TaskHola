import React, { useState, useRef } from 'react';

import { Text, View, PanResponder, TouchableOpacity, Animated, } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { styles } from './styles';

import Checkbox from 'expo-checkbox';
import { Task } from '../..';

type Props = {
  task: Task;
  isDone?: boolean;
  onRemove: () => void;
  onCheckPressed: (value: boolean) => void;
}

export default function TaskItemSwipable({ task, isDone, onRemove, onCheckPressed }: Props) {
  const [isChecked, setChecked] = useState(isDone);

  const translateX = useRef(new Animated.Value(0)).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        if (gestureState.dx < 0) {
          translateX.setValue(gestureState.dx);
        }
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dx < -50) {

          Animated.spring(translateX, {
            toValue: -100,
            useNativeDriver: true,
          }).start();

          onRemove()

        } else {
          Animated.spring(translateX, {
            toValue: 0,
            useNativeDriver: true,
          }).start();
        }
      },
    })
  ).current;

  return (
    <View style={styles.itemContainer}>
      <Animated.View
        style={{
          flex: 1,
          transform: [{ translateX: translateX }],
        }}
      >
        <View style={styles.item} {...panResponder.panHandlers}>
          <Checkbox
            style={styles.checkbox}
            value={isChecked}
            disabled={isChecked}
            onValueChange={(value) => {
              if (value) {
                setChecked(true);
                onCheckPressed(true);
              } else {
                setChecked(false);
                onCheckPressed(false);
              }
            }}
          />

          {(isChecked || isDone) ? (
            <Text style={styles.taskDone}>{task.task_description}</Text>
          ) : (
            <Text style={styles.taskAdd}>{task.task_description}</Text>
          )}
          
        <AntDesign name='left' size={24} color={'white'} />
        </View>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => onRemove()}
        >
          <AntDesign name='delete' size={24} color={'black'} />
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}