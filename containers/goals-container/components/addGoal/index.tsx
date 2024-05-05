import { useState } from "react";
import { View, TextInput, Button , StyleSheet} from "react-native";

interface AddGoalProps {
    addGoal: (goal: string) => void;
}

const AddGoal = (props: AddGoalProps) =>{

    const { addGoal } = props;
    const [textInputValue, setTextInputValue ] = useState<string>('');

    const handleGoalChange = (goal: string) =>{
       setTextInputValue(goal)
    }

    const handleAddGoal = () =>{
        addGoal(textInputValue);
        setTextInputValue('');
    }

 return(
    <>
     <TextInput value={textInputValue} style={styles.textInput} placeholder='Seu objetivo' onChangeText={handleGoalChange}/>
     <Button title='Adicionar Objetivo' onPress={handleAddGoal}/>
    </>
 )
} 

export default AddGoal;

const styles = StyleSheet.create({
    formContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
      },
      textInput:{
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '55%',
        padding: 8,
      },
})