import React from 'react';
import { View, StyleSheet } from 'react-native';
import BookstoresMap from '../../components/BookstoresMap';

import bookstores from './bookstores.json'; // static json data for testing

const BookstoresMapScreen = ({ ...props }) => {
  const noviSadLat = 45.2671;
  const noviSadLon = 19.8335;

  return (
    <View style={styles.screen}>
      <BookstoresMap 
        centerLat={noviSadLat} 
        centerLon={noviSadLon} 
        bookstores={bookstores} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default BookstoresMapScreen;