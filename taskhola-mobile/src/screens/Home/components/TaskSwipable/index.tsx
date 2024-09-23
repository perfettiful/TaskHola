
import { AntDesign } from '@expo/vector-icons';
import { styles } from './styles';

import Checkbox from 'expo-checkbox';
import { Task } from '../..';

type Props = {
  name: Task;
  isDone?: boolean;
  onRemove: () => void;
  onCheckPressed: (value: boolean) => void;
}

// export function TaskItem({ name, isDone, onRemove, onCheckPressed }: Props) {
//   const [isChecked, setChecked] = useState(false);

//   return (
//     <>
//       <View style={styles.container}>
//         <Checkbox
//           style={styles.checkbox}
//           value={isChecked}
//           onValueChange={(value) => {
//             if (value) {
//               setChecked(true);
//               onCheckPressed(true);
//             } else {
//               setChecked(false);
//               onCheckPressed(false);
//             }
//           }}
//         />

//         {isChecked ? (
//           <Text style={styles.taskDone}>{name.task_description}</Text>
//         ) : (
//           <Text style={styles.taskAdd}>{name.task_description}</Text>
//         )}
        
//         <View style={styles.actionButtonsContainer}>
//           <TouchableOpacity style={styles.button} onPress={onRemove}>
//             <AntDesign name='left' size={12} color={'#808080'} />
//             <AntDesign name='delete' size={12} color={'#808080'} />
//           </TouchableOpacity>
//         </View>
//       </View>
//     </>
//   );
// }

import {
  Text,
  StyleSheet,
  View,
  PanResponder,
  TouchableOpacity,
  Animated,
} from "react-native";

import React, { useState, useRef } from 'react';

export default function TaskItemSwipable({ item, onDelete }: Props) {
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
          <Text>{item.text}</Text>
        </View>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => onDelete(item.id)}
        >
          <Text style={styles.deleteButtonText}>Delete</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}