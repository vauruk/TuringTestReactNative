/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const [list, setList] = useState(undefined);
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.lighter : Colors.lighter,
  };

  useEffect(() => {
    fetch('https://api.github.com/users')
      .then(response => {
        response.json().then(data => {
          console.log(data);
          setList(data);
        });
      })
      .catch(error => {
        console.log('Error: ', error);
      });
  });

  console.log('LIst', list);
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View>
          {list &&
            list.map((item, key) => (
              <View
                style={[
                  styles.container,
                  {
                    flexDirection: 'row',
                  },
                ]}>
                <View style={{ flex: 1 }}>
                  <Text>{item.login}</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text> {item.login}</Text>
                </View>
                <View style={{ flex: 1 }} />
              </View>
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //padding: 5,
    borderColor: '#ffffff',
    borderStyle: 'solid',
    borderWidth: 0.5,
  },
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
