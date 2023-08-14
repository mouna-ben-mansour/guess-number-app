import {Image, StyleSheet, Text, View} from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {
    return (
        <View style={styles.rootContainer}>
            <Title>Game Over</Title>
            <View style={styles.imageContainer}>
                <Image source={require('../assets/success.png')} style={styles.image}/>
            </View>
            <Text style={styles.summaryText}>
                Your phone needs <Text style={styles.highlight}> {roundsNumber} </Text>
                rounds to guess the number <Text style={styles.highlight}> {userNumber} </Text>
            </Text>
            <PrimaryButton pressHandler={onStartNewGame}>Start New Game</PrimaryButton>
        </View>
    )
}

export default GameOverScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center'
    },
    imageContainer: {
        width: 300,
        height: 300,
        alignItems: 'center',
        borderRadius: 150,
        borderWidth: 2,
        overflow: 'hidden',
        margin: 36,
        borderColor: Colors.secondary500
    },
    image: {
        width: '100%',
        height: '100%'
    },
    summaryText: {
        fontFamily: 'open-regular',
        fontSize: 24,
        textAlign: 'center',
        marginVertical: 24
    },
    highlight: {
        fontFamily: 'open-bold',
        color: Colors.primary500
    }
})