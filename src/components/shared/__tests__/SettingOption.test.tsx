import { View } from 'react-native';
import * as React from 'react';

// Note: test renderer must be required after react-native.
import styled, { ThemeProvider } from 'styled-components/native';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react-native';

import { createTheme, ThemeType } from '../../../theme';
import SettingOption from '../SettingOption';

const sampleLabel = 'Sample label';
const component = (props?: any) => {
  return (
    <ThemeProvider theme={createTheme(ThemeType.LIGHT)}>
      <SettingOption
        label={sampleLabel}
        {...props}
      />
    </ThemeProvider>
  );
};

describe('[SettingOption]', () => {
  it('should render without crashing', () => {
    const rendered = renderer.create(component());
    expect(rendered).toMatchSnapshot();
    expect(rendered).toBeTruthy();
  });

  it('should render label', () => {
    const { findByText } = render(component());

    expect(findByText(sampleLabel)).toBeTruthy();
  });

  it('should render children', () => {
    const SampleText = styled.Text``;
    const children = (
      <View>
        <SampleText>Sample children</SampleText>
      </View>
    );
    const { findByText } = render(component({
      label: sampleLabel,
      children,
    }));

    expect(findByText(SampleText)).toBeTruthy();
  });

  it('should have testID', () => {
    const sampleTestID = 'Sample testID';
    const { findByTestId } = render(component({
      testID: sampleTestID,
    }));

    expect(findByTestId(sampleTestID)).toBeTruthy();
  });

  describe('[SettingOption] Interaction', () => {
    const handlePress = jest.fn();
    const { getByTestId } = render(component({
      onPress: handlePress,
    }));

    it('should simulate onPress', () => {
      fireEvent.press(getByTestId('touchable'));
      expect(handlePress).toHaveBeenCalled();
    });
  });
});
