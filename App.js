import {ImageBackground, SafeAreaView, StyleSheet} from 'react-native';
import { StatusBar } from "expo-status-bar";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from 'expo-linear-gradient';
import {useCallback, useState} from "react";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
export default function App() {
    const [userNumber, setUserNumber] = useState(null);
    const [gameIsOver, setGameIsOver] = useState(true);
    const [guessRounds, setGuessRounds] = useState(0);
    const [fontsLoaded] = useFonts({
        'open-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
        'open-regular': require('./assets/fonts/OpenSans-Regular.ttf')
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    function pickedNumberHandler(pickedNumber) {
        setUserNumber(pickedNumber);
        setGameIsOver(false);
    }
    function gameOverHandler(numberOfRounds) {
        setGameIsOver(true);
        setGuessRounds(numberOfRounds);
    }
    function startNewGameHandler() {
        console.log('start again')
        setUserNumber(null);
        setGuessRounds(0);
    }
    let screen = <StartGameScreen onConfirmNumber={pickedNumberHandler} onLayoutView={onLayoutRootView}/>
    if(userNumber) {
        screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
    }
    if(gameIsOver && userNumber) {
        screen = <GameOverScreen userNumber={userNumber} onStartNewGame={startNewGameHandler} roundsNumber={guessRounds}/>
    }
    return (

        <LinearGradient colors={[Colors.primary400,Colors.secondary500]}
                        style={styles.rootContainer} >
            <StatusBar backgroundColor="blue" barStyle="light-content" />
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
