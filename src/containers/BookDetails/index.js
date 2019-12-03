import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Image, Button } from 'react-native';

import styles from './styles';
import { setBookmark, removeBookmark } from '../../actions/books';
import { bookmarkedBooksSelector } from '../../reducers/books';

const BookDetails = ({ book, ...props }) => {

  const onBookmarkHandler = () => {
    props.setBookmark(book.id);
  }

  const onRemoveBookmarkHandler = () => {
    props.removeBookmark(book.id);
  }

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        {/* Book Cover */}
        <Image
          style={styles.cover}
          source={{ uri: book.uri }}
        />

        {/* Book Details */}
        <View style={styles.details}>
          <Text style={styles.detailsHeader}>ISBN</Text>
          <Text style={styles.detailsInfo}>{book.isbn}</Text>
          <Text style={styles.detailsHeader}>Name</Text>
          <Text style={styles.detailsInfo}>{book.title}</Text>
          <Text style={styles.detailsHeader}>Author</Text>
          <Text style={styles.detailsInfo}>{book.author}</Text>
          <Text style={styles.detailsHeader}>Category</Text>
          <Text style={styles.detailsInfo}>{book.category}</Text>
        </View>
      </View>
      <View style={styles.actions}>
        {
          props.bookmarkedBooks.find(bookmarked => bookmarked.id === book.id) ?
          <Button title="Remove Bookmark" onPress={onRemoveBookmarkHandler} /> :
          <Button title="Bookmark" onPress={onBookmarkHandler} />

        }
      </View>
    </View>
  )
};

const mapStateToProps = state => {
  return {
    bookmarkedBooks: bookmarkedBooksSelector(state)
  }
}

const mapDispatchToProps = {
  setBookmark,
  removeBookmark
};

export default connect(mapStateToProps, mapDispatchToProps)(BookDetails);