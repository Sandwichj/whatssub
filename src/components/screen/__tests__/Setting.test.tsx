import { View } from 'react-native';
import * as React from 'react';

// Note: test renderer must be required after react-native.
import styled, { ThemeProvider } from 'styled-components/native';
import renderer from 'react-test-renderer';
import {
  render,
  findByText,
  findByTestId,
  fireEvent,
} from '@testing-library/react-native';

import { getString } from '../../../../STRINGS';
import { createTheme, ThemeType } from '../../../theme';
import Setting from '../Setting';

const HEADERTEXT = getString('SETTING');
const SECTION_HEADER = {
  ACCOUNT: getString('SETTING_ACCOUNT'),
  NOTIFICATION: getString('SETTING_NOTIFICATION'),
  OTHERS: getString('SETTING_OTHERS'),
};
const SECTION_LABEL = {
  EMAIL: getString('SETTING_EMAIL'),
  NOTIFICATION_BEFORE_PAYMENT: getString('SETTING_NOTIFICATION_BEFORE_PAYMENT'),
  NOTIFICATION_MARKETING_EMAIL: getString('SETTING_NOTIFICATION_MARKETING_EMAIL'),
  NOTIFICATION_MARKETING_PUSH: getString('SETTING_NOTIFICATION_MARKETING_PUSH'),
  OTHERS_CONTACTUS: getString('SETTING_OTHERS_CONTACTUS'),
};
const sampleEmail = 'sampleEmail@doodlelab';
const switchToggleNotiBeforePaymentTestID = 'switchToggleNotiBeforePayment';
const switchToggleOnNotiMarkettingEmailTestID = 'switchToggleOnNotiMarkettingEmail';
const switchToggleOnNotiMarkettingPushTestID = 'switchToggleOnNotiMarkettingPush';
const getSectionListItemTestID = (label) => `sectionItem-${label}`;
const component = (props?: any) => {
  return (
    <ThemeProvider theme={createTheme(ThemeType.LIGHT)}>
      <Setting
        navigation={{
          navigate: jest.fn(),
        }}
        email={sampleEmail}
        {...props}
      />
    </ThemeProvider>
  );
};

