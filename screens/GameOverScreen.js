import { View, Text, Image, StyleSheet } from 'react-native';

import Title from '../components/ui/Title';
import Colors from '../constants/colors';

function GameOverScreen () {
    return (
    <View style={styles.rootContainer}>
        <Title>GAME OVER!</Title>
        <View style={styles.imageContainer}>
            <Image style={styles.imageStyle} source={require('../assets/images/win.jpg')}/>
        </View>
    </View>
)};

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        overflow: 'hidden',
        borderColor: Colors.primary800,
        margin: 48
    },
    imageStyle: {
        width: '100%',
        height: '100%',        
    }

});

export default GameOverScreen;