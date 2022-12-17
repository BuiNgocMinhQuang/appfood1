// imports
import {StyleSheet} from 'react-native';

// local imports
import {DemoAppTheme} from './themes';

const OrderTrakingStyles = StyleSheet.create({
  orderTrackingContainer: {
    flex: 1,
  },
  orderTrackingHeaderContainer: {
    flex: 2,
    paddingLeft: DemoAppTheme.defaultPadding,
    paddingRight: DemoAppTheme.defaultPadding,
    backgroundColor: DemoAppTheme.colors.green_1,
  },
  orderTrackingMapContainer: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  orderTrackingBottomContainer: {
    flex: 4,
    paddingLeft: DemoAppTheme.defaultPadding,
    paddingRight: DemoAppTheme.defaultPadding,
    backgroundColor: DemoAppTheme.colors.white_1,
    justifyContent: 'flex-end',
  },
});

export default OrderTrakingStyles;
