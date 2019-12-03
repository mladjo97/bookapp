import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Dimensions } from 'react-native';

import bookstores from './bookstores.json'; // static json data for testing

const BookstoresMap = ({...props}) => {

  const renderBookstores = () => {
    return bookstores.map(bookstore => {
      console.log(bookstore);
      return (
        <Marker
          key={bookstore.id}
          title={bookstore.name}
          coordinate={{
            latitudeDelta: 0.2,
            longitudeDelta: 0.2,
            latitude: bookstore.lat,
            longitude: bookstore.lon
          }}
        />
      )
    })
  }

  return (
    <View style={styles.container}>
      <MapView 
        style={styles.mapStyle}
        showsUserLocation={true}
        showsMyLocationButton={true}
        region={{ latitude: 45.2671, longitude: 19.8335, latitudeDelta: 0.2, longitudeDelta: 0.2 }}
      >
        {
          renderBookstores()
        }
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default BookstoresMap;