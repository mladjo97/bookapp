import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const BookCard = ({ title, ...props }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  card: {
    width: 150,
    height: 300,
    backgroundColor: 'blue',
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: 'white',
    fontSize: 16
  }
});

export default BookCard;