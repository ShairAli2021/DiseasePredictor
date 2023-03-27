import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {
  Home,
  Predict,
  Dictionary,
  DiseaseDetail,
  Save_Report,
  About,
  ShowReport,
  SelectSymtom,
  Login,
  Register,
} from '../Screens';
import {CustomDrawer} from '../Components';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const Nagivation = () => {
  const DrawerNavigate = () => {
    return (
      <Drawer.Navigator
        initialRouteName="Disease Prediction"
        drawerContent={props => <CustomDrawer />}>
        <Stack.Screen name="Disease Prediction" component={Home} />
      </Drawer.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Disease Prediction">
        <Stack.Screen
          name="Home"
          component={DrawerNavigate}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Select Symptom" component={SelectSymtom} />
        <Stack.Screen name="Predict" component={Predict} />
        <Stack.Screen name="Dictionary" component={Dictionary} />
        <Stack.Screen name="Disease Detail" component={DiseaseDetail} />
        <Stack.Screen name="show" component={ShowReport} />
        <Stack.Screen name="about" component={About} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="register" component={Register} />
        <Stack.Screen name="save report" component={Save_Report} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Nagivation;

const styles = StyleSheet.create({});
