import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity,TextInput} from 'react-native';
import { ListItem,Header} from 'react-native-elements'
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import firebase from 'firebase';
import {AppDrawerNavigator} from './components/AppDrawerNavigator'
import WelcomeScreen from './screens/WelcomeScreen'
import {AppTabNavigator} from './components/AppTabNavigator'
export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    )
    }
  }
  const SwitchNavigator = createSwitchNavigator({
    WelcomeScreen:WelcomeScreen,
    AppTabNavigator:AppTabNavigator,
  })
  const AppContainer =  createAppContainer(SwitchNavigator) 
