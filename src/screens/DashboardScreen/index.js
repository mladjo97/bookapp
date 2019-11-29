import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const DashboardScreen = ({ ...props }) => {
  return (
    <View style={styles.screen}>
      <Text> Dashboard Screen!</Text>
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

export default DashboardScreen;