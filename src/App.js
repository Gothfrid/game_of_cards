/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import GameContainer from './components/game/GameContainer';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#EEEEEE'}}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <GameContainer />
    </SafeAreaView>
  );
};

export default App;
