import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, Text, RefreshControl, Button } from 'react-native';
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

  onRefreshHandler = () => {
    this.props.getBooks();
  }

  componentDidMount() {
    this.props.getBooks();
  }
  
  render() {
    console.log(this.props.books);
    return (
      <View style={styles.feed}>
        {
          !this.props.error ?
            <MasonryList
              onPressImage={this.onCardPressHandler} 
              images={this.props.books}
              masonryFlatListColProps= {{
                refreshControl: (
                  <RefreshControl refreshing={!this.props.isFetched} onRefresh={this.onRefreshHandler} />
                )
              }}
            />
          :
          <View>
            <Text style={{ textAlign: 'center' }}>Sorry, there was an error while fetching the books.</Text>
            <Text style={{ textAlign: 'center' }}>Please try refreshing the page.</Text>
            <Button title="Refresh" onPress={this.onRefreshHandler}></Button>
          </View>
        }
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