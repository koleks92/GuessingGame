import { View, Text, Image, StyleSheet } from 'react-native';

import Title from '../components/ui/Title';
import Colors from '../constants/colors';
import PrimaryButton from '../components/ui/PrimaryButton';

function GameOverScreen () {
    return (
    <View style={styles.rootContainer}>
        <Title>GAME OVER!</Title>
        <View style={styles.imageContainer}>
            <Image style={styles.imageStyle} source={require('../assets/images/win.jpg')}/>
        </View>
        <Text style={styles.summaryText}>
            Your phone needed <Text style={styles.highlight}>X</Text> rounds to guess the number{' '}<Text style={styles.highlight}>Y</Text>
        </Text>
        <PrimaryButton>Start New Game</PrimaryButton>

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
    },
    summaryText: {
        fontFamily: 'OpenSans',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 24
    },
    highlight: {
        fontFamily: 'OpenSansBold',
        color: Colors.primary500,
    },

});

export default GameOverScreen;