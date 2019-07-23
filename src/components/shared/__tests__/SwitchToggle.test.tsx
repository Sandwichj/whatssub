import * as React from 'react';
import ReactNativeSwitchToggle from 'react-native-switch-toggle';

// Note: test renderer must be required after react-native.
import { ThemeProvider } from 'styled-components/native';
import renderer, { act } from 'react-test-renderer';

import { createTheme, ThemeType } from '../../../theme';
import SwitchToggle from '../SwitchToggle';

const component = (props?: any) => {
  const handlePress = jest.fn();
  return (
    <ThemeProvider theme={createTheme(ThemeType.LIGHT)}>
      <SwitchToggle
        onPress={handlePress}
        {...props}
      />
    </ThemeProvider>
  );
};

describe('[SwitchToggle]', () => {
  it('should render without crashing', () => {
    const rendered = renderer.create(component());
    expect(rendered).toMatchSnapshot();
    expect(rendered).toBeTruthy();
  });

  describe('[SwitchToggle] Interaction', () => {
    it('should simulate onPress', () => {
      const handlePress = jest.fn();
      const rendered = renderer.create(component({
        onPress: handlePress,
      }));
      const switchToggle = rendered.root.findByType(ReactNativeSwitchToggle);
      act(() => {
        switchToggle.props.onPress();
      });
      expect(handlePress).toHaveBeenCalled();
    });

    it('should toggle switchOn on press', () => {
      let currentSwitchOn = null;
      const handlePress = (switchOn: boolean) => {
        currentSwitchOn = switchOn;
      };
      const rendered = renderer.create(component({
        onPress: handlePress,
      }));
      const switchToggle = rendered.root.findByType(ReactNativeSwitchToggle);

      act(() => {
        switchToggle.props.onPress();
      });
      expect(currentSwitchOn).toBeFalsy();

      act(() => {
        switchToggle.props.onPress();
      });
      expect(currentSwitchOn).toBeTruthy();

      act(() => {
        switchToggle.props.onPress();
      });
      expect(currentSwitchOn).toBeFalsy();
    });
  });
});
