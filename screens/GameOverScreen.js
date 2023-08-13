import {Image, StyleSheet, Text, View} from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";

function GameOverScreen() {
    return (
        <View style={styles.rootContainer}>
            <Title>Game Over</Title>
            <View style={styles.imageContainer}>
                <Image source={require('../assets/success.png')} style={styles.image}/>
            </View>
            <Text>Your phone needs X rounds to guess the number Y</Text>
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
    }
})