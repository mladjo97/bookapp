import React, { useState } from 'react';
import { connect } from 'react-redux';
import { View, Text, Image, Button } from 'react-native';

import styles from './styles';
import { setBookmark, removeBookmark } from '../../actions/books';
import { bookmarkedBooksSelector } from '../../reducers/books';
import RatingDialog from '../../components/RatingDialog';

const BookDetails = ({ book, ...props }) => {

  const [isDialogVisible, setDialogVisibility] = useState(false);

  const onBookmarkHandler = () => {
    props.setBookmark(book.id);
  }

  const onRemoveBookmarkHandler = () => {
    props.removeBookmark(book.id);
  }

  const onRatingHandler = () => {
    setDialogVisibility(true);
  }

  const onDialogSubmitHandler = (rating) => {
    console.log('Submitting rating: ', rating);
    setDialogVisibility(false);
  }

  const onDialogCloseHandler = () => {
    setDialogVisibility(false);
  }

  return (
    <View style={styles.screen}>

      <RatingDialog
        isVisible={isDialogVisible}
        onCancel={onDialogCloseHandler}
        onSubmit={onDialogSubmitHandler} 
      />

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
          <Text style={styles.detailsHeader}>Rating</Text>
          <Text style={styles.detailsInfo}>{book.rating} / 5.0</Text>
          <Text style={styles.detailsInfo}>out of {book.reviews} reviews</Text>
        </View>
      </View>
      <View style={styles.actions}>
        {
          props.bookmarkedBooks.find(bookmarked => bookmarked.id === book.id) ?
            <Button title="Remove Bookmark" onPress={onRemoveBookmarkHandler} /> :
            <Button title="Bookmark" onPress={onBookmarkHandler} />
        }
        {
          <Button title="Give a rating" style={{ marginTop: 10 }} onPress={onRatingHandler} />
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