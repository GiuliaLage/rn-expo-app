import { View, TextInput, StyleSheet, Modal, Image} from "react-native";
import Button from "../../../../components/button";

interface AddGoalProps {
    onAddGoal: () => void;
    onAddGoalCancel: () => void;
    onGoalChange: (goal: string) => void;
    textInputValue: string;
    modalVisibility: boolean,
}

const AddGoal = (props: AddGoalProps) =>{

const { onAddGoal, onAddGoalCancel, modalVisibility, onGoalChange, textInputValue} = props;
   
 return(
    <Modal animationType='slide' visible={modalVisibility}>
        <View style={styles.modalContainer}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../../../../assets/images/goal.png')}/>
            </View>
            <View style={styles.inputContainer}>
                <TextInput value={textInputValue} style={styles.textInput} onChangeText={onGoalChange}/>
            </View>
            <View style={styles.actionsContainer}>
                <View style={styles.buttons}>
                    <Button title='Adicionar Objetivo' onPress={onAddGoal}/>
                </View>
                <View style={styles.buttons}>
                    <Button title='Cancelar' onPress={onAddGoalCancel}/>
                </View>
            </View>
        </View>
    </Modal>
 )
} 

export default AddGoal;

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: '#3116b6',
        justifyContent: 'center',
    },
    imageContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    image: {
        height: 100,
        width: 100,
    },
    inputContainer: {
        alignItems: 'center',
     },
     textInput:{
        width: '90%',
        padding: 16,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#cccccc',
        backgroundColor: '#fff',
        color: '#3116b6',
      },
      actionsContainer:{
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'center',
        gap: 20,
      },
      buttons: {
        width: 170,
      }
})