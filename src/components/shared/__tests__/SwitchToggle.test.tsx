import * as React from 'react';
import ReactNativeSwitchToggle from 'react-native-switch-toggle';

// Note: test renderer must be required after react-native.
import SwitchToggle from '../SwitchToggle';

import renderer from 'react-test-renderer';

const component = (props?: any) => {
  const handlePress = jest.fn();
  return (
    <SwitchToggle
      onPress={handlePress}
      {...props}
    />
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
      renderer.act(() => {
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

      renderer.act(() => {
        switchToggle.props.onPress();
      });
      expect(currentSwitchOn).toBeFalsy();

      renderer.act(() => {
        switchToggle.props.onPress();
      });
      expect(currentSwitchOn).toBeTruthy();

      renderer.act(() => {
        switchToggle.props.onPress();
      });
      expect(currentSwitchOn).toBeFalsy();
    });
  });
});
