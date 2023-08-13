import {StyleSheet, Text, View} from "react-native";
import Colors from "../../constants/colors";

function InstructionText({children, customStyle}) {
    return (
        <View>
            <Text style={[styles.InstructionText, customStyle]}>{children}</Text>
        </View>
    )
}
export default InstructionText;

const styles = StyleSheet.create({

    InstructionText: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'open-regular'
    },


});