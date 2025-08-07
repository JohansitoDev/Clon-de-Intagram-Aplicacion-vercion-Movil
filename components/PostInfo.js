
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PostInfo = ({ likes, userName, caption }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.likesText}>
        **{likes.toLocaleString()} Me gusta**
      </Text>
      <Text style={styles.captionText}>
        <Text style={styles.userName}>{userName}</Text> {caption}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingBottom: 5,
  },
  likesText: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  captionText: {
    fontSize: 14,
  },
  userName: {
    fontWeight: 'bold',
  },
});

export default PostInfo;