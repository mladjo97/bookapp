import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import BookmarkFeed from '../../containers/BookmarkFeed';

const BookmarkScreen = ({ ...props }) => {
  return (
    <View style={styles.screen}>
      <BookmarkFeed navigation={props.navigation} />
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

export default BookmarkScreen;