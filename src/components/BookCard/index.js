import React from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';

const BookCard = ({ title, coverUrl, ...props }) => {
  return (
    <View style={styles.card}>
      <Image
        style={styles.cover}
        source={{ uri: coverUrl }}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  card: {
    margin: 15,
    // width of elements is weird one touchableopacity is added
    // 2 - items per row
    // 30 - random number so cards fit the screen
    width: Math.round(Dimensions.get('window').width) / 2 - 30,
    height: 300,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3
  },
  cover: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%'
  }
});

export default BookCard;