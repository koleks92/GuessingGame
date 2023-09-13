import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function Title({children}) {
    return (
    <Text style={styles.title}>{children}</Text>
    )
}; 

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 12,
        borderWidth: 3,
        borderColor: 'white',
        borderRadius: 4
    }
});

export default Title;

