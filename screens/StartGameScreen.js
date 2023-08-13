import {StyleSheet, Text, TextInput, View} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import {StatusBar} from "expo-status-bar";

function StartGameScreen() {
    return (
        <View style={[styles.InputContainer,styles.shadowProp]}>
            <Text style={styles.title}>Guess My Number</Text>
            <Text style={{color:'#fff'}}>Enter a Number</Text>
            <TextInput style={styles.InputNumber}
                       maxLength={2}
                       keyboardType={"number-pad"}
                       autoCapitalize="none"
                       autoCorrect={false}
            />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton>Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    )
}
export default StartGameScreen;

const styles = StyleSheet.create({

    InputContainer: {
        backgroundColor: '#7e3dd7',
        padding: 15,
        marginTop: 100,
        marginHorizontal: 25,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    shadowProp: {
        elevation: 20,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        borderWidth: 2,
        borderColor: '#000',
        borderRadius: 15,
        padding: 15
    },
    InputNumber: {
        height: 50,
        width: 100,
        fontSize: 35,
        fontWeight: 'bold',
        color: '#FDEFBA',
        borderBottomWidth: 2,
        borderBottomColor: '#FDEFBA',
        textAlign: 'center',
        marginVertical: 8
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex:1
    }
});