import React from 'react';
import { View, StyleSheet } from 'react-native';

import BookDetails from '../../containers/BookDetails';

const BookDetailsScreen = ({ navigation, ...props }) => {
  const book = navigation.getParam('book');

  return (
    <View style={styles.container}>
      <BookDetails book={book}/>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default BookDetailsScreen;