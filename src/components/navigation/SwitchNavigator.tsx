import {
  NavigationContainer,
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';
import React, { useContext } from 'react';
import { AppContext } from '../../contexts';
import { AsyncStorage } from 'react-native';

import AuthLoadingScreen from '../screen/AuthLoading';
import AuthStackNavigator from './AuthStackNavigator';
import ExamplePieChartMonth from '../screen/ExamplePieChartMonth';
import MainEmpty from '../screen/MainEmpty';
import MainStackNavigator from './MainStackNavigator';
import Setting from '../screen/Setting';
import { ThemeProvider } from 'styled-components';
import { ThemeType } from '../../types';
import { createTheme } from '../../theme';

const SwitchNavigator: NavigationContainer = createSwitchNavigator(
  {
    AuthLoadingScreen,
    AuthStackNavigator,
    MainStackNavigator,
    ExamplePieChartMonth,
    MainEmpty,
    Setting,
  },
  {
    initialRouteName: 'AuthLoadingScreen',
  },
);

const AppContainer = createAppContainer(SwitchNavigator);

export default function MySwitchNavigator() {
  const { state, dispatch } = useContext(AppContext);
  const { theme } = state;

  const changeTheme = async () => {
    let payload: { theme: ThemeType };
    if (state.theme === ThemeType.LIGHT) {
      payload = {
        theme: ThemeType.DARK,
      };
    } else {
      payload = {
        theme: ThemeType.LIGHT,
      };
    }
    await AsyncStorage.setItem('theme', payload.theme);
    dispatch({
      type: 'change-theme-mode',
      payload,
    });
  };

  return (
    <ThemeProvider theme={createTheme(theme)}>
      <AppContainer
        screenProps={{
          theme: createTheme(theme),
          changeTheme,
        }}
      />
    </ThemeProvider>
  );
};
