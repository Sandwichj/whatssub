import * as React from 'react';

// Note: test renderer must be required after react-native.
import { ThemeProvider } from 'styled-components/native';
import renderer from 'react-test-renderer';

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
  NOTIFICATION_MARKETING_EMAIL:
    getString('SETTING_NOTIFICATION_MARKETING_EMAIL'),
  NOTIFICATION_MARKETING_PUSH: getString('SETTING_NOTIFICATION_MARKETING_PUSH'),
  OTHERS_CONTACTUS: getString('SETTING_OTHERS_CONTACTUS'),
};
const sampleEmail = 'sampleEmail@doodlelab';
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
        email={sampleEmail}
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

  it(`should render sectionItem "${SECTION_LABEL.EMAIL}" with email`, () => {
    const rendered = renderer.create(component());
    const sectionItem = rendered.root.findByProps({
      label: SECTION_LABEL.EMAIL,
    });
    expect(sectionItem).toBeTruthy();
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

  describe('[Setting] Interaction', () => {
    const handleSwitchToggleNotiBeforePaymentPress = jest.fn();
    const handleSwitchToggleNotiMarkettingEmailPress = jest.fn();
    const handleSwitchToggleNotiMarkettingPushPress = jest.fn();
    const handleContactUsPress = jest.fn();
    const rendered = renderer.create(component({
      onSwitchToggleNotiBeforePaymentPress:
        handleSwitchToggleNotiBeforePaymentPress,
      onSwitchToggleNotiMarkettingEmailPress:
        handleSwitchToggleNotiMarkettingEmailPress,
      onSwitchToggleNotiMarkettingPushPress:
        handleSwitchToggleNotiMarkettingPushPress,
      onContactUsPress: handleContactUsPress,
    }));

    it('should simulate onSwitchToggleNotiBeforePaymentPress', () => {
      const switchToggle = rendered.root.findByProps({
        testID: switchToggleNotiBeforePaymentTestID,
      });
      switchToggle.props.onPress();
      expect(handleSwitchToggleNotiBeforePaymentPress).toHaveBeenCalled();
    });

    it('should simulate onSwitchToggleNotiMarkettingEmailPress', () => {
      const switchToggle = rendered.root.findByProps({
        testID: switchToggleOnNotiMarkettingEmailTestID,
      });
      switchToggle.props.onPress();
      expect(handleSwitchToggleNotiMarkettingEmailPress).toHaveBeenCalled();
    });

    it('should simulate onSwitchToggleNotiMarkettingPushPress', () => {
      const switchToggle = rendered.root.findByProps({
        testID: switchToggleOnNotiMarkettingPushTestID,
      });
      switchToggle.props.onPress();
      expect(handleSwitchToggleNotiMarkettingPushPress).toHaveBeenCalled();
    });

    it('should simulate onContactUsPress', () => {
      const sectionItem = rendered.root.findByProps({
        label: SECTION_LABEL.OTHERS_CONTACTUS,
      });
      sectionItem.props.onPress();
      expect(handleContactUsPress).toHaveBeenCalled();
    });
  });
});
