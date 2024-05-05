import { FlatList, View, Text, StyleSheet } from "react-native"

export interface GoalListItem {
    id: string;
    description: string;
}

export interface GoalListProps {
    goalsList: GoalListItem[];
}

const ListGoals = (props: GoalListProps) =>{
    const { goalsList } = props;
    
    return(
        
        <View>
             {/* <ScrollView showsVerticalScrollIndicator={false}>
                {goalsList.map((goal: string, index: number ) =>
                <View key={index} style={styles.goalItemContainer}>
                    <Text style={styles.golItem} > {goal} </Text> 
                </View>
                )}
            </ScrollView> */}
            <FlatList data={goalsList} renderItem={(data) =>{
            return (
                <View style={styles.goalItemContainer}>
                <Text style={styles.golItem} > {data.item.description} </Text> 
            </View>
            )
            }} keyExtractor={item => item.id}/>
        </View>
    )
}

export default ListGoals;

const styles = StyleSheet.create({
      goalItemContainer: {
        marginBottom: 8,
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 15,
       
        //Box shadow
        backgroundColor: '#69187b',
        shadowColor: '#171717',
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 2, //so o android
      },
      golItem:{
        color: '#fff'
      }
})