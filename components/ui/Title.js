import {StyleSheet, Text} from "react-native";
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
        fontWeight: 'bold',
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 15,
        padding: 15,
        textAlign: 'center',
        color: 'white'
    },
})