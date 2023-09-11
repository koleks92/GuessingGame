import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';

export default function App() {

  const [userNumber, setUserNumber] = useState();

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  };

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen />
  };



  return (
    <LinearGradient colors={['#7e0642', '#ddb52f']}style={styles.rootScreen}>
      <ImageBackground 
      source={require('./assets/images/background.jpg')} 
      resizeMode='cover'
      style={styles.rootScreen}
      imageStyle={styles.backgroundImageStyle}>
      {screen}
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
