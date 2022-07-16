import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList, Pressable, Text } from 'react-native';
import { GoalItem } from './components/GoalItem';
import { GoalInput } from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisiable, setIsModalVisiable] = useState(false);
  const startAddGoalHandler = () => {
    console.log('modalIsVisiable', modalIsVisiable);
    setIsModalVisiable(true);
  }
  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() }
    ]);
    endAddGoalHandler();
  }

  const deleteGoalHandler = (id) => {
    setCourseGoals(currentCourseGoal => {
      return currentCourseGoal.filter((goal) => goal.id !== id)
    });
  };

  const endAddGoalHandler =() => {
    setIsModalVisiable(false);
  }

  return (
    <>
      <StatusBar style='dark' />
      <View style={styles.container}>
        <Pressable onPress={startAddGoalHandler} style={styles.button}>
          <Text style={styles.buttonText}>Add new Goal</Text>
        </Pressable>
        {modalIsVisiable && <GoalInput addGoal={addGoalHandler} showModal={modalIsVisiable} endAddGoalHandler={endAddGoalHandler} />}
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            alwaysBounceVertical={false}
            renderItem={itemData => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteGoalHandler}
                />)}
              
            }
            keyExtractor={(item, index) => {
              return item.id;
            }}
          >
          </FlatList>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#fdf990'
  },
  goalsContainer: {
    flex: 5,
  },
  button: {
    padding: 20,
    backgroundColor: '#2803b0',
    borderRadius: 6,
    marginTop: 50,
  },
  buttonText: {
    fontSize: 25,
    alignSelf: 'center',
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase'
  }
});
