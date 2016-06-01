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
  WebView
} from 'react-native';

class ReactNativeFirebaseWebExample extends Component {
  render() {
    return (
      <View style={styles.container}>
        <WebView style={styles.webview}
                source={{uri: 'http://www.google.com'}}//'../App/Views/Web/...'}
                injectedJavaScript={'alert("hello friend")'}
              />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  }
});

AppRegistry.registerComponent('ReactNativeFirebaseWebExample', () => ReactNativeFirebaseWebExample);
