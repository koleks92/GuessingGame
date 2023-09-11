import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient colors={['#7e0642', '#ddb52f']}style={styles.rootScreen}>
      <ImageBackground 
      source={require('./assets/images/background.jpg')} 
      resizeMode='cover'
      style={styles.rootScreen}
      imageStyle={styles.backgroundImageStyle}>
        <StartGameScreen />
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
