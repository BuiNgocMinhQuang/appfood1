// imports
import React from 'react';
import {View, Image, Text} from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

// local imports
import {DemoAppTheme} from '../../themes';
import TrackingPartnerInfoStyles from './trackingPartnerInfo.styles';

// images

const TrackingPartnerInfo = () => {
  return (
    <View style={TrackingPartnerInfoStyles.trackingPartnerContainer_section1}>
      <View
        style={
          TrackingPartnerInfoStyles.trackingPartnerContainer_section1_subSection1
        }>
        <View
          style={
            TrackingPartnerInfoStyles.trackingPartnerContainer_section1_imageContainer
          }></View>
      </View>
      <View
        style={
          TrackingPartnerInfoStyles.trackingPartnerContainer_section1_subSection2
        }>
        <Text
          style={
            TrackingPartnerInfoStyles.trackingPartnerContainer_section1_subSection2_text1
          }>
          I'm Jonathan, your delivery partner
        </Text>
        <Text
          style={
            TrackingPartnerInfoStyles.trackingPartnerContainer_section1_subSection2_text2
          }>
          I have completed 100+ super-fast deliveries
        </Text>
      </View>
      <View
        style={
          TrackingPartnerInfoStyles.trackingPartnerContainer_section1_subSection3
        }>
        <View
          style={
            TrackingPartnerInfoStyles.trackingPartnerContainer_section1_subSection3_iconContainer
          }>
          <MaterialCommunityIcon
            name="message-reply-text-outline"
            size={18}
            color={DemoAppTheme.colors.red_1}
          />
        </View>
        <View
          style={
            TrackingPartnerInfoStyles.trackingPartnerContainer_section1_subSection3_iconContainer
          }>
          <MaterialCommunityIcon
            name="phone-in-talk"
            size={18}
            color={DemoAppTheme.colors.red_1}
          />
        </View>
      </View>
    </View>
  );
};

export default TrackingPartnerInfo;