describe('[Setting]', () => {
  it('should render without crashing', () => {
    const rendered = renderer.create(component());
    expect(rendered).toMatchSnapshot();
    expect(rendered).toBeTruthy();
  });

  it(`should render [Text] with value "${HEADERTEXT}"`, () => {
    const { findByText } = render(component());

    expect(findByText(HEADERTEXT)).toBeTruthy();
  });

  it(`should render section header with value "${SECTION_HEADER.ACCOUNT}"`, () => {
    const { findByText } = render(component());

    expect(findByText(SECTION_HEADER.ACCOUNT)).toBeTruthy();
  });

  it(`should render section header with value "${SECTION_HEADER.NOTIFICATION}"`, () => {
    const { findByText } = render(component());

    expect(findByText(SECTION_HEADER.NOTIFICATION)).toBeTruthy();
  });

  it(`should render section header with value "${SECTION_HEADER.OTHERS}"`, () => {
    const { findByText } = render(component());

    expect(findByText(SECTION_HEADER.OTHERS)).toBeTruthy();
  });

  it(`should render sectionItem with label "${SECTION_LABEL.EMAIL}"`, async () => {
    const { container } = render(component());
    const sectionItem = await findByTestId(container, getSectionListItemTestID(SECTION_LABEL.EMAIL));

    expect(findByText(sectionItem, SECTION_LABEL.EMAIL)).toBeTruthy();
  });

  it(`should render sectionItem "${SECTION_LABEL.EMAIL}" with email`, async () => {
    const { container } = render(component());
    const sectionItem = await findByTestId(container, getSectionListItemTestID(SECTION_LABEL.EMAIL));

    expect(findByText(sectionItem, SECTION_LABEL.EMAIL)).toBeTruthy();
    expect(findByText(sectionItem, sampleEmail)).toBeTruthy();
  });

  it(`should render sectionItem with label "${SECTION_LABEL.NOTIFICATION_BEFORE_PAYMENT}"`, async () => {
    const { container } = render(component());
    const sectionItem = await findByTestId(container, getSectionListItemTestID(SECTION_LABEL.NOTIFICATION_BEFORE_PAYMENT));

    expect(findByText(sectionItem, SECTION_LABEL.NOTIFICATION_BEFORE_PAYMENT)).toBeTruthy();
  });

  it(`should render sectionItem "${SECTION_LABEL.NOTIFICATION_BEFORE_PAYMENT}" with [SwitchToggle] "${switchToggleNotiBeforePaymentTestID}"`, async () => {
    const { container } = render(component());
    const sectionItem = await findByTestId(container, getSectionListItemTestID(SECTION_LABEL.NOTIFICATION_BEFORE_PAYMENT));

    expect(findByText(sectionItem, SECTION_LABEL.NOTIFICATION_BEFORE_PAYMENT)).toBeTruthy();
    expect(findByTestId(sectionItem, switchToggleNotiBeforePaymentTestID)).toBeTruthy();
  });

  it(`should render sectionItem with label "${SECTION_LABEL.NOTIFICATION_MARKETING_EMAIL}"`, async () => {
    const { container } = render(component());
    const sectionItem = await findByTestId(container, getSectionListItemTestID(SECTION_LABEL.NOTIFICATION_MARKETING_EMAIL));

    expect(findByText(sectionItem, SECTION_LABEL.NOTIFICATION_MARKETING_EMAIL)).toBeTruthy();
  });

  it(`should render sectionItem "${SECTION_LABEL.NOTIFICATION_MARKETING_EMAIL}" with [SwitchToggle] "${switchToggleOnNotiMarkettingEmailTestID}"`, async () => {
    const { container } = render(component());
    const sectionItem = await findByTestId(container, getSectionListItemTestID(SECTION_LABEL.NOTIFICATION_MARKETING_EMAIL));

    expect(findByText(sectionItem, SECTION_LABEL.NOTIFICATION_MARKETING_EMAIL)).toBeTruthy();
    expect(findByTestId(sectionItem, switchToggleOnNotiMarkettingEmailTestID)).toBeTruthy();
  });

  it(`should render sectionItem with label "${SECTION_LABEL.NOTIFICATION_MARKETING_PUSH}"`, async () => {
    const { container } = render(component());
    const sectionItem = await findByTestId(container, getSectionListItemTestID(SECTION_LABEL.NOTIFICATION_MARKETING_PUSH));

    expect(findByText(sectionItem, SECTION_LABEL.NOTIFICATION_MARKETING_PUSH)).toBeTruthy();
  });

  it(`should render sectionItem "${SECTION_LABEL.NOTIFICATION_MARKETING_PUSH}" with [SwitchToggle] "${switchToggleOnNotiMarkettingPushTestID}"`, async () => {
    const { container } = render(component());
    const sectionItem = await findByTestId(container, getSectionListItemTestID(SECTION_LABEL.NOTIFICATION_MARKETING_PUSH));

    expect(findByText(sectionItem, SECTION_LABEL.NOTIFICATION_MARKETING_PUSH)).toBeTruthy();
    expect(findByTestId(sectionItem, switchToggleOnNotiMarkettingPushTestID)).toBeTruthy();
  });

  it(`should render sectionItem with label "${SECTION_LABEL.OTHERS_CONTACTUS}"`, async () => {
    const { container } = render(component());
    const sectionItem = await findByTestId(container, getSectionListItemTestID(SECTION_LABEL.OTHERS_CONTACTUS));

    expect(findByText(sectionItem, SECTION_LABEL.OTHERS_CONTACTUS)).toBeTruthy();
  });

  describe('[Setting] Interaction', () => {
    const handleSwitchToggleNotiBeforePaymentPress = jest.fn();
    const handleSwitchToggleNotiMarkettingEmailPress = jest.fn();
    const handleSwitchToggleNotiMarkettingPushPress = jest.fn();
    const handleContactUsPress = jest.fn();
    const { container } = render(component({
      onSwitchToggleNotiBeforePaymentPress: handleSwitchToggleNotiBeforePaymentPress,
      onSwitchToggleNotiMarkettingEmailPress: handleSwitchToggleNotiMarkettingEmailPress,
      onSwitchToggleNotiMarkettingPushPress: handleSwitchToggleNotiMarkettingPushPress,
      onContactUsPress: handleContactUsPress,
    }));

    // it('should simulate onSwitchToggleNotiBeforePaymentPress', async () => {
    //   const sectionItem = await findByTestId(container, getSectionListItemTestID(SECTION_LABEL.NOTIFICATION_BEFORE_PAYMENT));
    //   const switchToggle = await findByTestId(sectionItem, switchToggleNotiBeforePaymentTestID);

    //   fireEvent.press(switchToggle);
    //   expect(handleSwitchToggleNotiBeforePaymentPress).toHaveBeenCalled();
    // });

    // it('should simulate onSwitchToggleNotiMarkettingEmailPress', async () => {
    //   const sectionItem = await findByTestId(container, getSectionListItemTestID(SECTION_LABEL.NOTIFICATION_MARKETING_EMAIL));
    //   const switchToggle = await findByTestId(sectionItem, switchToggleOnNotiMarkettingEmailTestID);

    //   fireEvent.press(switchToggle);
    //   expect(handleSwitchToggleNotiBeforePaymentPress).toHaveBeenCalled();
    // });

    // it('should simulate onSwitchToggleNotiMarkettingPushPress', async () => {
    //   const sectionItem = await findByTestId(container, getSectionListItemTestID(SECTION_LABEL.NOTIFICATION_MARKETING_PUSH));
    //   const switchToggle = await findByTestId(sectionItem, switchToggleOnNotiMarkettingPushTestID);

    //   fireEvent.press(switchToggle);
    //   expect(handleSwitchToggleNotiBeforePaymentPress).toHaveBeenCalled();
    // });

    it('should simulate onContactUsPress', async () => {
      const sectionItem = await findByTestId(container, getSectionListItemTestID(SECTION_LABEL.OTHERS_CONTACTUS));

      fireEvent.press(await findByTestId(sectionItem, 'touchable'));
      expect(handleContactUsPress).toHaveBeenCalled();
    });
  });
});
