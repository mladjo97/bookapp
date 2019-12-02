import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import BookCard from '../../components/BookCard';
import { TouchableOpacity } from 'react-native-gesture-handler';

const books = [
  {
    isbn: '1235666',
    title: 'Harry Potter and the Chamber of Secrets',
    image: 'https://images-na.ssl-images-amazon.com/images/I/51jNORv6nQL._SX340_BO1,204,203,200_.jpg'
  },
  {
    isbn: '1415512',
    title: 'Lord of the Rings: The Fellowship of the Ring',
    image: 'https://images-na.ssl-images-amazon.com/images/I/51tW-UJVfHL._SX321_BO1,204,203,200_.jpg'
  },
  {
    isbn: '5555444',
    title: 'A Game of Thrones',
    image: 'https://i.pinimg.com/originals/71/05/c1/7105c1a8165ae9040fa3e1d795dfbc40.jpg'
  },
  {
    isbn: '5498496',
    title: 'Clash of Kings',
    image: 'https://i.pinimg.com/originals/7d/78/98/7d7898d7d4008adc7360bd918c56beca.jpg'
  },
  {
    isbn: '5468132',
    title: 'The Hobbit',
    image: 'https://images-na.ssl-images-amazon.com/images/I/51FCE5VMsWL._SX324_BO1,204,203,200_.jpg'
  }
];

const BookFeed = ({ navigation, ...props }) => {

  onCardPressHandler = () => {
    console.log(props);
  }

  return (
    <View style={styles.feed}>
      <FlatList
        data={books}
        keyExtractor={book => book.isbn}
        numColumns={2}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={onCardPressHandler}
            >
              <BookCard
                coverUrl={item.image}
                title={item.title}
              />
            </TouchableOpacity>
          </View>
        )}
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

export default BookFeed;