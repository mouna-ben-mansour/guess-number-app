import {Image, StyleSheet, Text, useWindowDimensions, View, ScrollView} from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {
    const { width, height } = useWindowDimensions();
    const marginTop = height < 400 ? 30 : 100;
    let imageSize = 250;
    if (width < 380 ) {
        imageSize = 150;
    }
    if ( height < 500) {
        imageSize = 80;
    }
    const imageStyle = {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2
    }
    return (
        <ScrollView style={styles.screen}>
        <View style={[styles.rootContainer, { marginTop: marginTop }]}>
            <Title>Game Over</Title>
            <View style={[styles.imageContainer, imageStyle]}>
                <Image source={require('../assets/success.png')} style={styles.image}/>
            </View>
            <Text style={styles.summaryText}>
                Your phone needs <Text style={styles.highlight}> {roundsNumber} </Text>
                rounds to guess the number <Text style={styles.highlight}> {userNumber} </Text>
            </Text>
            <PrimaryButton pressHandler={onStartNewGame}>Start New Game</PrimaryButton>
        </View>
        </ScrollView>
    )
}

export default GameOverScreen;

const styles = StyleSheet.create({
    screen: {
        flex:1
    },
    rootContainer: {
        flex: 1,
      //  marginTop: 100,
        alignItems: 'center'
    },
    imageContainer: {
        width: 250,
        height: 250,
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