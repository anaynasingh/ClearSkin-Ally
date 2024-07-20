import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NavigationProp } from '../../navigation/types'; // Import the defined types
import { useNavigation } from '@react-navigation/native';

export default function DietTrackerScreen() {
  const navigation = useNavigation<NavigationProp>(); // Use the typed navigation prop

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Diet Tracker</Text>
      {/* Add mood tracking UI here */}
      <Button title="Back to Home" onPress={() => navigation.goBack()} />
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
});
