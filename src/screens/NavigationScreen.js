import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from './SearchScreen';
import ResultShowScreen from './ResultShowScreen';

const Stack = createStackNavigator();

const NavigationScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Search" component={SearchScreen} options={{ title: 'Business Search' }}/>    
        <Stack.Screen name="ResultShow" component={ResultShowScreen} />    
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationScreen;
