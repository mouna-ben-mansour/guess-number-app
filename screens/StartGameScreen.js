import {
    Alert,
    StyleSheet,
    TextInput,
    View,
    Dimensions,
    useWindowDimensions,
    ScrollView,
    KeyboardAvoidingView
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import {StatusBar} from "expo-status-bar";
import {useState} from "react";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

function StartGameScreen({onConfirmNumber, onLayoutView}) {
    const [enteredNumber, setEnteredNumber] = useState('');
    const { width, height } = useWindowDimensions();

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
    const marginTop = height < 400 ? 30 : 100;
    return (
        <ScrollView style={styles.screen}>
        <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer, { marginTop: marginTop }]} onLayout={onLayoutView}>
            <Title>Guess My Number</Title>
            <Card>
                <InstructionText>Enter a Number</InstructionText>
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
            </Card>
        </View>
        </KeyboardAvoidingView>
        </ScrollView>
    )
}
export default StartGameScreen;
//const deviceHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
    screen: {
        flex:1
    },
    rootContainer: {
        flex:1,
       // marginTop: deviceHeight < 400 ? 30 : 100,
        alignItems: 'center'
    },
    InputContainer: {
        backgroundColor: Colors.primary500,
        padding: 15,
        marginTop: 36,
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