// imports
import {StyleSheet} from 'react-native';

// local imports
import {DemoAppTheme} from '../../themes';
import {moderateScale} from '../../helpers/responsiveSize';

const OrderTrackingHeaderStyles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  header_text_1: {
    color: DemoAppTheme.colors.white_1,
    fontWeight: '600',
    fontSize: moderateScale(18),
    marginTop: 20,
    marginBottom: 10,
  },
  header_text_2: {
    color: DemoAppTheme.colors.white_1,
    fontWeight: '800',
    fontSize: moderateScale(23),
    letterSpacing: 1,
  },
  header_sub_section1: {
    marginTop: 10,
    flexDirection: 'row',
    backgroundColor: DemoAppTheme.colors.green_2,
    borderRadius: 5,
    width: '100%',
  },
  header_sub_section1_view1: {
    width: '35%',
    borderRightWidth: 1,
    borderRightColor: DemoAppTheme.colors.green_3,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
  },
  header_sub_section1_view2: {
    width: '65%',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
  },
  header_sub_section1_text: {
    color: DemoAppTheme.colors.white_1,
    letterSpacing: 0.5,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default OrderTrackingHeaderStyles;
