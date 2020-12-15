import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import CompanyScreen from '../screens/CompanyScreen'
import CompanyName from '../screens/CompanyName'

export const AppTabNavigator = createBottomTabNavigator({
  CompanyList : {
    screen: CompanyScreen,
    navigationOptions :{
      tabBarLabel : "Company List",
    }
  },
  CompanyName: {
    screen: CompanyName,
    navigationOptions :{
      tabBarLabel : "Company Name",
    }
  }
});
