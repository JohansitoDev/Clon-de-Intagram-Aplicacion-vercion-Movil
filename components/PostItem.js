
import React from 'react';
import { View, StyleSheet } from 'react-native';
import PostHeader from './PostHeader';
import PostImage from './PostImage';
import PostActions from './PostActions';
import PostInfo from './PostInfo';

const PostItem = ({ post }) => {
  return (
    <View style={styles.container}>
      <PostHeader userImage={{ uri: post.userImage }} userName={post.user} />
      <PostImage postImage={{ uri: post.postImage }} />
      <PostActions />
      <PostInfo likes={post.likes} userName={post.user} caption={post.caption} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});

export default PostItem;