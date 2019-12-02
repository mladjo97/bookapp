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
    margin: 10,
    // width of elements is weird one touchableopacity is added
    // 2 - items per row
    // 10- margin*2 so cards fit the screen
    width: Math.round(Dimensions.get('window').width) / 2 - 20,
    height: 290,
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
    width: '100%',
    height: '100%',
    resizeMode: 'stretch'
  }
});

export default BookCard;