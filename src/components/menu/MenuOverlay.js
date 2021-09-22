/**
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import type {Node} from 'react';
import {View, StyleSheet, Button} from 'react-native';
import MenuButton, {VARIANT} from './MenuButton';
import DotsButton from './DotsButton';

const MenuOverlay = ({onRestart}: {onRestart: () => void}): Node => {
  const [visible, setVisibility] = useState(false);

  const show = () => {
    setVisibility(true);
  };

  const hide = () => {
    setVisibility(false);
  };

  const handleRestart = () => {
    onRestart();
    hide();
  };

  return (
    <>
      {visible === false ? (
        <View style={{position: 'absolute', top: 24, right: 24}}>
          <DotsButton onPress={show} />
        </View>
      ) : (
        <>
          <View style={[styles.overlay, styles.fade]} />
          <View style={styles.overlay}>
            <View style={styles.container}>
              <MenuButton title={'Restart'} onPress={handleRestart} />
              <MenuButton
                title={'Back'}
                onPress={hide}
                variant={VARIANT.TRANSPARENT}
              />
            </View>
          </View>
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFill,

    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  fade: {
    backgroundColor: '#34515e',
    opacity: 0.9,
  },
  container: {
    height: '60%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default MenuOverlay;
