import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
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

export function TaskItem({ name, isDone, onRemove, onCheckPressed }: Props) {
  const [isChecked, setChecked] = useState(false);

  return (
    <>
      <View style={styles.container}>
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

        {isChecked ? (
          <Text style={styles.taskDone}>{name.task_description}</Text>
        ) : (
          <Text style={styles.taskAdd}>{name.task_description}</Text>
        )}

        <View style={styles.actionButtonsContainer}>
          <TouchableOpacity style={styles.button} onPress={onRemove}>
            <AntDesign name='left' size={12} color={'#808080'} />
            <AntDesign name='delete' size={12} color={'#808080'} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}