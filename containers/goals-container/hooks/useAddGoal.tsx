
import { useState } from "react";

export interface GoalItemDTO{
    id: string;
    description: string;
  }
  
export const useAddGoals = () =>{
    
    const [goalsList, setGoalsList] = useState<GoalItemDTO[]>([]);

    const handleAddGols = (textInputValue: string) =>{
        setGoalsList(prevState => ([...prevState, {description: textInputValue, id: Math.random().toString()}]))
    }

    return {
        goalsList,
        handleAddGols,
    }
}