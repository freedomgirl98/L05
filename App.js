/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text} from 'react-native';
import {ScrollView} from 'react-native';
import {MovieList} from './Movies.js';
import {Products} from './Boats.js';

const App: () => React$Node = () => {
  return (
    <View>
      <ScrollView>
        <Text>Lesson 05 Exercises</Text>
        <MovieList />
        <Text>GetABoat - For Sale</Text>
        <Products />
      </ScrollView>
    </View>
  );
};
export default App;
