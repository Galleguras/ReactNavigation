import { StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import DetailScreen from './screens/Detail.js';
import PostsScreen from './screens/Posts.js';
import UsersScreen from './screens/Users.js';


const AppNavigator = createStackNavigator(
  {
    Users: {
      screen: UsersScreen,
    },
    Posts: {
      screen: PostsScreen,
    },
    Detail: {
      screen: DetailScreen,
    },
  },
  { initialRouteName: 'Users' }
);
export default createAppContainer(AppNavigator);


