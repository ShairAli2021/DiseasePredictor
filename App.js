import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {Nagivation} from './src/Navigation';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      <Nagivation />
    </>
  );
};
export default App;
