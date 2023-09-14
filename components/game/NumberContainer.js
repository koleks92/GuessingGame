import { View, Text, StyleSheet, Dimensions, useWindowDimensions } from 'react-native';

import Colors from '../../constants/colors';

function NumberContainer({children}) {

    const { width, height } = useWindowDimensions();
    
    const containerMargin = height < 400 ? 12 : 24

    return (
        <View style={[styles.container, {margin: containerMargin}]}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    )
}

export default NumberContainer;

const deviceWidth = Dimensions.get('window').width;


const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.accent500,
        padding: deviceWidth < 350 ? 12 : 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center' 
    },
    numberText: {
        fontFamily: 'OpenSansBold',
        color: Colors.accent500,
        fontSize: 36,
    }
})