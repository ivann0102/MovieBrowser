import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Constants from 'expo-constants';
import HomeScreen from './components/HomeScreen';
import DetailsScreen from './components/DetailsScreen';

//## Вимоги
//- Повинен бути принаймні один `StackNavigator`
//- Має бути екран пошуку, що дозволяє користувачам шукати фільми
//- Ви повинні показати більше 10 результатів, якщо існує більше 10 результатів
//- Має бути екран, на якому відображається додаткова інформація про вибраний фільм

const TestContext = React.createContext('test1');

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />

        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
