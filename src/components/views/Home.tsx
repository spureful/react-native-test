import { StyleSheet, Text, View } from 'react-native'

function Home() {
    return (

        <View style={styles.wrapper}>
            <Text style={styles.text}>
                Home
            </Text>
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
    text: {
        color: 'white'
    }
})

export default Home