import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import AddTask from './AddTask';

const ToDoList = ({toDos}) => {
    const [titles, update_titles] = useState(toDos.map((value) => ({id : uuidv4(), title: value}))); // getting all values in titles?

    const addToDo = (newTitle) => (
        update_titles((prevTitles) => [...prevTitles, {id : uuidv4(), title : newTitle}])
    );

    const removeToDo = (id) => (
        //titles.filter((titles) => titles.id != id)
        update_titles(titles.filter((title) => title.id !== id))
    );

    /* comment for my own js and react understanding

    {titles.map((titles) => all that} is to do the same action over all outputs of map
    */
    return (
        <View style = {styles.todoListContainercontainer}>
            {titles.map((titles) => (
                <View key={titles.id}>
                    <Text style = {styles.todoItem}>{titles.title}</Text>
                    <View style={styles.buttonContainer}>
                        <Button title="remove" onPress={() => removeToDo(titles.id)} />
                    </View>
                </View>
            ))}
            <AddTask onAddTask={addToDo}></AddTask>
        </View>
    );
};

ToDoList.defaultProps = {
    toDos: [0],
  };

const styles = StyleSheet.create({
    todoListContainer: {
      margin: 10,
    },
    todoItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      marginVertical: 5,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
    },
});

export default ToDoList;