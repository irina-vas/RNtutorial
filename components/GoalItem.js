import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const GoalItem = ({ text }) => {

  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 5,
    backgroundColor: '#ddebe6',
    borderWidth: 0.2,
    borderColor: '#334740',
    borderRadius: 5,
    padding: 10
  },
  goalText: {
    color: '#334740',
  }
});
