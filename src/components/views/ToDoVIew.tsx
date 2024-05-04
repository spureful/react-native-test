import { StyleSheet, Text, View } from 'react-native'
import ToDoList from '../ToDos/ToDoList'

function ToDoVIew() {
    return (
        <View style={styles.wrapper}>
            <ToDoList/>
        </View>
    )
};

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: 'grey',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontWeight: 'bold'
    }
})

export default ToDoVIew