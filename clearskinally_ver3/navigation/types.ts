import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp as RNRouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  Home: undefined;
  UserProfile: undefined;
  MoodTracker: undefined;
  Insights: undefined;
  Community: undefined;
  Signup: undefined;
  DietTracker: undefined;
  ProductsScreen: undefined;
  Cart: { cart: Array<{ id: string; name: string; price: number; image: string }> }; // Ensure correct definition
};

export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
export type RouteProp<Screen extends keyof RootStackParamList> = RNRouteProp<RootStackParamList, Screen>;
