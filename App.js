import React from 'react';
import { Provider } from 'react-redux';
import AppContainer from './src/screens/routes';
import configureStore from './src/store';

const store = configureStore();

const App = ({ ...props }) => {
  return (
    <Provider store={store} >
      <AppContainer />
    </Provider>
  );
};

export default App;