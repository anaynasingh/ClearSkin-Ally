import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '../../navigation/types';

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Acne Ally</Text>
      <TouchableOpacity onPress={() => navigation.navigate('MoodTracker')}>
        <Text style={styles.link}>Log Mood</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Community')}>
        <Text style={styles.link}>Community</Text>
      </TouchableOpacity>
     
      <TouchableOpacity onPress={() => navigation.navigate('DietTracker')}>
        <Text style={styles.link}>Diet Tracker</Text>
      </TouchableOpacity> 
      <TouchableOpacity onPress={() => navigation.navigate('ProductsScreen')}>
        <Text style={styles.link}>View Recommended Products</Text>
      </TouchableOpacity> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  link: {
    fontSize: 18,
    color: 'blue',
    marginBottom: 10,
  },
});
