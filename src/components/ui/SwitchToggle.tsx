import React, { useState } from 'react';
import SwitchToggle from 'react-native-switch-toggle';
import { GestureResponderEvent } from 'react-native';

interface IProps {
  onPress: (event: GestureResponderEvent, switchOn: boolean) => {},
  [prop: string]: any,
};

function StyledSwitchToggle({ onPress, ...props }: IProps) {
  const [switchOn, setSwitchOn] = useState<boolean>(true);

  const handlePress = (event: GestureResponderEvent) => {
    const currentSwitchOn = !switchOn;

    setSwitchOn(currentSwitchOn);

    if (onPress) {
      onPress(event, currentSwitchOn);
    }

    return true;
  };

  return (
    <SwitchToggle
      containerStyle={{
        width: 40,
        height: 21.7,
        borderRadius: 10.9,
        padding: 1.1,
      }}
      circleStyle={{
        width: 19.6,
        height: 19.6,
        borderRadius: 100,
      }}
      backgroundColorOn='rgb(62, 126, 255)'
      circleColorOff='rgba(255, 255, 255, 99.9)'
      circleColorOn='rgba(255, 255, 255, 99.9)'
      switchOn={switchOn}
      onPress={handlePress}
      {...props}
    />
  );
};

export default StyledSwitchToggle;
