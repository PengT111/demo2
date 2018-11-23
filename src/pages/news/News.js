import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class News extends Component {
    static navigationOptions=({})=>({
        headerTitle:'ss',
    })
    render() {
        return (
            <View>
                <Text>this is news</Text>
            </View>
        );
    }
}

const styles=StyleSheet.create({

})