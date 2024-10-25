import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './screens/Home';
import { Carrito } from './screens/Carrito';

export default function App() {
  return (
    <Home/>,
    <Carrito/>
  );
}
