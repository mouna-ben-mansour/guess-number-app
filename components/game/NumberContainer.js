import {StyleSheet, Text, View} from "react-native";
import Colors from "../../constants/colors";

function NumberContainer({children}) {
    return(
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    )
}

export default NumberContainer;

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        padding:15,
        margin: 15,
        borderColor: Colors.secondary500,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    numberText: {
        color: Colors.secondary500,
        fontWeight: 'bold',
        fontSize: 36
    }
});