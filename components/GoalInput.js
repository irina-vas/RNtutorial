import React from 'react';
import { StyleSheet,  View, TextInput, Button } from 'react-native';

export const GoalInput = ({ goalInputHandler, addGoalHandler }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder='enter smth'
        style={styles.textInput}
        onChangeText={goalInputHandler} />
      <Button color="#334740" title="Add text" onPress={addGoalHandler}
    />
  </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
});
