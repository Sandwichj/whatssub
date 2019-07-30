import * as React from 'react';

// Note: test renderer must be required after react-native.
import Setting from '../Setting';
import { ThemeProvider } from 'styled-components/native';
import { ThemeType } from '../../../types';
import { createTheme } from '../../../theme';
import { getString } from '../../../../STRINGS';
import renderer from 'react-test-renderer';

const HEADERTEXT = getString('SETTING');
const SECTION_HEADER = {
  ACCOUNT: getString('SETTING_ACCOUNT'),
  NOTIFICATION: getString('SETTING_NOTIFICATION'),
  OTHERS: getString('SETTING_OTHERS'),
};
const SECTION_LABEL = {
  EMAIL: getString('SETTING_EMAIL'),
  NOTIFICATION_BEFORE_PAYMENT: getString('SETTING_NOTIFICATION_BEFORE_PAYMENT'),
  NOTIFICATION_MARKETING_EMAIL:
    getString('SETTING_NOTIFICATION_MARKETING_EMAIL'),
  NOTIFICATION_MARKETING_PUSH: getString('SETTING_NOTIFICATION_MARKETING_PUSH'),
  OTHERS_CONTACTUS: getString('SETTING_OTHERS_CONTACTUS'),
};
const accountEmailTestID = 'accountEmail';
const switchToggleNotiBeforePaymentTestID = 'switchToggleNotiBeforePayment';
const switchToggleOnNotiMarkettingEmailTestID =
 'switchToggleOnNotiMarkettingEmail';
const switchToggleOnNotiMarkettingPushTestID =
 'switchToggleOnNotiMarkettingPush';
const component = (props?: any) => {
  return (
    <ThemeProvider theme={createTheme(ThemeType.LIGHT)}>
      <Setting
        navigation={{
          navigate: jest.fn(),
        }}
        screenProps={{
          theme: createTheme(ThemeType.LIGHT),
        }}
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
    const rendered = renderer.create(component());
    const text = rendered.root.findByProps({ children: HEADERTEXT });
    expect(text).toBeTruthy();
  });

  it(`should render section header
   with value "${SECTION_HEADER.ACCOUNT}"`, () => {
    const rendered = renderer.create(component());
    const sectionHeader = rendered.root.findByProps({
      children: SECTION_HEADER.ACCOUNT,
    });
    expect(sectionHeader).toBeTruthy();
  });

  it(`should render section header
   with value "${SECTION_HEADER.NOTIFICATION}"`, () => {
    const rendered = renderer.create(component());
    const sectionHeader = rendered.root.findByProps({
      children: SECTION_HEADER.NOTIFICATION,
    });
    expect(sectionHeader).toBeTruthy();
  });

  it(`should render section header
   with value "${SECTION_HEADER.OTHERS}"`, () => {
    const rendered = renderer.create(component());
    const sectionHeader = rendered.root.findByProps({
      children: SECTION_HEADER.OTHERS,
    });
    expect(sectionHeader).toBeTruthy();
  });

  it(`should render sectionItem
   with label "${SECTION_LABEL.EMAIL}"`, () => {
    const rendered = renderer.create(component());
    const sectionItem = rendered.root.findByProps({
      label: SECTION_LABEL.EMAIL,
    });
    expect(sectionItem).toBeTruthy();
  });

  it(`should render sectionItem "${SECTION_LABEL.EMAIL}" with default email`, () => {
    const rendered = renderer.create(component());
    const sectionItem = rendered.root.findByProps({
      label: SECTION_LABEL.EMAIL,
    });
    expect(sectionItem.findByProps({
      children: '',
    })).toBeTruthy();
  });

  it(`should render sectionItem "${SECTION_LABEL.EMAIL}" value to changed email.`, () => {
    const sampleChangedEmail = 'sampleChangedEmail';
    const rendered = renderer.create(component());
    const sectionItem = rendered.root.findByProps({
      label: SECTION_LABEL.EMAIL,
    });
    const accountEmail = sectionItem.findByProps({
      testID: accountEmailTestID,
    });
    renderer.act(() => {
      accountEmail.props.onChangeText(sampleChangedEmail);
    });

    expect(sectionItem.findByProps({
      children: sampleChangedEmail,
    })).toBeTruthy();
  });

  it(`should render sectionItem
  with label "${SECTION_LABEL.NOTIFICATION_BEFORE_PAYMENT}"`, () => {
    const rendered = renderer.create(component());
    const sectionItem = rendered.root.findByProps({
      label: SECTION_LABEL.NOTIFICATION_BEFORE_PAYMENT,
    });
    expect(sectionItem).toBeTruthy();
  });

  it(`should render sectionItem "${SECTION_LABEL.NOTIFICATION_BEFORE_PAYMENT}"
   with [SwitchToggle] "${switchToggleNotiBeforePaymentTestID}"`, () => {
    const rendered = renderer.create(component());
    const sectionItem = rendered.root.findByProps({
      label: SECTION_LABEL.NOTIFICATION_BEFORE_PAYMENT,
    });

    expect(sectionItem.findByProps({
      testID: switchToggleNotiBeforePaymentTestID,
    })).toBeTruthy();
  });

  it(`should render sectionItem
   with label "${SECTION_LABEL.NOTIFICATION_MARKETING_EMAIL}"`, () => {
    const rendered = renderer.create(component());
    const sectionItem = rendered.root.findByProps({
      label: SECTION_LABEL.NOTIFICATION_MARKETING_EMAIL,
    });
    expect(sectionItem).toBeTruthy();
  });

  it(`should render sectionItem "${SECTION_LABEL.NOTIFICATION_MARKETING_EMAIL}"
   with [SwitchToggle] "${switchToggleOnNotiMarkettingEmailTestID}"`, () => {
    const rendered = renderer.create(component());
    const sectionItem = rendered.root.findByProps({
      label: SECTION_LABEL.NOTIFICATION_MARKETING_EMAIL,
    });

    expect(sectionItem.findByProps({
      testID: switchToggleOnNotiMarkettingEmailTestID,
    })).toBeTruthy();
  });

  it(`should render sectionItem
   with label "${SECTION_LABEL.NOTIFICATION_MARKETING_PUSH}"`, () => {
    const rendered = renderer.create(component());
    const sectionItem = rendered.root.findByProps({
      label: SECTION_LABEL.NOTIFICATION_MARKETING_PUSH,
    });
    expect(sectionItem).toBeTruthy();
  });

  it(`should render sectionItem "${SECTION_LABEL.NOTIFICATION_MARKETING_PUSH}"
   with [SwitchToggle] "${switchToggleOnNotiMarkettingPushTestID}"`, () => {
    const rendered = renderer.create(component());
    const sectionItem = rendered.root.findByProps({
      label: SECTION_LABEL.NOTIFICATION_MARKETING_PUSH,
    });

    expect(sectionItem.findByProps({
      testID: switchToggleOnNotiMarkettingPushTestID,
    })).toBeTruthy();
  });

  it(`should render sectionItem
   with label "${SECTION_LABEL.OTHERS_CONTACTUS}"`, () => {
    const rendered = renderer.create(component());
    const sectionItem = rendered.root.findByProps({
      label: SECTION_LABEL.OTHERS_CONTACTUS,
    });
    expect(sectionItem).toBeTruthy();
  });
});
