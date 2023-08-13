import {Text, View, Pressable, StyleSheet} from "react-native";

function PrimaryButton({children}) {
    function pressHandler() {
        console.log('pressed')
    }
    return(
        <View style={styles.buttonOuterContainer}>
        <Pressable style={({pressed}) =>
            pressed
            ? [styles.buttonInnerContainer,styles.pressed]
            : styles.buttonInnerContainer } onPress={pressHandler} android_ripple={{color:'#7320e8'}}>
            <Text style={styles.buttonText}>{children}</Text>
        </Pressable>
        </View>
    )
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 30,
        marginVertical:4,
        overflow: 'hidden',
    },
    buttonInnerContainer: {
        backgroundColor: '#9861e7',
        paddingHorizontal: 8,
        paddingVertical: 16,
        elevation: 4,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    },
    pressed: {
        opacity: 0.75,
    }
})