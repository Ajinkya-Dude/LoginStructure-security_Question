import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Login from './src/Login';
import Register from './src/Register';
import QuestionSelect from './src/Question/QuestionSelect';
import Demo from './src/Question/Demo';
import Demo2 from './src/Question/Demo2';


function App(): JSX.Element {

  return (
    <SafeAreaView>
      {/* <Login/> */}
      {/* <Register /> */}
      {/* <QuestionSelect /> */}
      {/* <Demo /> */}
      <Demo2 />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;