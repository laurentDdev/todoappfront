/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthScreen from './src/screens/auth/auth.screen';
import LoginScreen from './src/screens/auth/login.screen';
import RegisterScreen from './src/screens/auth/register.screen';

const Stack = createNativeStackNavigator();
function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Stack.Navigator initialRouteName={'Auth'}>
        <Stack.Screen
          name={'Auth'}
          component={AuthScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'Login'}
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'Register'}
          component={RegisterScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
}

export default App;
