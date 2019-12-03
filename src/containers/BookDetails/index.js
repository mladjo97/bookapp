import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Image, Button } from 'react-native';

import styles from './styles';
import { setBookmark } from '../../actions/books';

const BookDetails = ({ book, ...props }) => {

  const onBookmarkHandler = () => {
    props.setBookmark(book.id);
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
        </View>
      </View>
      <View style={styles.actions}>
        <Button title="Bookmark" onPress={onBookmarkHandler} />
      </View>
    </View>
  )
};

const mapDispatchToProps = {
  setBookmark
};

export default connect(null, mapDispatchToProps)(BookDetails);