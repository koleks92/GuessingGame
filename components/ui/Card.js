import { StyleSheet, View, Dimensions } from "react-native";

import Colors from "../../constants/colors";

function Card ({ children }) {
    return <View style={styles.card}>{children}</View>
};

export default Card;

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginTop: deviceWidth < 380 ? 18 : 36,
        backgroundColor: Colors.primary800,
        marginHorizontal: 24,
        borderRadius: 8,
        elevation: 4,                           // Android only !
        shadowColor: 'black',                   // IOS
        shadowOffset: {width: 10, height: 10},  // IOS
        shadowRadius: 60,                       // IOS
        shadowOpacity: 1                        // IOS
    },
});