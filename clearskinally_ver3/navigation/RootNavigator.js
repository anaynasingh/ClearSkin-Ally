import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../app/screens/HomeScreen';
import MoodTrackerScreen from '../app/screens/MoodTrackerScreen';
// Import other screens as needed
import DietTrackerScreen from '@/app/screens/DietTrackerScreen';
import CartScreen from './screens/CartScreen'; 
import ProductsScreen from './screens/ProductsScreen'; 

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="MoodTracker" component={MoodTrackerScreen} />
      <Stack.Screen name="DietTracker" component={DietTrackerScreen} />
      <Stack.Screen name="ProductsScreen" component={ProductsScreen} />
      <Stack.Screen name="Cart" component={CartScreen} options={{ title: 'Your Cart' }} />

      
      {/* Add other screens here */}
    </Stack.Navigator>
  );
}
