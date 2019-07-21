import * as React from 'react';

// Note: test renderer must be required after react-native.
import styled, { ThemeProvider } from 'styled-components/native';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react-native';

import { createTheme, ThemeType } from '../../../theme';
import SectionList from '../SectionList';

const sampeSectionTitle = 'Sample section title';
const SampleItemText = styled.Text``;
const component = (props?: any) => {
  return (
    <ThemeProvider theme={createTheme(ThemeType.LIGHT)}>
      <SectionList
        renderItem={() => (
          <SampleItemText>Sample ITem</SampleItemText>
        )}
        sections={[{
          title: sampeSectionTitle,
          data: [],
        }]}
        {...props}
      />
    </ThemeProvider>
  );
};

describe('[SectionList]', () => {
  it('should render without crashing', () => {
    const rendered = renderer.create(component());
    expect(rendered).toMatchSnapshot();
    expect(rendered).toBeTruthy();
  });

  it('should render section title', () => {
    const { findByText } = render(component());

    expect(findByText(sampeSectionTitle)).toBeTruthy();
  });
});
