import React from 'react';
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native';

const BookDetails = ({ book, ...props }) => {
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
          <Text>{book.isbn}</Text>
          <Text style={styles.detailsHeader}>Name</Text>
          <Text>{book.title}</Text>
          <Text style={styles.detailsHeader}>Author</Text>
          <Text>{book.author}</Text>
        </View>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  header: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-around'
  },
  details: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5
  }, 
  detailsHeader: {
    fontSize: 17,
    fontWeight: 'bold'
  },  
  cover: {
    resizeMode: 'cover',
    width: 150,
    height: 300,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    margin: 10
  }
});

export default BookDetails;