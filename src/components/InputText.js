import { StyleSheet, Text, View, TextInput, Image } from 'react-native'
import React from 'react'

const InputText = ({ placeholder = '', startIcon, endIcon }) => {
    return (
        <View style={styles.container}>
            {startIcon && <Image source={startIcon}></Image>}
            <TextInput style={styles.inputText} placeholder={placeholder} />
            {endIcon && <Image source={endIcon}></Image>}
        </View>
    )
}

export default InputText

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderRadius: 6,
        borderColor: '#4E4B66',
        paddingHorizontal: 8
    },
    inputText: {
        marginLeft: 8,
        flex: 1
    }
})