import { StyleSheet, Dimensions, TouchableHighlight, Text } from 'react-native'
import React from 'react'

const ButtonCalc = ({onClick,label}) => {
    return (
        <TouchableHighlight onPress={onClick}>
            <Text style={style.button}>{label}</Text>
        </TouchableHighlight>
    )
}

const style = StyleSheet.create({
    button: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding:20,
        backgroundColor:'#f0f0f0',
        textAlign: 'center',
        borderWidth:1,
        borderColor:'#888'
    }
})

export default ButtonCalc