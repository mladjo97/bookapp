import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import MasonryList from 'react-native-masonry-list';

import { getBooks } from '../../api';

const BookFeed = ({ navigation, ...props }) => {

  const books = getBooks();

  onCardPressHandler = (book) => {
    navigation.push('BookDetails', { book });
  }

  return (
    <View style={styles.feed}>
      <MasonryList onPressImage={onCardPressHandler} images={books} />
    </View>
  )
};

const styles = StyleSheet.create({
  feed: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start'
  }
});

export default BookFeed;