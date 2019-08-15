import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Landing from './components/Landing'
import {NativeRouter, Switch, Route} from 'react-router-native'

export default function App() {
  return (
    <NativeRouter>
      <View style = {styles.container}>
        <Switch>
          <Route exact path = "/" component = {Landing} />
        </Switch>
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
