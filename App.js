import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import { StatusBar } from "expo-status-bar";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from 'expo-linear-gradient';
export default function App() {
    return (
        <LinearGradient colors={['#9867da','#FDEFBA']}
                        style={styles.rootContainer}>
            <ImageBackground
                source={require('./assets/background.png')}
                resizeMode="cover"
                style={styles.rootContainer}
                imageStyle={styles.backgroundImage}
            >
                <StartGameScreen/>
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
