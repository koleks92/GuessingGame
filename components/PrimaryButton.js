import { View, Text, Pressable, StyleSheet } from 'react-native';

function PrimaryButton (props) {
    function pressHandler() {
        console.log("Button pressed");
    }
    return ( 
    <View style={styles.buttonOuterContainer} >
        <Pressable 
        style={({ pressed }) => pressed ? [styles.pressed, styles.buttonInnerContainerPri] : styles.buttonInnerContainer}
        onPress={pressHandler}
        android_ripple={{color: '#3b031f'}}>
                <Text style={styles.buttonText}>{ props.children }</Text>
        </Pressable>
    </View>

    );
};

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden',

    },
    buttonInnerContainer: {
        backgroundColor: "#52042b",
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    },
    pressed: {
        opacity: 0.75,

    }
});

export default PrimaryButton;