import { Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

function Title({children}) {
    return (
    <Text style={styles.title}>{children}</Text>
    )
}; 

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        color: Colors.accent500,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 12,
        borderWidth: 3,
        borderColor: Colors.accent500,
        borderRadius: 4
    }
});

export default Title;

