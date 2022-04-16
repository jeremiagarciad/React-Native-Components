import 'react-native-gesture-handler';
import React from 'react';
import {MyStackNavigator} from './src/navigator/StackNavigator';
import {ThemeProvider} from './src/context/themeContext/ThemeContext';

function App() {
  return (
    <AppState>
        <MyStackNavigator />
    </AppState>
  );
}

function AppState({ children }: any) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

export default App;
