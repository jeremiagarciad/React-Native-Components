import React, {useContext} from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screen/HomeScreen';
import {Animation101Screen} from './../screen/Animation101Screen';
import {Animation102Screen} from './../screen/Animation102Screen';
import {SwitchScreen} from '../screen/SwitchScreen';
import {AlertScreen} from '../screen/AlertScreen';
import {TextInputScreen} from '../screen/TextInputScreen';
import {PullToResfreshScreen} from '../screen/PullToResfreshScreen';
import {SectionListScreen} from '../screen/SectionListScreen';
import {ModalScreen} from '../screen/ModalScreen';
import {InfiniteScrollScreen} from '../screen/InfiniteScrollScreen';
import {SlideScreen} from '../screen/SlideScreen';
import {ChangeThemeScreen} from '../screen/ChangeThemeScreen';
import {NavigationContainer} from '@react-navigation/native';
import { ThemeContext } from '../context/themeContext/ThemeContext';

const Stack = createStackNavigator();

export const MyStackNavigator = () => {
  const {theme} = useContext( ThemeContext )

  return (
    <NavigationContainer
      theme={theme}
    >
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {
            // backgroundColor: '#FFFFFF',
          },
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Animation101Screen"
          component={Animation101Screen}
        />
        <Stack.Screen
          name="Animation102Screen"
          component={Animation102Screen}
        />
        <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
        <Stack.Screen name="AlertScreen" component={AlertScreen} />
        <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
        <Stack.Screen
          name="PullToRefreshScreen"
          component={PullToResfreshScreen}
        />
        <Stack.Screen name="SectionListScreen" component={SectionListScreen} />
        <Stack.Screen name="ModalScreen" component={ModalScreen} />
        <Stack.Screen
          name="InfiniteScrollScreen"
          component={InfiniteScrollScreen}
        />
        <Stack.Screen name="SlideScreen" component={SlideScreen} />
        <Stack.Screen name="ChangeThemeScreen" component={ChangeThemeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
