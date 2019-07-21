import React from 'react';

import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

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

type Props = {
  label: string;
  children?: any;
  onPress?: () => {};
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

  return (
    <Container testID={testID}>
      {onPress ? (
        <TouchableOpacity onPress={onPress} testID='touchable'>
          {settingOption}
        </TouchableOpacity>
      ) : settingOption}
    </Container>
  );
}

export default Shared;
