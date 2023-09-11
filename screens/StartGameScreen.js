
import { TextInput, View, StyleSheet } from "react-native"
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen () {
    return ( 
    <View style={styles.inputContainer}>
        <TextInput />
        <PrimaryButton>Reset</PrimaryButton>
        <PrimaryButton>Confirm</PrimaryButton>
    </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        padding: 16,
        marginTop: 100,
        backgroundColor: '#72063c',
        marginHorizontal: 24,
        borderRadius: 8,
        elevation: 4,                           // Android only !
        shadowColor: 'black',                   // IOS
        shadowOffset: {width: 10, height: 10},  // IOS
        shadowRadius: 60,                       // IOS
        shadowOpacity: 1                        // IOS
    }
});

export default StartGameScreen;