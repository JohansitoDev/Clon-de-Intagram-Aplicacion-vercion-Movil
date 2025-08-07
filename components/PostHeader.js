
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const PostHeader = ({ userImage, userName }) => {
  return (
    <View style={styles.container}>
      <Image source={userImage} style={styles.profileImage} />
      <Text style={styles.userName}>{userName}</Text>
      <TouchableOpacity style={styles.optionsButton}>
        <Text style={styles.optionsText}>...</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  profileImage: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    marginRight: 10,
  },
  userName: {
    fontWeight: 'bold',
    flex: 1,
  },
  optionsButton: {
    padding: 5,
  },
  optionsText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default PostHeader;