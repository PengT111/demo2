import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator,createBottomTabNavigator} from 'react-navigation';

import Home from '../pages/home/Home';
import User from '../pages/user/User';
import Publish from '../pages/publish/publish'


const TabScreens = createBottomTabNavigator(
    {
        Home:{
            screen:Home,
        },
        User:{
            screen:User
        },
        Publish:{
            screen:Publish,
            tabBarOptions:{
                style:{
                    
                }
            }
        }
    },
    {
        initialRouteName:'Home',
        tabBarOptions:{
            activeTintColor: '#FED84E',
            inactiveTintColor: '#000000',
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
            navigationOptions:{
                header:null
            }
        },
    },
    {
       
    }
);
export default AppNavigation

