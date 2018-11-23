import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import {createStackNavigator,createBottomTabNavigator} from 'react-navigation';

import Home from '../pages/home/Home';
import User from '../pages/user/User';
import News from '../pages/news/News';
import Message from '../pages/message/Message';
import Publish from '../pages/publish/publish'


const TabScreens = createBottomTabNavigator(
    {
        首页:{
            screen:Home,
            navigationOptions:({})=>({
                tabBarIcon:({ focused })=>{
                    return(
                        focused?
                            <Image style={styles.tabIconImg} source={require('../images/tab_icon_home_s.png')}/>
                        :
                            <Image style={styles.tabIconImg} source={require('../images/tab_icon_home_n.png')}/>
                    )
                }
            })
        },
        资讯:{
            screen:News,
            navigationOptions:({})=>({
                tabBarIcon:({ focused })=>{
                    return(
                        focused?
                            <Image style={styles.tabIconImg} source={require('../images/tab_icon_news_s.png')}/>
                        :
                            <Image style={styles.tabIconImg} source={require('../images/tab_icon_news_n.png')}/>
                    )
                }
            })
        },
        消息:{
            screen:Message,
            navigationOptions:({})=>({
                tabBarIcon:({ focused })=>{
                    return(
                        focused?
                            <Image style={styles.tabIconImg} source={require('../images/tab_icon_message_s.png')}/>
                        :
                            <Image style={styles.tabIconImg} source={require('../images/tab_icon_message_n.png')}/>
                    )
                }
            })
        },
        我的:{
            screen:User,
            navigationOptions:({})=>({
                tabBarIcon:({ focused })=>{
                    return(
                        focused?
                            <Image style={styles.tabIconImg} source={require('../images/tab_icon_my_s.png')}/>
                        :
                            <Image style={styles.tabIconImg} source={require('../images/tab_icon_my_n.png')}/>
                    )
                }
            })
        },
    },
    {
        initialRouteName:'首页',
        tabBarOptions:{
            activeTintColor: '#7B9FFF',
            inactiveTintColor: '#9EA6BE',
            style: {
                backgroundColor: '#FFF',
            },
        },
    }

);

const AppNavigation = createStackNavigator(
    {
        TabScreens: {
            screen: TabScreens,
            // navigationOptions:{
            //     header:null
            // }
        },
    },
    {
       
    }
);
export default AppNavigation

const styles=StyleSheet.create({
    tabIconImg:{
        width:40,
        height:40
    }
})