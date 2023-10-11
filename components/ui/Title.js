import {StyleSheet, Text, Platform} from "react-native";
import Colors from "../../constants/colors";

function Title({children}) {
    return(
        <Text style={styles.title}>{children}</Text>
    )
}

export default Title;
const styles = StyleSheet.create({

    title: {
        fontSize: 20,
        fontFamily: 'open-bold',
       // borderWidth: Platform.OS === 'android' ? 2 : 0,
        borderWidth: Platform.select({ ios: 0, android: 2}),
        borderColor: 'white',
        borderRadius: 15,
        padding: 15,
        textAlign: 'center',
        color: 'white'
    },
})