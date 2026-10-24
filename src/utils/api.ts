import type { IWorkout } from "@/types";


export const getAllworkout = async()=> {
   const res =await fetch("https://api.abcz.workers.dev/api/fitlog")
   const data = await res.json();
   return data
};
export const getSingleworkout = async(id: string) =>{
   const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
   if (!res.ok) {
       throw new Error("Workout not found");
   }
   const data= await res.json();
  const workout =data.find((d:IWorkout)=> d.id===Number(id));
  if(!workout){
   throw new Error("workout not found")
  }
  return workout;

};
