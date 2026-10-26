"use client";
import { useContextProvider } from "@/context/PlanContext";
import type { IWorkout } from "@/types";
import toast from "react-hot-toast";

const DetailsPageButton = ({ workout }: { workout: IWorkout }) => {
  const { todaysPlan, setTodaysPlan, saved, setSaved } = useContextProvider();


  const isPlanFull = todaysPlan.length >= 5;

  const alreadyInPlan = todaysPlan.some((item) => item.id === workout.id);
  const alreadySaved = saved.some((item) => item.id === workout.id);


  const handleAddToPlan = () => {
    if (alreadyInPlan) {
      toast.error("Already in Today's Plan");
      return;
    }
    if (isPlanFull) {
      toast.error("Plan is Full (Max 5 workouts)");
      return;
    }

    setTodaysPlan((prev) => [...prev, workout]);
    toast.success("Added to Today's Plan");
  };


  const handleAddToSaved = () => {
    if (alreadySaved) {
      toast.error("Already in Saved");
      return;
    }

    setSaved((prev) => [...prev, workout]);
    toast.success("Added to Saved");
  };


  return (
    <div className="flex flex-wrap gap-4 mt-6">
      <button
        disabled={alreadyInPlan || isPlanFull}
        onClick={handleAddToPlan}
        className="disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 bg-[#C6F135] text-black font-bold px-6 py-3 rounded-md hover:bg-[#b0db2b] transition text-sm"
      >
        <span>⭐</span>
        {alreadyInPlan ? "Already in Plan" : isPlanFull ? "Plan Full" : "Add to Today's Plan"}
      </button>

      <button
        disabled={alreadySaved}
        onClick={handleAddToSaved}
        className="disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 border border-gray-600 text-gray-300 font-bold px-6 py-3 rounded-md hover:bg-gray-800 transition text-sm"
      >
        <span>🔖</span>
        {alreadySaved ? "Already Saved" : "Save for Later"}
      </button>
    </div>
  );
};

export default DetailsPageButton;







