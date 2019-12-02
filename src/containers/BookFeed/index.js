import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import BookCard from '../../components/BookCard';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { getBooks } from '../../api';

const BookFeed = ({ navigation, ...props }) => {

  const books = getBooks();

  renderBook = (book) => {
    return (
      <View>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={onCardPressHandler}
        >
          <BookCard
            coverUrl={book.image}
            title={book.title}
          />
        </TouchableOpacity>
      </View>
    )
  }

  onCardPressHandler = () => {
    console.log(props);
  }

  return (
    <View style={styles.feed}>
      <FlatList
        data={books}
        keyExtractor={book => book.isbn}
        numColumns={2}
        renderItem={({ item }) => renderBook(item)}
    />
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