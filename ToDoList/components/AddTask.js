import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

const AddTask = ({onAddTask}) => {
    const [title, setTitle] = useState("");

    const handleAddTask = () => {
        if (title.trim() !== "") {
            onAddTask(String(title));
            setTitle("");
        }
    }

    return (
        <View>
            <TextInput
                placeholder = "Enter new todo title here"
                value = {title}
                onChangeText={(input) => setTitle(input)}
                returnKeyType='done'
            />
            <Button title = "Add task" onPress={handleAddTask}/>
        </View>
    );
}

const styles = StyleSheet.create({
    addTodoForm: {
      margin: 10,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
});

export default AddTask;