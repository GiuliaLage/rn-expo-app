import { FlatList, View, Text, StyleSheet, Pressable } from "react-native"

export interface GoalListItem {
    id: string;
    description: string;
}

export interface GoalListProps {
    goalsList: GoalListItem[];
    onPressItem: (item: GoalListItem) => void;
}

const ListGoals = (props: GoalListProps) =>{
    const { goalsList, onPressItem } = props;

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
                        <Pressable 
                        //  android_ripple={{ color: '#000000', borderless: true}} 
                         onPress={() => onPressItem(data.item)}
                         style={({pressed}) => pressed && styles.pressable}>
                            <Text style={styles.golItem} > {data.item.description} </Text> 
                        </Pressable>
                    </View>
                )
            }} keyExtractor={item => item.id} showsVerticalScrollIndicator={false}/>
        </View>
    )
}

export default ListGoals;

const styles = StyleSheet.create({
      goalItemContainer: {
        marginBottom: 8,
        borderRadius: 15,
        width: 350,

        //Box shadow
        backgroundColor: '#fff',
        shadowColor: '#fff',
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 2, //so o android
      },
      golItem:{
        paddingHorizontal: 10,
        paddingVertical: 20,
        color: '#3116b6',
        fontWeight: 'bold',
      },
      pressable:{
        opacity: 0.8,
        backgroundColor: '#e9e9e9',
        borderRadius: 15,
      }
})