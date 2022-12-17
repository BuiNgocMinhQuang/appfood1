// imports
import {StyleSheet} from 'react-native';

// local imports
import {DemoAppTheme} from '../../themes';

const DeliveryInfoStyles = StyleSheet.create({
  deliveryInfoContainer: {
    paddingBottom: 4,
    borderBottomColor: DemoAppTheme.colors.black_3,
    borderBottomWidth: 2,
    width: '100%',
    flexDirection: 'row',
  },
  deliveryInfoContainer_section1: {
    width: '20%',
    justifyContent: 'center',
  },
  deliveryInfoContainer_section1_imageContainer: {
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: DemoAppTheme.colors.white_3,
    borderWidth: 2,
    borderColor: DemoAppTheme.colors.white_4,
  },
  deliveryInfoContainer_section1_image: {
    width: 40,
    height: 40,
  },
  deliveryInfoContainer_section2: {
    width: '80%',
  },
  deliveryInfoContainer_section2_text1: {
    fontWeight: '700',
    fontSize: 17,
    paddingBottom: 5,
  },
  deliveryInfoContainer_section2_text2: {
    color: DemoAppTheme.colors.black_4,
    paddingBottom: 5,
  },
  deliveryInfoContainer_section2_text3: {
    color: DemoAppTheme.colors.red_1,
    fontWeight: '600',
  },
});

export default DeliveryInfoStyles;
