import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList } from 'react-native';
import { GoalItem } from './components/GoalItem';
import { GoalInput } from './components/GoalInput';

export default function App() {
  const [enteredGoalText, setEneteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  const goalInputHandler = (enteredText) => {
    setEneteredGoalText(enteredText);
  }
  const addGoalHandler = () => {
    setCourseGoals(currentCourseGoals => [
      ...courseGoals,
      { text: enteredGoalText, key: Math.random().toString() }
    ]);
  }
  return (
    <View style={styles.container}>
      <GoalInput goalInputHandler={goalInputHandler} addGoalHandler={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          alwaysBounceVertical={false}
          renderItem={itemData => <GoalItem text={itemData.item.text} />}
          keyExtractor={(item, index) => index}
        >
        </FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#cce3dc'
  },
  goalsContainer: {
    flex: 5,
  }
});
