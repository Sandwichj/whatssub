import * as React from 'react';

// Note: test renderer must be required after react-native.
import styled, { ThemeProvider } from 'styled-components/native';
import SectionList from '../SectionList';
import renderer from 'react-test-renderer';

const SampleItemText = styled.Text``;
const component = (props?: any, sampeSectionTitle?: string) => {
  return (
    <SectionList
      renderItem={() => (
        <SampleItemText>Sample Item</SampleItemText>
      )}
      sections={[{
        title: sampeSectionTitle || undefined,
        data: [],
      }]}
      {...props}
    />
  );
};

describe('[SectionList]', () => {
  const sampeSectionTitle = 'Sample section title';

  it('should render without crashing', () => {
    const rendered = renderer.create(component());
    expect(rendered).toMatchSnapshot();
    expect(rendered).toBeTruthy();
  });

  it(`should render [SectionEmptyHeader]"`, () => {
    const rendered = renderer.create(component());
    const sectionHeader = rendered.root.findByProps({
      testID: 'sectionEmptyHeader',
    });

    expect(sectionHeader).toBeTruthy();
  });

  it(`should render [SectionHeader] with title "${sampeSectionTitle}"`, () => {
    const rendered = renderer.create(component({}, sampeSectionTitle));
    const sectionHeader = rendered.root.findByProps({
      testID: 'sectionHeader',
    });
    const sectionHeaderText = sectionHeader.findByProps({
      children: sampeSectionTitle,
    });

    expect(sectionHeaderText).toBeTruthy();
  });
});
