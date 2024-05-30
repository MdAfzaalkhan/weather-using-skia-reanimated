import React from 'react';
import HomeScreenBackground from './components/HomeScreenBackground';
import {StatusBar} from 'react-native';
import WeatherTabBar from './components/tabbar/WeatherTabBar';

function App(): React.JSX.Element {
  return (
    <>
      <HomeScreenBackground />
      <WeatherTabBar />
      <StatusBar barStyle={'light-content'} />
    </>
  );
}

export default App;
