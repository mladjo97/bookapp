import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import BookFeed from '../../containers/BookFeed';

const FeedScreen = ({ ...props }) => {
  return (
    <View style={styles.screen}>
      <BookFeed navigation={props.navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default FeedScreen;