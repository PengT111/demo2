import React, { Component } from 'react';
import { View,Text,StyleSheet,Image } from 'react-native';

export default class Publish extends Component{
    static navigationOptions = ({navigation}) => ({
        header:null
    });
    render(){
        return(
            <View>
                <Text>发布</Text>
            </View>
        )
    }
}

const styles=StyleSheet.create({

})