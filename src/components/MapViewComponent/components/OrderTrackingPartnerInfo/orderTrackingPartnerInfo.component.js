// imports
import React from 'react';
import {View, Text, Image} from 'react-native';

// local imports
import TrackingPartnerInfo from '../TrackingPartnerInfo/trackingPartnerInfo.component';
import DeliveryInfo from '../DeliveryInfo/deliveryInfo.component';
import AlertComponent from '../Alert/alert.component';
import OrderTrackingPartnerInfoStyles from './orderTrackingPartnerInfo.styles';

// images

const OrderTrackingPartnerInfo = () => {
  return (
    <View style={OrderTrackingPartnerInfoStyles.trackingPartnerContainer}>
      <>
        <DeliveryInfo />
        <TrackingPartnerInfo />
        <AlertComponent alertContent="I am on the way to your location" />
      </>
      <View
        style={
          OrderTrackingPartnerInfoStyles.trackingPartnerContainer_section2
        }>
        <View
          style={
            OrderTrackingPartnerInfoStyles.trackingPartnerContainer_section2_circle
          }></View>
        <Text
          style={
            OrderTrackingPartnerInfoStyles.trackingPartnerContainer_section2_text1
          }>
          My temperature was 96.3°F(normal) at 1:43 PM
        </Text>
      </View>
    </View>
  );
};

export default OrderTrackingPartnerInfo;
