import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/types'; // Adjust the import path if necessary

type CartScreenProps = StackScreenProps<RootStackParamList, 'Cart'>;

export default function CartScreen({ route }: CartScreenProps) {
  const { cart } = route.params || { cart: [] }; // Handle the route params

  return (
    <View style={styles.container}>
      <Text style={styles.cartTitle}>Cart</Text>
      {cart.length === 0 ? (
        <Text style={styles.emptyCartText}>Your cart is empty</Text>
      ) : (
        <FlatList
          data={cart}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.cartItem}>
              <Image source={{ uri: item.image }} style={styles.productImage} />
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cartTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 10,
  },
  emptyCartText: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 20,
  },
  cartItem: {
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
});
