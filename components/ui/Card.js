import {StyleSheet, View} from "react-native";
import Colors from "../../constants/colors";

function Card({children}) {
    return (
        <View style={[styles.InputContainer,styles.shadowProp]}>
            {children}
        </View>
    )
}
export default Card;

const styles = StyleSheet.create({

    InputContainer: {
        backgroundColor: Colors.primary500,
        padding: 15,
        marginTop: 36,
        marginHorizontal: 25,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    shadowProp: {
        elevation: 20,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },

});