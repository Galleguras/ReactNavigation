import React, { useState,useEffect } from 'react';
import { FlatList, StyleSheet, View,Text } from 'react-native';
import ListItem from '../components/ListItem.js';



export default ({navigation}) => {
  
  const [loading, setLoading] = useState(true)
  const [users, setUsers] = useState([])
  const fetchUsers = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    setUsers(data)
    setLoading(false)
  }
  useEffect(() =>
  {  fetchUsers()},[]
  )
  return (

    <View style={styles.container}>
      {loading?<Text>Cargando...</Text>:
      <FlatList  style={styles.list}
        data={users}
        keyExtractor={(x) => String(x.id)}
        renderItem={({ item }) => <ListItem onPress={() => {
          navigation.navigate('Posts',{user_id: item.id,})
        }} title={item.name}></ListItem>}
      />}
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
