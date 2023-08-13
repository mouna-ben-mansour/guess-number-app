import {StyleSheet, Text, View, SafeAreaView} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import {useEffect, useState} from "react";
import NumberContainer from "../components/game/NumberContainer";

function generateRandomBetween(min, max, exclude) {
    const randomNum = Math.floor(Math.random() * (max - min)) + min;

    if (randomNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return randomNum;
    }
}
function GameScreen({userNumber}) {
    const initialGuess =  generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    return(
        <View style={styles.screen}>
            <Title>GameScreen</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
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
        paddingVertical:50,
        paddingHorizontal: 15
    },
});