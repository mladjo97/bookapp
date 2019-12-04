import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const SettingsScreen = ({ ...props }) => {
  return (
    <View style={styles.screen}>
      <Text>SettingsScreen!</Text>
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

export default SettingsScreen;