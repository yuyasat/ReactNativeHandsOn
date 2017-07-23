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
  TextInput,
  TouchableOpacity,
  FlatList,
  View,
} from 'react-native';

export default class Native extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      list: [],
    }
  }

  _onChangeText = (text) => {
    this.setState({ text });
  }

  _onPress = () => {
    const {
      list,
      text,
    } = this.state;
    const _list = list.concat();
    const key = new Date().getTime();
    _list.push({ key: key, text: text, done: false });
    this.setState({
      text: '',
      list: _list,
    });
  }

  _onPressItem = (selectedItem) => {
    const { list } = this.state;
    const _list = list.map((item) => {
      if (selectedItem.key === item.key) { item.done = !item.done }
      return item
    });
    this.setState({ list: _list });
  }

  render() {
    const {
      list,
      text,
    } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.inputArea}>
          <TextInput
            style={styles.input}
            onChangeText={this._onChangeText}
            underlineColorAndroid="transparent"
            value={text}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={this._onPress}
          >
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={list}
          styles={styles.list}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => this._onPressItem(item)}>
              <Text style={item.done ? [styles.itemText, styles.itemTextDone] : styles.itemText}>{item.text}</Text>
            </TouchableOpacity>
          )}
        />
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
  inputArea: {
    flexDirection: 'row',
    marginTop: 64,
  },
  input: {
    height: 30,
    width: 200,
    borderBottomWidth: 1,
    borderBottomColor: '#008080',
    marginRight: 20,
  },
  button: {
    width: 80,
    height: 40,
    backgroundColor: '#006060',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  list: {
    width: 300,
  },
  itemText: {
    fontSize: 22,
    margin: 10,
  },
  itemTextDone: {
    color: 'gray',
    textDecorationLine: 'line-through',
  },
});

AppRegistry.registerComponent('Native', () => Native);
