
import WorkoutCard from "@/component/WorkoutCard";
import type { IWorkout } from "@/types";

const LibrarySection = ({ workouts }: { workouts: IWorkout[] }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Section Header */}
      <div className="mb-6">
        <h1 className="text-white text-2xl font-bold tracking-wide uppercase">
          The Library
        </h1>
        <p className="text-gray-400 text-sm mt-1">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      {/* Grid Layout - 3 Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workouts.map((workout) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </div>
    </div>
  );
};

export default LibrarySection;