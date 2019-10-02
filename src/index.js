import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import Routes from './routes';

import './config/Reactotron';
// import { Container } from './styles';
import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      <Routes />
    </Provider>
  );
}
