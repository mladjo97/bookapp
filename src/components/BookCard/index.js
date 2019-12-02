import React from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

// this component is not really needed, because we use react-native-masonry-list package
const BookCard = ({ book, onClick, ...props }) => {

  onCardPressHandler = () => {
    onClick(book);
  }

  return (
    <TouchableOpacity
      onPress={onCardPressHandler}
    >
      <View style={styles.card} >
        <Image
          style={styles.cover}
          source={{ uri: book.uri }}
        />
      </View>
    </TouchableOpacity>
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
      height: 2,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 5
  },
  cover: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch'
  }
});

export default BookCard;