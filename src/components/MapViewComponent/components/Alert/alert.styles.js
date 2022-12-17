// imports
import {StyleSheet} from 'react-native';

// local imports
import {DemoAppTheme} from '../../themes';

const AlertStyles = StyleSheet.create({
  alertContainer: {
    width: '100%',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    backgroundColor: DemoAppTheme.colors.green_4,
    borderColor: DemoAppTheme.colors.green_5,
    borderWidth: 0.5,
    marginTop: 10,
    marginBottom: 10,
  },
  alertText: {
    color: DemoAppTheme.colors.green_5,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
});

export default AlertStyles;
