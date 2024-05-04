import { StyleSheet, View, ActivityIndicator, FlatList } from 'react-native'
import ToDoItem from './ToDoItem'
import { useState, useEffect } from 'react'
import { apiGetTodos } from '../../network'

function ToDoList() {
    const [isLoading, setIsLoading] = useState(false)
    const [toDoList, setToDOList] = useState([])
    const getTodos = async() => {
        try {
            setIsLoading(true)
            const response = await apiGetTodos()
            setToDOList(response)
        } catch(e) {
            console.error('failed fetch', e)
        } finally {
            setIsLoading(false)
        }
    }
    useEffect(() => {
        getTodos()
      
    }, [])
    return (
        <View style={styles.wrapper}>
            {isLoading ? (<ActivityIndicator/>) :  (
                <FlatList
                    data={toDoList}
                    keyExtractor={({ id }) => id}
                    renderItem={({ item }) => (
                        <ToDoItem todo={item} key={item.id}/>
                    )}
                />
            )}
        </View>    )
};

const styles = StyleSheet.create({
    wrapper: {
        alignSelf: 'flex-start',
        display: 'flex',
        flexDirection: 'column'
    }
})

export default ToDoList