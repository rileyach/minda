import * as React from "react";
import MainContainer from "./navigation/MainContainer";
import HomeScreen from "./navigation/screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';


function App() {
  const [fontsLoaded] = useFonts({
    'Gilroy-Regular': require('./assets/fonts/Gilroy-Regular.ttf'),
    'Gilroy-Black': require('./assets/fonts/Gilroy-Black.ttf'),
    'Gilroy-Bold': require('./assets/fonts/Gilroy-Bold.ttf'),
    'Gilroy-Medium': require('./assets/fonts/Gilroy-Medium.ttf'),
    'Gilroy-Heavy': require('./assets/fonts/Gilroy-Heavy.ttf'),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
        }
        prepare();
  }, []);

  if (!fontsLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }

  return <MainContainer />;
}

export default App;
