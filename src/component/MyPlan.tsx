"use client";

import { useContextProvider } from "@/context/PlanContext";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";
// saved=wishlist
const MyBuild = () => {
    const { todaysPlan,
    setTodaysPlan,
    saved,
    setSaved,} =
        useContextProvider();
    const [activeTab, setActiveTab] = useState<"todaysPlan" | "saved">("todaysPlan");
    const [sortBy, setSortBy] = useState<"Time" | "Calories" | "rating">(
        "Time",
    );
    const [orderedId, setOrderedId] = useState<number[]>([]);
    //   console.log(sortBy);
    //   console.log(activeTab);
    const currentList = activeTab === "todaysPlan" ? todaysPlan : saved;

    const sortedList = [...currentList].sort((a, b) => {
        if (sortBy === "Time") return a.duration - b.duration;
        if (sortBy === "Calories") return a.caloriesBurned - b.caloriesBurned;
        if (sortBy === "rating") return a.rating - b.rating;

        return 0;
    });
    const totalWorkout = currentList.length;
    const totalTime = currentList.reduce(
        (sum, item) => sum + item.duration,0,);
    const totalCalores = currentList.reduce((sum, item) => sum + item.caloriesBurned, 0);

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
            toast("Ordered");
        }
    };

    const renderTabContent = () => {
        if (sortedList.length === 0) {
            return (
                <>
                    <h2>Nothing here</h2>
                </>
            );
        }
        return (
            <div>
                {sortedList.map((item) => {
                    const isOrdered =
                        activeTab === "todaysPlan" && orderedId.includes(item.id);

                    return (
                        <div
                            key={item.id}
                            className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-box border border-base-300 bg-base-200 transition-opacity duration-300 ${isOrdered ? "opacity-50" : "opacity-100"
                                }`}
                        >
                            <div className="flex items-center gap-4">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    className="w-16 h-16 object-cover rounded-lg"
                                />

                                <div>
                                    <h4 className="font-bold text-lg">{item.name}</h4>

                                    <p className="text-sm opacity-70">
                                        Price: ${item.difficulty} • Delivery: {item.duration} hrs •
                                        Rating: ⭐ {item.rating}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 self-end sm:self-center">
                                {activeTab === "todaysPlan" && (
                                    <button
                                        onClick={() => handleMarkOrdered(item.id)}
                                        className="btn btn-success btn-sm"
                                    >
                                        {isOrdered ? "Ordered" : "Order"}
                                    </button>
                                )}

                                <button
                                    onClick={() => handleRemove(item.id)}
                                    className="btn btn-error btn-outline btn-sm"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    };

    return (
        <div className="container flex flex-col mx-auto gap-2">
            <div className="stats shadow">
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block h-8 w-8 stroke-current"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                        </svg>
                    </div>
                    <div className="stat-title">Downloads</div>
                    <div className="stat-value">{totalWorkout}</div>
                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block h-8 w-8 stroke-current"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                            ></path>
                        </svg>
                    </div>
                    <div className="stat-title">New Users</div>
                    <div className="stat-value">{totalTime}</div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block h-8 w-8 stroke-current"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                            ></path>
                        </svg>
                    </div>
                    <div className="stat-title">New Registers</div>
                    <div className="stat-value">{totalCalores}</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>
            </div>

            {/* name of each tab group should be unique */}
            <div className="tabs tabs-box">
                <input
                    type="radio"
                    name="my_tabs_6"
                    className="tab"
                    aria-label="todaysPlan"
                    checked={activeTab === "todaysPlan"}
                    onChange={() => setActiveTab("todaysPlan")}
                />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    {renderTabContent()}
                </div>

                <input
                    type="radio"
                    name="my_tabs_6"
                    className="tab"
                    aria-label="saved"
                    onChange={() => setActiveTab("saved")}
                />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    {renderTabContent()}
                </div>

                <select
                    onChange={(e) =>
                        setSortBy(e.target.value as "Time" | "Calories" | "rating")
                    }
                    defaultValue="Sort"
                    className="select ms-auto"
                >
                    <option disabled={true}>Sort By</option>
                    <option value="Time">Time</option>
                    <option value="Calories">Calories</option>
                    <option value="rating">Rating</option>
                </select>
            </div>
        </div>
    );
};

export default MyBuild;
