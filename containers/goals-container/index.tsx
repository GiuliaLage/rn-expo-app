import { StyleSheet, View } from "react-native";
import AddGoal from "./components/addGoal";
import ListGoals from "./components/listGoals";
import { useAddGoals } from "./hooks/useAddGoal";

const GoalsContainer = () =>{
    const { handleAddGols, goalsList } = useAddGoals();
    
    return(  
        <View style={styles.container}>
                 <View style={styles.formContainer}>
                   <AddGoal addGoal={handleAddGols}/>
                 </View>
                <View style={styles.listContainer}>
                  <ListGoals goalsList={goalsList}/>
                </View>
        </View>
    );
}
export default GoalsContainer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 50,
        paddingHorizontal: 16,
      },
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
      listContainer: {
        flex: 5,
        marginTop: 20,
      },
})