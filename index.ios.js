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
  View,
  TextInput
} from 'react-native';

export default class Native extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    }
  }

  _onChangeText = (text) => {
    this.setState({ text });
  }

  render() {
    const {
      text,
    } = this.state;

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={this._onChangeText}
          underlineColorAndroid="transparent"
        />
        <Text>{text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 30,
    width: 200,
    borderBottomWidth: 1,
    borderBottomColor: '#008080',
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
