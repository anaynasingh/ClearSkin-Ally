import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { NavigationProp } from '../../navigation/types';

export default function SignupScreen() {
    const navigation = useNavigation<NavigationProp>();

    const signInWithEmail = () => {
        // Define your logic for signing in with email
        navigation.navigate('Home');
    };

    const signInWithGoogle = () => {
        // Define your logic for signing in with Google
        navigation.navigate('Home');
    };

    const signInWithApple = () => {
        // Define your logic for signing in with Apple
        navigation.navigate('Home');
    };

    return (
      <View style={styles.container}>
        <Image source={require('@/assets/images/humanfemaleface.png')} style={styles.logo}/>
        <Text style={styles.title}>Welcome to Acne Ally</Text>
        <Text style={styles.subtitle}>
          Acne Ally is your go-to app for battling acne with confidence. Discover how you can take control of your skin health in a soothing and supporting environment.
        </Text>
        
        <TouchableOpacity style={[styles.secondaryButton1]} onPress={signInWithEmail}> 
          <View style={styles.icon}><FontAwesome name="envelope" size={20} color="#007bff" /></View>
          <View><Text style={styles.buttonText}>Sign in with Email</Text></View>        
        </TouchableOpacity>
        <TouchableOpacity style={[styles.secondaryButton2]} onPress={signInWithGoogle}>
          <View style={styles.icon}><FontAwesome name="google" size={20} color="#007bff" /></View>
          <View><Text style={styles.buttonText}>Sign in with Google</Text></View>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.secondaryButton3]} onPress={signInWithApple}>
          <View style={styles.icon}><FontAwesome name="apple" size={20} color="#007bff" /></View>
          <View><Text style={styles.buttonText}>Sign in with Apple ID</Text></View>
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      paddingHorizontal: 40, 
    },
    logo: {
      width: 200, 
      height: 200, 
      marginBottom: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
      textAlign: 'center',
    },
    subtitle: {
      fontSize: 15,
      textAlign: 'center',
      marginBottom: 30,
    },
    secondaryButton1: {
      flexDirection: 'row', 
      backgroundColor: '#fff',
      borderColor: '#007bff',
      borderWidth: 1,
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 10, 
      marginBottom: 20, 
      width: '100%', 
    },
    secondaryButton2: {
      flexDirection: 'row', 
      backgroundColor: '#fff',
      borderColor: '#007bff',
      borderWidth: 1,
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 10, 
      marginBottom: 20, 
      width: '100%', 
    },
    secondaryButton3: {
      flexDirection: 'row', 
      backgroundColor: '#fff',
      borderColor: '#007bff',
      borderWidth: 1,
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 10, 
      marginBottom: 20, 
      width: '100%', 
    },
    buttonText: {
      color: '#007bff',
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
      marginLeft: 10,
    },
    icon: {
        paddingRight: 10,
    },
});
