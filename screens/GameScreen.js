import { View, Text, StyleSheet } from 'react-native';

import Title from '../components/Title';

function GameScreen() {
    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            {/* GUESS */}
            <View>
                <Text>Higher or lower ?</Text>
                {/* +
                - */}
            </View>
            <View>
                {/* LOG ROUNDSd */}
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 12,
        marginTop: 50
    },

})

export default GameScreen;