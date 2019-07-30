import React from 'react';

import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: white;

  height: 50px;

  padding: 0 16px;
`;

const Label = styled.Text`
  font-size: 16;
  color: rgb(50, 59, 67);
  letter-spacing: -0.5;
`;

interface Props {
  label: string;
  children?: any;
  onPress?: () => void;
  testID?: string;
}

function Shared({
  label,
  children,
  onPress,
  testID,
}: Props) {
  const settingOption = (
    <>
      <Label>{label}</Label>
      {children}
    </>
  );

  return onPress ? (
    <TouchableOpacity onPress={onPress} testID='touchable'>
      <Container testID={testID}>
        {settingOption}
      </Container>
    </TouchableOpacity>
  ) : (
    <Container testID={testID}>
      {settingOption}
    </Container>
  );
}

export default Shared;
