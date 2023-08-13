import {Alert, StyleSheet, Text, TextInput, View} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import {StatusBar} from "expo-status-bar";
import {useState} from "react";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";

function StartGameScreen({onConfirmNumber}) {
    const [enteredNumber, setEnteredNumber] = useState('');
    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText);
    }
    function resetInputHandler(enteredText) {
        setEnteredNumber('');
    }
    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);
        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber> 99) {
            Alert.alert(
                'Invalid number',
                'Number has to be a number between 1 and 99',
                [{text: 'Okay',style:'destructive', onPress: resetInputHandler}]
            );
            return;
        }
        onConfirmNumber(chosenNumber);
    }
    return (
        <View style={[styles.InputContainer,styles.shadowProp]}>
            <Title>Guess My Number</Title>
            <Text style={{color:'#fff'}}>Enter a Number</Text>
            <TextInput style={styles.InputNumber}
                       maxLength={2}
                       keyboardType={"number-pad"}
                       autoCapitalize="none"
                       autoCorrect={false}
                       onChangeText={numberInputHandler}
                       value={enteredNumber}
            />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton pressHandler={resetInputHandler}>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton pressHandler={confirmInputHandler}>Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    )
}
export default StartGameScreen;

const styles = StyleSheet.create({

    InputContainer: {
        backgroundColor: Colors.primary500,
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
    InputNumber: {
        height: 50,
        width: 100,
        fontSize: 35,
        fontWeight: 'bold',
        color: Colors.secondary500,
        borderBottomWidth: 2,
        borderBottomColor: Colors.secondary500,
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