import { Text, StyleSheet } from "react-native";


function Title({children}) {
    return (
    <Text style={styles.title}>{children}</Text>
    )
}; 

const styles = StyleSheet.create({
    title: {
        fontFamily: 'OpenSansBold',
        fontSize: 24,
        color: 'white',
        textAlign: 'center',
        padding: 12,
        borderWidth: 3,
        borderColor: 'white',
        borderRadius: 4,
        maxWidth: '80%',
        width: 300
    }
});

export default Title;

