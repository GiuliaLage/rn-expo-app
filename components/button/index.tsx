import { Pressable, View, Text, StyleSheet } from "react-native"

export interface ButtonProps {
  title: string;
  onPress: () => void;
}

const Button = (props: ButtonProps) => {
    const {title, onPress} = props;
    return (
        <Pressable style={({pressed}) => pressed && styles.pressable} onPress={onPress}>
            <View style={styles.buttonContainer}>
                <Text style={styles.title}> {title} </Text>
            </View>
        </Pressable>
 )
}

export default Button;


const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#fff',
        padding: 12,
        borderRadius: 10,
        alignItems: 'center'
    },
    title:{
        color: '#3116b6',
        fontWeight: 'bold',
    },
    pressable:{
        opacity: 0.8,
        backgroundColor: '#e9e9e9',
        borderRadius: 10,
      }
})