// imports

import {StyleSheet} from 'react-native';

// local imports
import {DemoAppTheme} from '../../themes';
import {moderateScale} from '../../helpers/responsiveSize';

const TrackingPartnerInfoStyles = StyleSheet.create({
  trackingPartnerContainer_section1: {
    flexDirection: 'row',
    width: '100%',
    paddingTop: 5,
  },
  trackingPartnerContainer_section1_subSection1: {
    width: '20%',
    justifyContent: 'center',
  },
  trackingPartnerContainer_section1_imageContainer: {
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: DemoAppTheme.colors.white_3,
    borderWidth: 2,
    borderColor: DemoAppTheme.colors.white_4,
  },
  trackingPartnerContainer_section1_image: {
    width: 35,
    height: 35,
  },
  trackingPartnerContainer_section1_subSection2: {
    width: '55%',
  },
  trackingPartnerContainer_section1_subSection2_text1: {
    fontSize: moderateScale(18),
    fontWeight: '700',
    color: DemoAppTheme.colors.black_1,
  },
  trackingPartnerContainer_section1_subSection2_text2: {
    color: DemoAppTheme.colors.black_2,
    fontSize: moderateScale(14),
  },
  trackingPartnerContainer_section1_subSection3: {
    width: '25%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  trackingPartnerContainer_section1_subSection3_iconContainer: {
    borderRadius: 50,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: DemoAppTheme.colors.white_3,
    borderWidth: 2,
    borderColor: DemoAppTheme.colors.white_4,
  },
});

export default TrackingPartnerInfoStyles;
