/**
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import type {Node} from 'react';
import {View, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import DotsHorizontalIcon from '../common/icons/DotsHorizontalIcon';

const DotsButton = ({onPress}: {onPress: () => void}): Node => {
  const [visible, setVisibility] = useState(false);

  return (
    <TouchableOpacity style={[styles.button]} onPress={onPress}>
      <DotsHorizontalIcon size={24} fill={'#607D8B'} />
    </TouchableOpacity>
  );
};

const DISPLAY_WIDTH = Dimensions.get('screen').width;
const BUTTON_WIDTH = Math.max(DISPLAY_WIDTH * 0.1, 32);
const BUTTON_HIGHT = BUTTON_WIDTH;

const styles = StyleSheet.create({
  button: {
    width: BUTTON_WIDTH,
    height: BUTTON_HIGHT,
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DotsButton;
