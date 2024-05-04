import {StyleSheet, Text, View} from 'react-native';
import IToDo from "../../interfaces/IToDo";

interface IToDoItemProps {
    todo: IToDo,
}

function ToDoItem({todo}: IToDoItemProps) {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}>
                {todo.title}
            </Text>
            <Text style={styles.content}>
                {todo.releaseYear}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#b95151',
    },
    title: {
        fontWeight: 'bold'
    },
    content: {
        color: 'grey'
    },
});

export default ToDoItem;