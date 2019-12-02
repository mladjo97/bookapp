import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import BookCard from '../../components/BookCard';

const books = [
  {
    isbn: '1235666',
    title: 'Harry Potter and the Chamber of Secrets'
  },
  {
    isbn: '1415512',
    title: 'Lord of the Rings: The Fellowship of the Ring'
  },
  {
    isbn: '5555444',
    title: 'A Game of Thrones'
  },
  {
    isbn: '5498496',
    title: 'Clash of Kings'
  },
  {
    isbn: '5468132',
    title: 'The Hobbit'
  }
];

const BookFeed = (props) => {
  return (
    <View style={styles.feed}>
      <FlatList
        data={books}
        keyExtractor={book => book.isbn}
        numColumns={2}
        renderItem={({ item }) => (
          <BookCard
            title={item.title}
          />
        )}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  feed: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});

export default BookFeed;