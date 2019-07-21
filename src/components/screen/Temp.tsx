import React, { Component } from 'react';
import {
  Platform,
  StatusBar,
  StyleSheet,
  TouchableHighlight,
  Image,
  ScrollView,
  Text,
  View,
  FlatList,
  InteractionManager,
} from 'react-native';

import styled from 'styled-components/native';

import Button from '../shared/Button';
import Setting from './Setting';

const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.backgroundDark};
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

interface Props {
  navigation: any;
}

function Page(props: Props) {
  return (
    <Container>
      <Button
        testID='btn'
        onClick={() => props.navigation.goBack()}
        text='Go Back'
        style={{
          backgroundColor: '#333333',
        }}
      />
      {/* <Setting
        navigation={props.navigation}
        email='sampleEmail@doodlelab'
      /> */}
    </Container>
  );
}

export default Page;
