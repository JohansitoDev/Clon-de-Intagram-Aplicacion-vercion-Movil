
import React from 'react';
import { Image, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const PostImage = ({ postImage }) => {
  return <Image source={postImage} style={styles.postImage} />;
};

const styles = StyleSheet.create({
  postImage: {
    width: width,
    height: width, 
  },
});

export default PostImage;