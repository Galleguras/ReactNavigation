import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Soy la pantalla Principal</Text>
      <Button title="Ir a Detalle" onPress={() => navigation.push('Detalle')} />
    </View>
  );
};

const DetailScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Soy la pantalla Detalle</Text>
      <Button title="Volver" onPress={() => navigation.goBack()} />
    </View>
  );
};

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Detalle: {
      screen: DetailScreen,
    },
  },
  { initialRouteName: 'Home' }
);
export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
  },
});
