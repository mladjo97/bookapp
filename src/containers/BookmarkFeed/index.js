import React from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, Text } from 'react-native';
import MasonryList from 'react-native-masonry-list';

import { bookmarkedBooksSelector } from '../../reducers/books';

const BookmarkFeed = ({ navigation, ...props }) => {
 
  onCardPressHandler = (book) => {
    navigation.push('BookDetails', { book });
  }
  
  return (
    <View style={styles.feed}>
      {
        props.bookmarkedBooks.length ?
          <MasonryList
            onPressImage={onCardPressHandler} 
            images={props.bookmarkedBooks}       
          /> :
          <Text style={{ textAlign: 'center' }}>You have no bookmarks.</Text>
      }
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
