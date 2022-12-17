// imports
import React from 'react';
import {View, Text} from 'react-native';

// local import
import AlertStyles from './alert.styles';

const AlertComponent = ({alertContent}) => {
  return (
    <View style={AlertStyles.alertContainer}>
      <Text style={AlertStyles.alertText}>{alertContent}</Text>
    </View>
  );
};

export default AlertComponent;
