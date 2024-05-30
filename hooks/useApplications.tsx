// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import {ScaledSize, useWindowDimensions, StatusBar} from 'react-native';

const useApplications = (): ScaledSize => {
  const {width, height, scale, fontScale} = useWindowDimensions();
  return {
    width,
    height: height + (StatusBar?.currentHeight || 0),
    scale,
    fontScale,
  };
};

export default useApplications;
