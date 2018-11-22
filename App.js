import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import AppNavigation from './src/navigation/AppNavigation'


export default class App extends Component {
  render() {
    return (
      <AppNavigation/>
    );
  }
}

const styles = StyleSheet.create({
});
