import { useState } from "react";
import { TextInput, View, StyleSheet, Alert, Text} from "react-native"

import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";

function StartGameScreen ({onPickNumber}) {

    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText);
    };

    function resetInputHandler() {
        setEnteredNumber('');
    };

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Wrong input!', 'Number has to be a number between 1 and 99',
            [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}]);
            return;
        }

        onPickNumber(chosenNumber);
    };

    return ( 
    <View style={styles.rootContainer}>
        <Title>Guess My Number</Title>
        <View style={styles.inputContainer}>
            <Text style={styles.instructionText}>Enter a number</Text>
            <TextInput 
            style={styles.numberInput} 
            maxLength={2} 
            keyboardType="number-pad"
            value={enteredNumber}
            onChangeText={numberInputHandler}/>
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>    
                </View>
            </View>
        </View>
    </View>
    );
};

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center'
    },
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginTop: 24,
        backgroundColor: Colors.primary800,
        marginHorizontal: 24,
        borderRadius: 8,
        elevation: 4,                           // Android only !
        shadowColor: 'black',                   // IOS
        shadowOffset: {width: 10, height: 10},  // IOS
        shadowRadius: 60,                       // IOS
        shadowOpacity: 1                        // IOS
    },
    instructionText: {
        color: Colors.accent500,
        fontSize: 20
    },
    numberInput: {
        height: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: "bold",
        textAlign: 'center',
        width: 50,
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1
    }
});

export default StartGameScreen;