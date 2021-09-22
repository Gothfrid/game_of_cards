/**
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import type {Node} from 'react';

import {
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  View,
} from 'react-native';

const ControlButton = ({
  title,
  onPress,
  disabled,
}: {
  title: string,
  onPress: () => void,
  disabled: boolean,
}): Node => {
  const [visible, setVisibility] = useState(false);
  return (
    <View style={{opacity: disabled === true ? 0.4 : 1}}>
      <TouchableOpacity
        style={[styles.button]}
        onPress={onPress}
        disabled={disabled}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const DISPLAY_WIDTH = Dimensions.get('screen').width;
const BUTTON_WIDTH = DISPLAY_WIDTH * 0.42;
const BUTTON_HIGHT = BUTTON_WIDTH / 3;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#607D8B',
    width: BUTTON_WIDTH,
    height: BUTTON_HIGHT,
    borderRadius: 4,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 24,
  },
  title: {
    color: '#000000',
    fontSize: 24,
    lineHeight: 32,
    fontWeight: '600',
  },
});

export default ControlButton;
