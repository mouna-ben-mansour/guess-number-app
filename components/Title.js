import {StyleSheet, Text} from "react-native";

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
        borderColor: '#FDEFBA',
        borderRadius: 15,
        padding: 15,
        textAlign: 'center',
        color: '#FDEFBA'
    },
})