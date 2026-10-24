"use client";
import type { IWorkout, IWourkoutContext } from "@/types";
import { createContext, useState, ReactNode, useContext } from "react";
export const PlanContext = createContext<IWourkoutContext | undefined>(undefined);

const  PlanContextProvider = ({ children }: { children: ReactNode }) =>{
  const [todaysPlan, setTodaysPlan] = useState<IWorkout[]>([]);
  const [saved, setSaved] = useState<IWorkout[]>([]);

  const sharedData= {
    todaysPlan,
    setTodaysPlan,
    saved,
    setSaved,
  };

  return (
    <PlanContext.Provider value={sharedData}>
      {children}
    </PlanContext.Provider>
  );
};

export default PlanContextProvider;

export function useContextProvider(){
  const context = useContext(PlanContext);
  if(!context){
    throw new Error("usePlan plan must be use within a PlanContextProvider ")
  };
  return context;
}