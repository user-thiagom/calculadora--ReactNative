import { StyleSheet, Dimensions, TouchableHighlight, Text } from 'react-native'
import React from 'react'

const ButtonCalc = ({ onClick, label, double, triple, operation }) => {

    const stylesButton = [style.button]

    if (double)
        stylesButton.push(style.buttonDouble)

    if (triple)
        stylesButton.push(style.buttonTriple)

    if (operation)
        stylesButton.push(style.operationButton)

    return (
        <TouchableHighlight onPress={() => onClick(label)}>
            <Text style={stylesButton}>{label}</Text>
        </TouchableHighlight>
    )
}

const style = StyleSheet.create({
    button: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888'
    },
    operationButton: {
        color: 'white',
        backgroundColor: 'orange'
    },
    buttonDouble: {
        width: (Dimensions.get('window').width / 4) * 2,
    },
    buttonTriple: {
        width: (Dimensions.get('window').width / 4) * 3
    }
})

export default ButtonCalc