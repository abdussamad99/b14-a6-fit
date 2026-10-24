import { getSingleworkout } from "@/utils/api";
import Image from "next/image";
import Link from "next/link";

const Detailspage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const workout = await getSingleworkout(id);
  const stats = [
    { label: "EQUIPMENT", value: workout.equipment },
    { label: "DIFFICULTY", value: workout.difficulty },
    { label: "SETS", value: workout.sets },
    { label: "REPS", value: workout.reps },
    { label: "DURATION", value: `${workout.duration} min` },
    { label: "CALORIES", value: `${workout.caloriesBurned} kcal` },
    { label: "RATING", value: workout.rating },
  ];

  return (
    <div className="bg-[#0A0A0A] min-h-screen text-white p-6 md:p-12 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          <div className="relative w-full h-[400px] lg:h-[600px] rounded-2xl overflow-hidden bg-[#111]">
            <Image
              src={workout.image}
              alt={workout.name}
              fill
              className="object-cover object-center"
              priority
            />
          </div>


          <div className="flex flex-col gap-6 pt-4">

            <div>
              <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-wide">
                {workout.name}
              </h1>
              <p className="text-gray-400 mt-2 text-sm leading-relaxed">
                {workout.description}
              </p>
            </div>


            <div className="flex flex-wrap gap-2">
              {workout.muscleGroups.map((mg: string) => (
                <span
                  key={mg}
                  className="text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 bg-[#C6F135] text-black rounded-sm"
                >
                  {mg}
                </span>
              ))}
            </div>


            <div className="mt-4 border border-[#222] rounded-xl overflow-hidden bg-[#111]">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`flex justify-between px-4 py-3 text-sm ${index !== stats.length - 1 ? "border-b border-[#222]" : ""}`}
                >
                  <span className="text-gray-500 font-semibold uppercase tracking-wider text-xs">
                    {stat.label}
                  </span>
                  <span className="text-gray-200 font-medium">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <h2 className="font-bold text-lg mb-3">INSTRUCTIONS</h2>
              <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-400">
                {workout.instructions.map(
                  (instruction: string, index: number) => (
                    <li key={index} className="pl-1 leading-relaxed">
                      {instruction}
                    </li>
                  ),
                )}
              </ol>
            </div>
            <div className="flex flex-wrap gap-4 mt-6">
              <button className="flex items-center gap-2 bg-[#C6F135] text-black font-bold px-6 py-3 rounded-md hover:bg-[#b0db2b] transition text-sm">
                <span>⭐</span>Add to today&apos;s plan
              </button>
              <button className="flex items-center gap-2 border border-gray-600 text-gray-300 font-bold px-6 py-3 rounded-md hover:bg-gray-800 transition text-sm">
                <span>🔖</span> Save for later
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detailspage;
