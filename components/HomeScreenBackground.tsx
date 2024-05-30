import React from 'react';
import {
  Image,
  ImageBackground,
  ScaledSize,
  StyleSheet,
  View,
} from 'react-native';
import {Canvas, LinearGradient, Rect, vec} from '@shopify/react-native-skia';
import useApplications from '../hooks/useApplications';

const HomeScreenBackground = () => {
  const dimensions = useApplications();
  const {width, height} = dimensions;
  const myStyles = styles(dimensions); // used this to eliminate type errors caused due to ScaledSize type
  const smokeHeight = height * 0.6;
  const smokeOffsetY = height * 0.4;
  return (
    <View style={{...StyleSheet.absoluteFillObject}}>
      <Canvas style={myStyles.root}>
        <Rect x={0} y={0} width={width} height={height}>
          <LinearGradient
            start={vec(0, 0)}
            end={vec(width, height)}
            colors={['#2e335a', '1c1b33']}
          />
        </Rect>
      </Canvas>
      <ImageBackground
        source={require('../assets/home/Background.png')}
        resizeMode="cover"
        style={myStyles.bgImage}>
        <Canvas
          style={{
            height: smokeHeight,
            ...StyleSheet.absoluteFillObject,
            top: smokeOffsetY,
          }}>
          <Rect x={0} y={0} width={width} height={smokeHeight}>
            <LinearGradient
              start={vec(width / 2, 0)}
              end={vec(width / 2, smokeHeight)}
              colors={['rgba(58,63,84,0)', 'rgba(58,63,84,1)']}
              positions={[-0.02, 0.54]}
            />
          </Rect>
        </Canvas>
        <Image
          source={require('../assets/home/House.png')}
          resizeMode="contain"
          style={myStyles.image}
        />
      </ImageBackground>
    </View>
  );
};

export default HomeScreenBackground;

const styles = ({width, height}: ScaledSize) =>
  StyleSheet.create({
    root: {
      flex: 1,
    },
    bgImage: {
      height: '100%',
    },
    image: {
      width: width,
      height: height,
      ...StyleSheet.absoluteFillObject,
      top: '10%',
    },
  });

// Canvas in skia is like View in React native
