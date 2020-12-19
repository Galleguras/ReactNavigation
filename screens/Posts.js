import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import ListItem from '../components/ListItem.js';
export default ({ navigation }) => {
  const userId = navigation.getParam('user_id');
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const fetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    setPosts(data);
    setLoading(false);
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Cargando...</Text>
      ) : (
        <FlatList
          style={styles.list}
          data={posts.filter((x) => x.userId === userId)}
          keyExtractor={(x) => String(x.id)}
          renderItem={({ item }) => (
            <ListItem
              onPress={() => {
                navigation.navigate('Posts', { user_id: item.id });
              }}
              title={item.title}
            ></ListItem>
          )}
        />
      )}
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
  list: {
    alignSelf: 'stretch',
  },
});
