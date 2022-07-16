import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export const GoalItem = ({ text, onDeleteItem, id }) => {

  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={onDeleteItem.bind(this, id)}
        android_ripple={{ color: '#334740' }}
        style={({pressed}) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 5,
    backgroundColor: '#ddebe6',
    borderWidth: 0.2,
    borderColor: '#334740',
    borderRadius: 5
  },
  goalText: {
    color: '#334740',
    padding: 10
  },
  pressedItem: {
    color: 'fff',
    padding: 8
  }
});
