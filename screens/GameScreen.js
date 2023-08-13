import {StyleSheet, Text, View, SafeAreaView} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";

function GameScreen() {
    return(
        <View style={styles.screen}>
            <Title>GameScreen</Title>
            <View>
                <Text>Higher or lower?</Text>
                <PrimaryButton>+</PrimaryButton>
                <PrimaryButton>-</PrimaryButton>
            </View>
            <View>
                <Text>LOG</Text>
            </View>
        </View>
    )
}

export default GameScreen;
const styles = StyleSheet.create({
    screen: {
        flex:1,
        padding:30
    },
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