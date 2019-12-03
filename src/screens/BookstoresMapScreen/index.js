import React from 'react';
import { View, StyleSheet } from 'react-native';
import BookstoresMap from '../../components/BookstoresMap';

const BookstoresMapScreen = ({ ...props }) => {
  return (
    <View style={styles.screen}>
      <BookstoresMap />
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