// imports
import React from 'react';
import {View, Text} from 'react-native';

// local imports
import OrderTrackingHeaderStyles from './orderTrackingHeader.styles';

const OrderTrackingHeaderComponent = () => {
  return (
    <View style={OrderTrackingHeaderStyles.headerContainer}>
      <Text style={OrderTrackingHeaderStyles.header_text_1}>Dominos Pizza</Text>
      <Text style={OrderTrackingHeaderStyles.header_text_2}>
        Order is on the way🤘
      </Text>
      <View style={OrderTrackingHeaderStyles.header_sub_section1}>
        <View style={OrderTrackingHeaderStyles.header_sub_section1_view1}>
          <Text style={OrderTrackingHeaderStyles.header_sub_section1_text}>
            😋 Before time
          </Text>
        </View>
        <View style={OrderTrackingHeaderStyles.header_sub_section1_view2}>
          <Text style={OrderTrackingHeaderStyles.header_sub_section1_text}>
            Reaching near you in 2 mins
          </Text>
        </View>
      </View>
    </View>
  );
};

export default OrderTrackingHeaderComponent;
