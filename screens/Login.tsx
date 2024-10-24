import React from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'

export const Login = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.tittle}>Hello there!!</Text>
            <Text style={styles.subTittle}>Signin into your account</Text>
            <TextInput style={styles.textInput} placeholder='pedro@example.com' />
            <TextInput style={styles.textInput} placeholder='passwordExample123' />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tittle: {
        fontSize: 70,
        color: '#000',
        fontWeight: 'bold',

    },
    subTittle: {
        fontSize: 20,
        color: 'gray',
    },
    textInput: {
        borderWidth: 1,
        padding: 10,
        paddingStart: 30,
        width: 350,
        height: 50,
        marginTop: 20,
        borderRadius: 30,
        backgroundColor: '#fff'
    },
})


