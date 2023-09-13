import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, SafeAreaView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import Colors from './constants/colors';

export default function App() {

  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);

  const [fontsLoaded] = useFonts({
    'OpenSans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'OpenSansBold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }


  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  };

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
  };

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen />
  }

  function gameOverHandler() {
    setGameIsOver(true);
  }


  return (
    <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScreen}>
      <ImageBackground 
      source={require('./assets/images/background.jpg')} 
      resizeMode='cover'
      style={styles.rootScreen}
      imageStyle={styles.backgroundImageStyle}>
      <SafeAreaView style={styles.rootScreen}>
        {screen}
      </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImageStyle: {
    opacity: 0.15
  }
});
