import { NavigationContainer } from '@react-navigation/native'
import Home from './src/components/views/Home'
import ToDoVIew from './src/components/views/ToDoVIew'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { StatusBar } from 'expo-status-bar'

const Tab = createMaterialBottomTabNavigator()

export default function App() {
    return (
        <NavigationContainer>
            <StatusBar backgroundColor = "tomato" translucent = {true} hidden={false}/>
            <Tab.Navigator
                initialRouteName="Home"
                activeColor="#e91e63"
                barStyle={{ backgroundColor: 'tomato' }}
            >
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        title: 'Home',
                        activeColor: 'blue',
                        tabBarIcon: () => (
                            <MaterialCommunityIcons name="home" color="#000" size={26} />
                        )
                    }}
                />
                <Tab.Screen
                    name="Settings"
                    component={ToDoVIew}
                    options={{
                        title: 'Todos',
                        activeColor: 'blue',
                        tabBarIcon: () => (
                            <MaterialCommunityIcons name="account" size={26} />
                        )
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}


