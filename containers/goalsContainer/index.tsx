import { StyleSheet, View } from "react-native";
import Button from "../../components/button";
import AddGoal from "./components/addGoal";
import ListGoals from "./components/listGoals";
import { useGoals } from "./hooks/useGoals";
import { StatusBar } from "expo-status-bar";

const GoalsContainer = () =>{
    const { handleGoalChange, handleAddGols, goalsList, handleDeleteGoal, modalVisibility,
    handleOpenModal, handleCloseModal, textInputValue} = useGoals();
    
    return(
       <> 
       {/* react-native status bar component:
        <StatusBar barStyle='light-content' />  
       */}
        <StatusBar style="light"/>
        <View style={styles.container}>
          
           <AddGoal modalVisibility={modalVisibility} onAddGoalCancel={handleCloseModal} onGoalChange={handleGoalChange} onAddGoal={handleAddGols} textInputValue={textInputValue}/> 
          <View style={styles.buttonContainer}>
            <Button title="Adicionar Objetivo" onPress={handleOpenModal} />
          </View>
          <View style={styles.listContainer}>
              <ListGoals onPressItem={handleDeleteGoal} goalsList={goalsList}/>
          </View>
        </View>
        </>  
    );
}
export default GoalsContainer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60,
        paddingHorizontal: 16,
        alignItems: 'center',
      },
      buttonContainer:{
        flex: 1,
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderColor: '#ccc',
        width: 300,
      },
      listContainer: {
        flex: 6,
        marginTop: 20,
      }
})