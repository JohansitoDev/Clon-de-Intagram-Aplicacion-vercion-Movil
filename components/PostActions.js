
import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

const PostActions = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftIcons}>
        <TouchableOpacity style={styles.iconButton}>
          <Text style={styles.iconText}>♡</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Text style={styles.iconText}>💬</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Text style={styles.iconText}>✈️</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.rightIcon}>
        <Text style={styles.iconText}>🔖</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  leftIcons: {
    flexDirection: 'row',
  },
  iconButton: {
    marginRight: 15,
  },
  iconText: {
    fontSize: 24,
  },
  rightIcon: {},
});

export default PostActions;