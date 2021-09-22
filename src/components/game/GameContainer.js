/**
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import type {Node} from 'react';
import {Image, Text, View} from 'react-native';

import MenuOverlay from '../menu/MenuOverlay';

import {useGameReducer} from './useGameReducer';
import ControlButton from './ControlButton';

const GameContainer = (): Node => {
  const {state, actions} = useGameReducer();

  useEffect(() => {
    if (state.loading === false) {
      actions.fetchDeck();
    }
  }, []);
  return (
    <>
      <View
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        <View
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            flexDirection: 'column',
            padding: 12,
          }}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: '400',
            }}>
            {`Correct guesses:`}
          </Text>
          <Text
            style={{
              fontSize: 24,
              fontWeight: '400',
            }}>
            {state.guessed}
          </Text>
          {state.drawn.length > 1 && (
            <Image
              style={{
                height: 320,
                width: 230,
                resizeMode: 'contain',
                margin: 42,
              }}
              source={{
                uri: state.drawn[state.drawn.length - 2].image,
              }}
            />
          )}
        </View>
        <Text
          style={{
            fontSize: 24,
            fontWeight: '400',
          }}>{`Next card will be: `}</Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <ControlButton
            title={'Greater'}
            onPress={actions.greater}
            disabled={state.drawn.length < 2 || state.loading === true}
          />
          <ControlButton
            title={'Lower'}
            onPress={actions.lower}
            disabled={state.drawn.length < 2 || state.loading === true}
          />
        </View>
      </View>

      <MenuOverlay onRestart={actions.fetchDeck} />
    </>
  );
};

export default GameContainer;
