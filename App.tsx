import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {ListingScreen} from './app/screens/ListingScreen/ListingScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListingScreen">
        <Stack.Screen name="ListingScreen" component={ListingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
