import { Text, StyleSheet } from 'react-native'

import Colors from '../../constants/colors';

function InstructionText ({ children, style }) {
    return <Text style={[styles.instructionText, style]}>{children}</Text>
};

const styles = StyleSheet.create({
    instructionText: {
        fontFamily: 'OpenSans',
        color: Colors.accent500,
        fontSize: 20
    },
});

export default InstructionText;