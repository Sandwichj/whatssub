import React, { useState } from 'react';
import Constants from 'expo-constants';
import { NavigationScreenProp, NavigationStateRoute } from 'react-navigation';
import styled from 'styled-components/native';

import { getString } from '../../../STRINGS';
import SectionList from '../shared/SectionList';
import SettingOption from '../shared/SettingOption';
import SwitchToggle from '../shared/SwitchToggle';

const Container = styled.View`
  display: flex;
  flex: 1;
  justify-content: center;
  background-color: white;

  padding-top: ${Constants.statusBarHeight};
`;

const Header = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 44px;
`;

const HeaderText = styled.Text`
  font-size: 16;
  color: rgb(50, 59, 67);
  letter-spacing: -0.47;
`;

const AccountEmail = styled.Text`
  font-size: 16;
  color: rgb(153, 162, 170);
  letter-spacing: -0.5;
`;

interface Props {
  navigation?: NavigationScreenProp<any, any>;
  screenProps?: any,
  email: string,
  onSwitchToggleNotiBeforePaymentPress: (switchOn: boolean) => void;
  onSwitchToggleNotiMarkettingEmailPress: (switchOn: boolean) => void;
  onSwitchToggleNotiMarkettingPushPress: (switchOn: boolean) => void;
  onContactUsPress: () => void;
}

function Page({
  navigation,
  screenProps,
  email,
  onSwitchToggleNotiBeforePaymentPress,
  onSwitchToggleNotiMarkettingEmailPress,
  onSwitchToggleNotiMarkettingPushPress,
  onContactUsPress,
}: Props) {
  return (
    <Container>
      <Header>
        <HeaderText>{getString('SETTING')}</HeaderText>
      </Header>
      <SectionList
        renderItem={({ item, index }) => {
          const { label, option, onPress } = item;

          return (
            <SettingOption
              key={index}
              label={label}
              onPress={onPress}
            >
              {option}
            </SettingOption>
          );
        }}
        sections={[{
          title: `${getString('SETTING_ACCOUNT')}`,
          data: [{
            label: getString('SETTING_EMAIL'),
            option: (
              <AccountEmail>{email}</AccountEmail>
            ),
          }],
        }, {
          title: `${getString('SETTING_NOTIFICATION')}`,
          data: [{
            label: getString('SETTING_NOTIFICATION_BEFORE_PAYMENT'),
            option: (
              <SwitchToggle
                onPress={onSwitchToggleNotiBeforePaymentPress}
                testID='switchToggleNotiBeforePayment'
              />
            ),
          }, {
            label: getString('SETTING_NOTIFICATION_MARKETING_EMAIL'),
            option: (
              <SwitchToggle
                onPress={onSwitchToggleNotiMarkettingEmailPress}
                testID='switchToggleOnNotiMarkettingEmail'
              />
            ),
          }, {
            label: getString('SETTING_NOTIFICATION_MARKETING_PUSH'),
            option: (
              <SwitchToggle
                onPress={onSwitchToggleNotiMarkettingPushPress}
                testID='switchToggleOnNotiMarkettingPush'
              />
            ),
          }],
        }, {
          title: `${getString('SETTING_OTHERS')}`,
          data: [{
            label: getString('SETTING_OTHERS_CONTACTUS'),
            onPress: onContactUsPress,
          }],
        }]}
      />
    </Container>
  );
}

export default Page;
