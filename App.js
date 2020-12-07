import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [cont, setCont] = useState(0);
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
const fetchUser = async () => 
  {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const json = await response.json();

    setUsers(json);
    setLoading(false);
  }

  useEffect( () =>{fetchUser() }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text} onPress={() => setCont(cont + 1)}>
        {loading
          ? `Cargando`
          : `Open up App.js to start working on your app! ${users[0].name}`}
      </Text>
    </View>
  );
}

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
