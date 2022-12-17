// imports

import {StyleSheet} from 'react-native';

// local imports
import {DemoAppTheme} from '../../themes';
import {moderateScale} from '../../helpers/responsiveSize';

const OrderTrackingPartnerInfoStyles = StyleSheet.create({
  trackingPartnerContainer: {
    marginTop: 10,
  },
  trackingPartnerContainer_section2: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  trackingPartnerContainer_section2_circle: {
    borderRadius: 50,
    width: 40,
    height: 40,
    backgroundColor: DemoAppTheme.colors.white_2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  trackingPartnerContainer_section2_image: {
    width: 20,
    height: 20,
  },
  trackingPartnerContainer_section2_text1: {
    color: DemoAppTheme.colors.black_1,
    fontWeight: '600',
    fontSize: moderateScale(12),
    textAlign: 'center',
    paddingLeft: 10,
  },
});

export default OrderTrackingPartnerInfoStyles;
