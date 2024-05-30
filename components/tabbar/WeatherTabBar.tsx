import {StyleSheet, View} from 'react-native';
import React from 'react';
import Arc from './Arc';
import useApplications from '../../hooks/useApplications';
import TabBarItem from './TabBarItem';

const WeatherTabBar = () => {
  const TabBarHeight = 88;
  const {width, height} = useApplications();
  return (
    <View
      style={{
        height: TabBarHeight,
        ...StyleSheet.absoluteFillObject,
        top: height - TabBarHeight,
      }}>
      <Arc height={TabBarHeight} width={width} />
      <TabBarItem />
    </View>
  );
};

export default WeatherTabBar;
