
import type { IWorkout } from "@/types";
import Image from "next/image";
import Link from "next/link";

const WorkoutCard = ({ workout }: { workout: IWorkout }) => {
  return (
    <Link href={`/workout/${workout.id}`} className="block group">
      <div className="bg-[#111111] border border-[#222222] rounded-xl overflow-hidden hover:border-gray-500 transition-all duration-300 hover:-translate-y-1">
        <div className="relative w-full h-[300px] overflow-hidden bg-[#1a1a1a]">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 from-[#111111]/40 to-transparent pointer-events-none" />
        </div>

        {/* Content Container */}
        <div className="p-5 flex flex-col gap-2">

          {/* Muscle Groups / Tags */}
          <div className="flex flex-wrap gap-2 mb-1">
            {workout.muscleGroups.map((mg) => (
              <span
                key={mg}
                className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-[#C6F135] text-black rounded-sm"
              >
                {mg}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="text-white font-bold text-[17px] uppercase tracking-wide leading-tight">
            {workout.name}
          </h3>

          {/* Equipment */}
          <p className="text-gray-400 text-xs">
            {workout.equipment}
          </p>

          {/* Stats Row (Duration, Calories, Rating) */}
          <div className="flex items-center gap-4 text-[11px] text-gray-500 mt-2 font-medium">
            <div className="flex items-center gap-1.5">
              <span className="text-gray-400">⏱</span>
              <span>{workout.duration} min</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-orange-500">🔥</span>
              <span>{workout.caloriesBurned} kcal</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-yellow-500">★</span>
              <span>{workout.rating}</span>
            </div>
          </div>

        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;




