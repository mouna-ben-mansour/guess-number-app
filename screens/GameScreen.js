import {StyleSheet, Text, View, SafeAreaView, Alert} from "react-native";
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
let minBoundary = 1;
let maxBoundary = 100;
function GameScreen({userNumber, onGameOver}) {
    const initialGuess =  generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    useEffect(() => {
        if(currentGuess === userNumber) {
            onGameOver();
        }
    }, [currentGuess, userNumber, onGameOver]);
    function nextGuessHandler(direction) {
        if (
            (direction === 'lower' && currentGuess < userNumber) ||
            (direction === 'greater' && currentGuess > userNumber)
        ) {
            Alert.alert(
                "Don't lie!",
                "you know that this wrong",
                [{text:'Sorry!', style:'cancel'}]
            )
            return;
        }
        if ( direction === 'lower') {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }
        const newRndNumber = generateRandomBetween(minBoundary,maxBoundary,currentGuess);
        setCurrentGuess(newRndNumber);
    }
    return(
        <View style={styles.screen}>
            <Title>GameScreen</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Text>Higher or lower?</Text>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton pressHandler={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton pressHandler={nextGuessHandler.bind(this,'greater')}>+</PrimaryButton>
                    </View>
                </View>
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
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex:1
    }
});