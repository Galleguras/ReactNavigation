import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';
export default ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.texto}>{title}</Text>
    </TouchableOpacity>
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
