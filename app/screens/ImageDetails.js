import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text
} from 'react-native';

import colors from '../constants/colors';

export default () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />

      <Text>Hola</Text>

    </SafeAreaView>
  );
};