
import { useState } from "react";

export interface GoalItem{
    id: string;
    description: string;
  }
  
export const useGoals = () =>{
    
    const [goalsList, setGoalsList] = useState<GoalItem[]>([]);
    const [modalVisibility, setModalVisibility] = useState(false);
    const [textInputValue, setTextInputValue ] = useState<string>('');
    
    const handleGoalChange = (goal: string) =>{
        setTextInputValue(goal)
     }
 
    const handleOpenModal = () => {
        setModalVisibility(true);
    }

    const handleCloseModal = () => {
        setModalVisibility(false);
    }

    const handleAddGols = () =>{
        setGoalsList(prevState => ([...prevState, {description: textInputValue, id: Math.random().toString()}]))
        setTextInputValue('');
        handleCloseModal();
    }

    const handleDeleteGoal = (item: GoalItem) =>{
        setGoalsList((prevGoalList: GoalItem[]) => {
            return prevGoalList.filter((goal: GoalItem) => goal.id !== item.id);
        })
    }

    return {
        goalsList,
        modalVisibility,
        textInputValue,
        handleGoalChange,
        handleAddGols,
        handleDeleteGoal,
        handleOpenModal,
        handleCloseModal,
    }
}