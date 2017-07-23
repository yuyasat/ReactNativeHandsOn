/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Native extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.base, styles.box1]}>
          <Text style={styles.text}>I am 2.</Text>
        </View>

        <View style={[styles.base, styles.box2]}>
          <Text style={styles.text}>I am 5.</Text>
        </View>

        <View style={[styles.base, styles.box3]}>
          <Text style={styles.text}>I am 1.</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 24,
    color: 'white',
  },
  base: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  box1: {
    flex: 2,
    backgroundColor: 'black'
  },
  box2: {
    flex: 5,
    backgroundColor: 'red',
  },
  box3: {
    flex: 1,
    backgroundColor: 'yellow',
  },
});

AppRegistry.registerComponent('Native', () => Native);
