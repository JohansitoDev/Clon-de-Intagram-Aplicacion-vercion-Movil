
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';


const stories = [
  { id: '1', user: 'Tu historia', image: 'https://randomuser.me/api/portraits/men/7.jpg' },
  { id: '2', user: 'maría', image: 'https://randomuser.me/api/portraits/women/4.jpg' },
  { id: '3', user: 'carlos', image: 'https://randomuser.me/api/portraits/men/5.jpg' },
  { id: '4', user: 'ana', image: 'https://randomuser.me/api/portraits/women/6.jpg' },
  { id: '5', user: 'luis', image: 'https://randomuser.me/api/portraits/men/8.jpg' },
  { id: '6', user: 'sofía', image: 'https://randomuser.me/api/portraits/women/9.jpg' },
  { id: '7', user: 'diego', image: 'https://randomuser.me/api/portraits/men/10.jpg' },
];

const StoryItem = ({ user, image }) => (
  <View style={styles.storyContainer}>
    <Image source={{ uri: image }} style={styles.storyImage} />
    <Text style={styles.storyUser}>{user}</Text>
  </View>
);

const Stories = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container}>
      {stories.map((story) => (
        <StoryItem key={story.id} user={story.user} image={story.image} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingVertical: 10,
  },
  storyContainer: {
    alignItems: 'center',
    marginHorizontal: 8,
  },
  storyImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#e1306c',
  },
  storyUser: {
    marginTop: 5,
    fontSize: 12,
  },
});

export default Stories;