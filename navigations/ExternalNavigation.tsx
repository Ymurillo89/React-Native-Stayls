import React from "react";
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";


//Importamos las vistas
import BusyDate from '../views/internal/BusyDate'
import DateAvailable from "../views/internal/DateAvailable";
import Report from "../views/internal/Report";
import TimeTable from "../views/internal/TimeTable";


const Tabs = () => {
  const Tab= createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name="BusyDate" component={BusyDate}/>
      <Tab.Screen name="DateAvailable" component={DateAvailable}/>
      <Tab.Screen name="TimeTable" component={TimeTable}/>
    </Tab.Navigator>
  )
}

const InternalNavigation= () => {
  return(
    <NavigationContainer>
      <Tabs></Tabs>
    </NavigationContainer>
  )
}

export default InternalNavigation
