import * as React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import SettingOption from '../SettingOption';
import { View } from 'react-native';
import renderer from 'react-test-renderer';

// Note: test renderer must be required after react-native.
import styled from 'styled-components/native';

const sampleLabel = 'Sample label';
const component = (props?: any) => {
  return (
    <SettingOption
      label={sampleLabel}
      {...props}
    />
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
