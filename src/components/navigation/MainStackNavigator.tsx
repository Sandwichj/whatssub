import {
  NavigationContainer,
  NavigationRouteConfigMap,
  StackNavigatorConfig,
  createStackNavigator,
} from 'react-navigation';

import Main from '../screen/Main';
import React from 'react';
import { ScreenProps } from '../../types';
import Setting from '../screen/Setting';

const routeConfig: NavigationRouteConfigMap = {
  Main: {
    screen: Main,
    navigationOptions: {
      title: 'Main',
    },
    path: 'main',
  },
  Setting: {
    screen: Setting,
    navigationOptions: {
      title: 'Setting',
    },
    path: 'setting',
  },
};

const navigatorConfig: StackNavigatorConfig = {
  initialRouteName: 'Setting',
  // header: null,
  // headerMode: 'none',
  navigationOptions: ({ navigation, screenProps }
    : { navigation: any, screenProps: any}) => {
    const { theme } = screenProps;
    return ({
      headerStyle: {
        backgroundColor: theme.background,
        borderBottomColor: 'transparent',
        borderBottomWidth: 0,
        elevation: 0,
      },
      headerTitleStyle: { color: theme.fontColor },
      headerTintColor: theme.tintColor,
    });
  },
};

const RootStackNavigator: NavigationContainer =
  createStackNavigator(routeConfig, navigatorConfig);

interface Props {
  navigation?: any;
  screenProps?: ScreenProps;
}

class RootNavigator extends React.Component<Props> {
  private static router = RootStackNavigator.router;

  public render() {
    return (
      <RootStackNavigator
        navigation={this.props.navigation}
        screenProps={{
          theme: this.props.screenProps.theme,
          changeTheme: this.props.screenProps.changeTheme,
        }}
      />
    );
  }
}

export default RootNavigator;
