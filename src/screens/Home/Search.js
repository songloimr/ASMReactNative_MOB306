import {
    Image, StyleSheet, Text,
    TextInput, TouchableHighlight, View
} from 'react-native'
import React from 'react'

const Search = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableHighlight>
                    <Image source={require('../../assets/images/searchIcon.png')} />
                </TouchableHighlight>
                <TextInput
                    style={styles.input}
                    placeholder="Search"
                    placeholderTextColor={'gray'}
                />
                <TouchableHighlight>
                    <Image source={require('../../assets/images/xIcon.png')} />
                </TouchableHighlight>
            </View>

            <Text style={styles.txtTitle}>News</Text>
            <View style={styles.container}>

            </View>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    txtTitle: {
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 22,
        color: '#000000',
        marginTop: 16,
        borderBottomColor: '#1877F2',
        borderBottomWidth: 4,
        paddingBottom: 8,
    },
    input: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 24,
        color: '#000000',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: 48,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#4E4B66',
        borderRadius: 6,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
        padding: 24,
    },
})