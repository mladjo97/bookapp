import React from 'react';
import { View, Text, Image, Button } from 'react-native';

import styles from './styles';

const BookDetails = ({ book, ...props }) => {
  
  const onRatingHandler = () => {
    console.log('Rating!');
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
        <Button title="Give a rating" onPress={onRatingHandler} />
      </View>      
    </View>
  )
};

export default BookDetails;