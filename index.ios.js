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
        <WebView
          style={styles.webview}
          source={require('./App/Views/Web/google-firebase-web-auth-example/index.html')}
          injectedJavaScript={'null'}
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
