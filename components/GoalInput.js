import React, { useState } from 'react';
import { StyleSheet,  View, TextInput, Button, Modal, Image } from 'react-native';

export const GoalInput = ({ addGoal, showModal, endAddGoalHandler }) => {
   const [enteredGoalText, setEneteredGoalText] = useState('');
  const goalInputHandler = (enteredText) => {
    setEneteredGoalText(enteredText);
  }
  const addGoalHandler = () => {
    addGoal(enteredGoalText);
    setEneteredGoalText('');
  }
  return (
    <Modal visible={showModal} animationType="slide">
      <View style={styles.inputContainer}>
        <Image source={require('../assets/images/goal.png')} style={styles.image} />
        <TextInput
          placeholder='enter smth'
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttons}>
          <View style={styles.buttonRight}><Button color="#991f1f" title="Cancel" onPress={endAddGoalHandler} /></View>
          <View style={styles.buttonLeft}><Button color="#dac402" title="Add text" onPress={addGoalHandler} /></View>
        </View>
    </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#0043bd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '100%',
    marginRight: 8,
    borderRadius: 6,
    padding: 16,
    borderColor: '#dac402',
  },
  buttons: {
    marginTop: 25,
    flexDirection: 'row',
  },
  buttonLeft: {
    width: '34.5%',
    marginRight: 5
  },
  buttonRight: {
    width: '34.5%',
    marginRight: 8
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  }
});
