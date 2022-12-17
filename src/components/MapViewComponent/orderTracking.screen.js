// imports
import React from 'react';
import {SafeAreaView, StatusBar, View, Text} from 'react-native';

// local imports
import OrderTrackingHeaderComponent from './components/OrderTrackingHeader/orderTrackingHeader.component';
import OrderTrackingPartnerInfo from './components/OrderTrackingPartnerInfo/orderTrackingPartnerInfo.component';
import OrderTrakingStyles from './orderTracking.styles';
import MapViewComponent from './components/MapView/mapView.component';
import {DemoAppTheme} from './themes';

const OrderTrackingScreen = () => {
  return (
    <SafeAreaView style={OrderTrakingStyles.orderTrackingContainer}>
      <View style={OrderTrakingStyles.orderTrackingMapContainer}>
        {/* <Text>Map Section</Text> */}
        <MapViewComponent />
      </View>
    </SafeAreaView>
  );
};

export default OrderTrackingScreen;
