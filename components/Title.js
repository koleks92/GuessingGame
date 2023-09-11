import { Text, StyleSheet } from "react-native";

function Title({children}) {
    return (
    <Text style={styles.title}>{children}</Text>
    )
}; 

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        color: '#ddb52f',
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 12,
        borderWidth: 3,
        borderColor: '#ddb52f',
        borderRadius: 4
    }
});

export default Title;

