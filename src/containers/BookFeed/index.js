import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import MasonryList from 'react-native-masonry-list';

import {
  booksSelector,
  isFetchedSelector,
  errorSelector 
} from '../../reducers/books';
import { getBooks } from '../../actions/books';


class BookFeed extends Component {
 
  onCardPressHandler = (book) => {
    this.props.navigation.push('BookDetails', { book });
  }

  componentDidMount() {
    console.log('BookFeed didMound!');
    this.props.getBooks();
  }
  
  render() {
    return (
      <View style={styles.feed}>
        <MasonryList
          onPressImage={this.onCardPressHandler} 
          images={this.props.books}
        />
      </View>
    )
  }
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
    books: booksSelector(state),
    isFetched: isFetchedSelector(state),
    error: errorSelector(state)
  }
};

const mapDispatchToProps = {
  getBooks
};

export default connect(mapStateToProps, mapDispatchToProps)(BookFeed);