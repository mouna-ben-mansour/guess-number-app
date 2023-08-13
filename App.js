import {ImageBackground, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import { StatusBar } from "expo-status-bar";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from 'expo-linear-gradient';
import {useState} from "react";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";
export default function App() {
    const [userNumber, setUserNumber] = useState(null);
    function pickedNumberHandler(pickedNumber) {
        setUserNumber(pickedNumber);
        console.log('pick'+pickedNumber)
    }
    let screen = <StartGameScreen onConfirmNumber={pickedNumberHandler}/>
    if(userNumber) {
        screen = <GameScreen/>
    }
    return (
        <LinearGradient colors={[Colors.primary400,Colors.secondary500]}
                        style={styles.rootContainer}>
            <ImageBackground
                source={require('./assets/background.png')}
                resizeMode="cover"
                style={styles.rootContainer}
                imageStyle={styles.backgroundImage}
            >
                <SafeAreaView style={styles.rootContainer}>
                {screen}
                </SafeAreaView>
            </ImageBackground>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex:1,
    },
    backgroundImage: {
        opacity: 0.15,
    }
});
