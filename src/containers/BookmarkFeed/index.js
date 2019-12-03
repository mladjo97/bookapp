import React from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import MasonryList from 'react-native-masonry-list';

import { bookmarkedBooksSelector } from '../../reducers/books';

const BookmarkFeed = ({ navigation, ...props }) => {
 
  onCardPressHandler = (book) => {
    navigation.push('BookDetails', { book });
  }
  
  return (
    <View style={styles.feed}>
      <MasonryList
        onPressImage={onCardPressHandler} 
        images={props.bookmarkedBooks}       
      />
    </View>
  )
};

const styles = StyleSheet.create({
  feed: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start'
  }
});

const mapStateToProps = (state) => {
  return {
    bookmarkedBooks: bookmarkedBooksSelector(state)
  }
};

export default connect(mapStateToProps)(BookmarkFeed);
