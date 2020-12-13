import React ,{useEffect,useState}from 'react';
import { Text, View, StyleSheet } from 'react-native';
export default ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    paddingHorizontal: 12,

    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'red',
  },
  texto: {
    fontSize: 18,
  },
});
