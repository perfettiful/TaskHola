import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

type Props = {
  taskCounter: number;
}

export function Info({ taskCounter }: Props) {

  return (
    <>
      <View style={styles.container}>
        <View style={styles.todoContainer}>
          <Text style={styles.taskCounter}>Tasks Todo: {taskCounter}</Text>
        </View>
      </View>
      <View style={styles.horizontalBar} />
    </>
  );
}