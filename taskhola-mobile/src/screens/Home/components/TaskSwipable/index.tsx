import React, { useRef } from 'react';

import {Text,View,PanResponder,TouchableOpacity,Animated,} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { styles } from './styles';

import { Task } from '../..';

type Props = {
  name: Task;
  isDone?: boolean;
  onRemove: () => void;
  onCheckPressed: (value: boolean) => void;
}

export default function TaskItemSwipable({ name, isDone, onRemove, onCheckPressed }: Props) {
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
          <Text>{name.task_description}</Text>
        </View>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => onRemove()}
        >
          <Text style={styles.deleteButtonText}>Delete</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}