import type React from "react";

export interface IWorkout {
  id: number;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  difficulty: string;
  duration: number;
  caloriesBurned: number;
  sets: number;
  reps: string;
  rating: number;
  description: string;
  instructions: string[];
}
export interface IWourkoutContext {
  todaysPlan :IWorkout[];
  saved :IWorkout[];
  setTodaysPlan:React.Dispatch<React.SetStateAction<IWorkout[]>>;
   setSaved:React.Dispatch<React.SetStateAction<IWorkout[]>>;

}
export interface PlanWorkout extends IWorkout {
  isDone: boolean;
}
