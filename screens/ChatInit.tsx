import { View, Text, Button, StyleSheet, Pressable } from "react-native";
import { BalloonDog } from "../assets/BalloonDog";


interface Props {
    onContinue: () => void;
}
function ChatInit(
    { onContinue }: Props
) {


    return (

        <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: 30, }}>
            <Text style={{ color: "#F59E0B", fontSize: 22, fontWeight: '600' }}>Your AI Assistant Migrochip</Text>
            <Text style={{ width: '60%', textAlign: 'center', marginTop: 10 }}>Using this software,you can ask you
                questions and receive articles using
                artificial intelligence assistant
            </Text>
            <BalloonDog />
            <Pressable style={styles.button} onPress={onContinue} >
                <Text>Continue</Text>
            </Pressable>
        </View>
    )
}



const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 20,
        elevation: 3,
        backgroundColor: '#F59E0B',

    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});

export default ChatInit