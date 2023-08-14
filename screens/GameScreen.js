import {StyleSheet, Text, View, Alert, FlatList} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import {useEffect, useState} from "react";
import NumberContainer from "../components/game/NumberContainer";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import {Ionicons}from '@expo/vector-icons';
import Colors from "../constants/colors";

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
    const [guessRounds, setGuessRounds] = useState([initialGuess]);
    useEffect(() => {
        if(currentGuess === userNumber) {
            onGameOver(guessRounds.length);
        }
    }, [currentGuess, userNumber, onGameOver]);
    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, []);
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
        setGuessRounds(prevGuessRounds=> [newRndNumber,...prevGuessRounds])
    }
    return(
        <View style={styles.screen}>
            <Title>GameScreen</Title>
            <Card>
            <NumberContainer>{currentGuess}</NumberContainer>
                <InstructionText customStyle={styles.instructionText}>Higher or lower?</InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton pressHandler={nextGuessHandler.bind(this, 'lower')}>
                            <Ionicons name="md-remove" size={24} color="white" />
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton pressHandler={nextGuessHandler.bind(this,'greater')}>
                            <Ionicons name="md-add" size={24} color="white" />
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
            <View style={styles.listContainer}>
                {/*{guessRounds.map(guessRound =>  <Text key={guessRound}>{guessRound}</Text>)}*/}
                <FlatList
                    data={guessRounds}
                    renderItem={({item}) =>
                        <View style={styles.itemContainer}>
                            <Text>Opponent's Guess: {item}</Text>
                        </View>
                }
                    keyExtractor={item => item}
                />
            </View>
        </View>
    )
}

export default GameScreen;
const styles = StyleSheet.create({
    screen: {
        flex:1,
        marginTop: 100,
        alignItems: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex:1
    },
    instructionText: {
        marginBottom: 15
    },
    itemContainer: {
        borderColor: Colors.primary700,
        borderWidth: 1,
        borderRadius: 40,
        padding: 12,
        marginVertical: 8,
        backgroundColor: Colors.secondary500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.25,
        shadowRadius: 3,
    },
    listContainer: {
        flex: 1,
        padding: 16,
    }
});