import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Dialog from 'react-native-dialog';

const RatingDialog = ({isVisible, onSubmit, onCancel }) => {

  const [rating, setRating] = useState(0);

  onCancelHandler = () => {
    onCancel();
  }

  onSubmitHandler = () => {
    onSubmit(rating);
  }

  onRatingChangeHandler = (ratingParam) => {
    // validation is not important right now
    // convert , to . here
    // if value > 5.0, set 5.0 - same thing for 0 <
    
    setRating(ratingParam);
  }

  return (
    <View>
      <Dialog.Container visible={isVisible}>
        <Dialog.Title>Book Rating</Dialog.Title>
        <Dialog.Description>
          Please leave a rating below.
        </Dialog.Description>
        <Dialog.Input 
          keyboardType="decimal-pad"
          maxLength={3}
          placeholder="2.5"
          onChangeText={onRatingChangeHandler}
        />
        <Dialog.Button label="Cancel" onPress={this.onCancelHandler} />
        <Dialog.Button label="Submit" onPress={this.onSubmitHandler} />
      </Dialog.Container>
    </View>
  );
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: '#e3e3e3',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonGroup: {
    margin: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  myStarStyle: {
    color: 'yellow',
    backgroundColor: 'transparent',
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  myEmptyStarStyle: {
    color: 'white',
  }
});

export default RatingDialog;