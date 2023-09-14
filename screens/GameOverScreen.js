import { View, Text, Image, StyleSheet, Dimensions , useWindowDimensions, ScrollView} from 'react-native';

import Title from '../components/ui/Title';
import Colors from '../constants/colors';
import PrimaryButton from '../components/ui/PrimaryButton';

function GameOverScreen ({ roundsNumber, userNumber, onStartNewGame }) {

    const {width, height} = useWindowDimensions();

    let imageSize = 300;
    let marginSize = 48

    if (width < 380) {
        imageSize = 150;
        marginSize = 24
    };

    if (height < 400) {
        imageSize = 120;
        marginSize = 18
    };

    const imageStyle = {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2,
        margin: marginSize
    };

    return (
    <ScrollView style={styles.screen}>
        <View style={styles.rootContainer}>
            <Title>GAME OVER!</Title>
            <View style={[styles.imageContainer, imageStyle]}>
                <Image style={styles.imageStyle} source={require('../assets/images/win.jpg')}/>
            </View>
            <Text style={styles.summaryText}>
                Your phone needed 
                <Text style={styles.highlight}> {roundsNumber} </Text> 
                rounds to guess the number<Text style={styles.highlight}> {userNumber}</Text>
            </Text>
            <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
        </View>
    </ScrollView>
)};



const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        borderWidth: 2,
        overflow: 'hidden',
        borderColor: Colors.primary800,
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