import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, ScrollList, FlatList, TextInput, Image,Platform, StatusBar} from 'react-native';

export default class Home extends Component{

    constructor(props){
        super(props)
    }

    sectionItem(item){
        
    }

    render(){
        return(
            <ScrollView style={styles.container} 
                keyboardDismissMode={'on-drag'}
                keyboardShouldPersistTaps={'never'}
            >
                <StatusBar
                    translucent={true}
                    backgroundColor={'transparent'}
                    barStyle={'dark-content'}
                />
                <View style={styles.header}>
                    <View style={styles.inputBox}>
                        <Image style={{width:24,height:24,marginLeft:16}} source={require('../../images/nav_ico_search.png')}/>
                        <TextInput 
                            style={styles.input}
                            placeholder='你想住在哪？'
                            placeholderTextColor={'#999999'}
                            underlineColorAndroid="transparent"
                        ></TextInput>
                    </View>
                    <Image style={{width:12,height:15}} source={require('../../images/nav_icon_locate.png')}/>
                    <Text style={{fontSize:14,color:'#333'}}>临沂</Text>
                </View>
                <FlatList
                    
                />
            </ScrollView>
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
        alignItems:'center',
        paddingHorizontal:15,
        paddingVertical:5,
        justifyContent: 'space-between',
        marginTop:Platform.OS==='android'?StatusBar.currentHeight :29
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
    },
    input:{
        padding:0,
        flex:1
    }
})