import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const BookDetails = ({ book, ...props }) => {
  return (
    <View>
      <Text>{book.isbn}</Text>
      <Text>{book.title}</Text>
    </View>
  )
};

const styles = StyleSheet.create({

});

export default BookDetails;