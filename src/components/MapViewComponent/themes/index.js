// imports
import {Dimensions} from 'react-native';

// constants
const windowWidth = Dimensions.get('window').width;

export const DemoAppTheme = {
  colors: {
    // green shades
    green_1: 'rgba(36, 150, 63, 1)',
    green_2: 'rgba(57,160,81,255)',
    green_3: 'rgba(75,171,99,255)',
    green_4: 'rgba(234,255,238,255)',
    green_5: 'rgba(85,160,104,255)',

    // white shades
    white_1: 'rgba(255, 254, 255, 1)',
    white_2: 'rgba(247,246,244,255)',
    white_3: 'rgba(249,255,254,255)',
    white_4: 'rgba(238,238,238,255)',

    // black shades
    black_1: 'rgba(28, 28, 28, 1)',
    black_2: 'rgba(132,132,132,255)',
    black_3: 'rgba(245,245,245,255)',
    black_4: 'rgba(139,139,139,255)',

    // blue shades
    blue_1: 'rgba(45, 109, 241, 1)',

    // red shades
    red_1: 'rgba(245,73,88,255)',
  },
  defaultPadding: windowWidth * 0.04,
};
