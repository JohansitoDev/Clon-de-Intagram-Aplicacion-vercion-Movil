
import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

const BottomNavbar = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconButton}>
        <Text style={styles.iconText}>🏠</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButton}>
        <Text style={styles.iconText}>🔍</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButton}>
        <Text style={styles.iconText}>🎬</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButton}>
        <Text style={styles.iconText}>❤️</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButton}>
        <Text style={styles.iconText}>👤</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  iconButton: {},
  iconText: {
    fontSize: 24,
  },
});

export default BottomNavbar;