import React from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';

const WelcomeScreen = ({ ...props }) => {
  console.log(props.navigation)
  return (
    <View style={styles.screen}>
      <Text>Welcome Screen!</Text>
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

export default WelcomeScreen;