import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { styles } from './styles';

import Checkbox from 'expo-checkbox';
import { Task } from '../..';

type Props = {
  name: Task;
  onRemove: () => void;
  onCheckPressed: (value: boolean) => void;
}

export function TaskItem({ name, onRemove, onCheckPressed }: Props) {
  const [isChecked, setChecked] = useState(false);

  return (
    <>
      <View style={styles.container}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
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
            <AntDesign name='delete' size={24} color={'#808080'} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}