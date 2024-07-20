import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Image, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { NavigationProp } from '../../navigation/types'; // Import the defined types
import { useNavigation } from '@react-navigation/native';

// Define the type for a product
interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
  }
  
  // Define the type for the cart
  type Cart = Product[];
  

const products = [
  { id: '1', name: 'Face Wash', price: 12.99, image: './assets/images/facewash_cerave.jpeg' },
  { id: '2', name: 'Moisturizer', price: 22.99, image: './assets/images/moisturizer_cerave.jpeg' },
  { id: '3', name: 'Sunscreen', price: 18.99, image: './assets/images/sunscreen_larocheposay.jpeg' },
];
export default function ProductsScreen() {
    const navigation = useNavigation<NavigationProp>();
    const [cart, setCart] = useState<Cart>([]); // Specify Cart type for state
  
    // Add a product to the cart
    const addToCart = (product: Product) => {
      setCart([...cart, product]);
    };
  
    return (
      <View style={styles.container}>
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.productContainer}>
              <Image source={{ uri: item.image }} style={styles.productImage} />
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
              <Button title="Add to Cart" onPress={() => addToCart(item)} />
            </View>
          )}
        />
        <TouchableOpacity
          style={styles.cartButton}
          onPress={() => navigation.navigate('Cart', { cart })}
        >
          <Text style={styles.cartIcon}>🛒</Text>
          {cart.length > 0 && (
            <View style={styles.cartBadge}>
              <Text style={styles.cartBadgeText}>{cart.length}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
    );
  }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  productContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  productName: {
    flex: 1,
    fontSize: 16,
  },
  productPrice: {
    fontSize: 16,
    color: '#888',
  },
  cartButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 25,
  },
  cartIcon: {
    fontSize: 24,
    color: 'white',
  },
  cartBadge: {
    position: 'absolute',
    top: -5,
    right: -10,
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 3,
    minWidth: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartBadgeText: {
    color: 'white',
    fontSize: 12,
  },
});
