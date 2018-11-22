import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Image} from 'react-native';

export default class Home extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.inputBox}>
                        <Image style={{width:24,height:24,marginLeft:16}} source={require('../../images/nav_ico_search.png')}/>
                        <TextInput placeholder='你想住在哪？'></TextInput>
                    </View>
                    <Image/>
                    <Text>临沂</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    header:{
        width:'100%',
        height:45,
        display:'flex',
        flexDirection:'row',
        alignContent:'center',
        paddingHorizontal:15,
        paddingVertical:5,
    },
    inputBox:{
        width:272,
        height:'100%',
        borderRadius:5,
        borderWidth:1,
        borderColor:'#DDE2EF',
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    }
})