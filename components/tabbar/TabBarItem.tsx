import {View} from 'react-native';
import React from 'react';
import MapIcon from './MapIcon';
import ListIcon from './ListIcon';

const TabBarItem = () => {
  return (
    <View style={{backgroundColor: 'red'}}>
      <MapIcon />
      <ListIcon />
    </View>
  );
};

export default TabBarItem;
