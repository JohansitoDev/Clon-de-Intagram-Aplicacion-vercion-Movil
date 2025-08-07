
import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import PostItem from './PostItem';
import Stories from './Stories';
import BottomNavbar from './BottomNavbar';


const posts = [
  {
    id: '1',
    user: 'johndoe',
    userImage: 'https://randomuser.me/api/portraits/men/1.jpg',
    postImage: 'https://picsum.photos/id/237/800/800',
    likes: 1234,
    caption: '¡Un día increíble en la playa! ☀️ #travel #beach',
  },
  {
    id: '2',
    user: 'janedoe',
    userImage: 'https://randomuser.me/api/portraits/women/2.jpg',
    postImage: 'https://picsum.photos/id/1084/800/800',
    likes: 856,
    caption: 'Un buen café para empezar el día. ☕ #coffee #morning',
  },
  {
    id: '3',
    user: 'pedro_perez',
    userImage: 'https://randomuser.me/api/portraits/men/3.jpg',
    postImage: 'https://picsum.photos/id/1025/800/800',
    likes: 2100,
    caption: 'Explorando la naturaleza. 🌲 #nature #hiking',
  },
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Stories />
      <FlatList
        data={posts}
        renderItem={({ item }) => <PostItem post={item} />}
        keyExtractor={(item) => item.id}
      />
      <BottomNavbar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;