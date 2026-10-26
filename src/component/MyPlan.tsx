"use client";

import { useContextProvider } from "@/context/PlanContext";
import { Clock, Flame, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

const MyBuild = () => {
  const { todaysPlan, setTodaysPlan, saved, setSaved } = useContextProvider();
  const [activeTab, setActiveTab] = useState<"todaysPlan" | "saved">(
    "todaysPlan",
  );
  const [sortBy, setSortBy] = useState<"Time" | "Calories" | "rating">("Time");
  const [orderedId, setOrderedId] = useState<number[]>([]);

  const currentList = activeTab === "todaysPlan" ? todaysPlan : saved;

  const sortedList = [...currentList].sort((a, b) => {
    if (sortBy === "Time") return a.duration - b.duration;
    if (sortBy === "Calories") return a.caloriesBurned - b.caloriesBurned;
    if (sortBy === "rating") return a.rating - b.rating;
    return 0;
  });

  const totalWorkout = currentList.length;
  const totalTime = currentList.reduce((sum, item) => sum + item.duration, 0);
  const totalCalores = currentList.reduce(
    (sum, item) => sum + item.caloriesBurned,
    0,
  );

  const handleRemove = (id: number) => {
    if (activeTab === "todaysPlan") {
      setTodaysPlan((prev) => prev.filter((item) => item.id !== id));
    } else {
      setSaved((prev) => prev.filter((item) => item.id !== id));
    }
    toast("Removed");
  };


  const handleMarkOrdered = (id: number) => {
    if (!orderedId.includes(id)) {
      setOrderedId((prev) => [...prev, id]);
      toast("Marked as Done");
    }
  };

  const renderTabContent = () => {
    if (sortedList.length === 0) {
      return (
        <div className="bg-[#0a0a0a] w-full border border-gray-800 rounded-xl p-10 flex flex-col items-center justify-center text-center min-h-[300px]">
          <h2 className="text-white font-bold text-xl mb-2 tracking-wider">
            NOTHING HERE YET
          </h2>
          <p className="text-gray-400 text-sm mb-6">
            Browse the library and add a lift to get today moving.
          </p>
          <Link href="/">
            <button className="bg-[#C2F10E] text-black font-bold py-2 px-6 rounded-full hover:bg-[#a8d10c] transition-colors">
              Go to workout
            </button>
          </Link>
        </div>
      );
    }

    return (
      <div className="flex flex-col gap-4">
        {sortedList.map((item) => {
          const isOrdered =
            activeTab === "todaysPlan" && orderedId.includes(item.id);

          return (
            <div
              key={item.id}
              className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-xl border border-gray-800 bg-[#0a0a0a] text-white transition-opacity duration-300 ${
                isOrdered ? "opacity-50" : "opacity-100"
              }`}
            >
              <div className="flex items-center gap-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="w-24 h-24 object-cover rounded-xl"
                />

                <div className="flex flex-col gap-1">
                  <h4 className="font-bold text-2xl text-white uppercase tracking-wider">
                    {item.name}
                  </h4>
                  <p className="text-gray-400 text-lg font-medium">
                    {item.equipment}
                  </p>
                  <div className="flex items-center gap-6 mt-2 text-white font-medium">
                    <div className="flex items-center gap-2">
                      <Clock className="text-[#C2F10E] w-5 h-5" />
                      <span>{item.duration} min</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Flame className="text-[#C2F10E] w-5 h-5 fill-[#C2F10E]" />
                      <span>{item.caloriesBurned} kcal</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="text-[#C2F10E] w-5 h-5" />
                      <span>{item.rating}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 self-end sm:self-center">
                <Link
                  href={`/workout/${item.id}`}
                  className="px-4 py-2 rounded-full border border-gray-700 text-white text-xs sm:text-sm font-semibold hover:bg-gray-800 transition-colors"
                >
                  View Details
                </Link>
                {activeTab === "todaysPlan" && (
                  <button
                    onClick={() => handleMarkOrdered(item.id)}
                    className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-colors ${
                      isOrdered
                        ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                        : "bg-[#C2F10E] text-black hover:bg-[#a8d10c]"
                    }`}
                    disabled={isOrdered}
                  >
                    {isOrdered ? "Completed" : "Mark as Done"}
                  </button>
                )}
                {activeTab === "saved" && (
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="px-4 py-2 rounded-full text-xs sm:text-sm font-bold bg-transparent border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-colors"
                  >
                    Remove
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white pb-10">
      <div className="max-w-6xl mx-auto px-4 pt-8 flex flex-col gap-6">
        <div>
          <h1 className="text-2xl font-bold mb-1">MY PLAN</h1>
          <p className="text-sm text-gray-400">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        <div className="bg-[#111111] border border-gray-800 rounded-xl p-6 flex justify-between items-center">
          <div className="text-center w-1/3">
            <p className="text-gray-400 text-sm mb-1">Exercises</p>
            <p className="text-3xl font-bold">{totalWorkout}</p>
          </div>
          <div className="text-center w-1/3 border-x border-gray-800">
            <p className="text-gray-400 text-sm mb-1">Minutes</p>
            <p className="text-3xl font-bold">{totalTime}</p>
          </div>
          <div className="text-center w-1/3">
            <p className="text-gray-400 text-sm mb-1">Calories</p>
            <p className="text-3xl font-bold">{totalCalores}</p>
          </div>
        </div>

        <div className="flex justify-between items-center mt-2">
          <div className="flex bg-[#111111] p-1 rounded-full border border-gray-800">
            <button
              onClick={() => setActiveTab("todaysPlan")}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                activeTab === "todaysPlan"
                  ? "bg-[#222] text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Today&apos;s Plan
            </button>
            <button
              onClick={() => setActiveTab("saved")}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                activeTab === "saved"
                  ? "bg-[#222] text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Saved
            </button>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span>Sort by</span>
            <select
              onChange={(e) =>
                setSortBy(e.target.value as "Time" | "Calories" | "rating")
              }
              defaultValue="Time"
              className="bg-[#111111] border border-gray-800 text-white rounded-lg px-3 py-1.5 focus:outline-none focus:border-[#C2F10E]"
            >
              <option value="Time">Duration</option>
              <option value="Calories">Calories</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>
        <div className="mt-2">{renderTabContent()}</div>
      </div>
    </div>
  );
};

export default MyBuild;
