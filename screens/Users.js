import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ListItem from '../components/ListItem.js';

const users = [
  { id: 1, name: 'asd  asd' },
  { id: 2, name: 'asd sdf' },
];

export default () => {
  return (
    <View style={styles.container}>
      <FlatList  style={styles.list}
        data={users}
        keyExtractor={(x) => x.id}
        renderItem={({ item }) => <ListItem title={item.name}></ListItem>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  list:{
      alignSelf:'stretch'
  }
});
