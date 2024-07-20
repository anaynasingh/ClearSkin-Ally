import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import SignupScreen from './screens/SignupScreen';
import MoodTrackerScreen from './screens/MoodTrackerScreen';
import DietTrackerScreen from './screens/DietTrackerScreen';
import ProductsScreen from './screens/ProductsScreen';
import CartScreen from './screens/CartScreen';
import { RootStackParamList } from '../navigation/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="MoodTracker" component={MoodTrackerScreen} />
        
        {/* Add DietTrackerScreen here if it's a part of your screens */}
        <Stack.Screen name="DietTracker" component={DietTrackerScreen} />
        <Stack.Screen name="ProductsScreen" component={ProductsScreen} />
        <Stack.Screen name="Cart" component={CartScreen} options={{ title: 'Your Cart' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
