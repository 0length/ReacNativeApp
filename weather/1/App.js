import React from 'react';
import { StyleSheet, Test, View } from 'react-native';

export default class App extends React.Componet {
    render(){
        return (
            <View style={StyleSheet.container}>
                <Text style={{ color: 'red' }}>Test 1</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});