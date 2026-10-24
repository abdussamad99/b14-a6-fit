"use client";
import Navbar from "@/component/Navbar";
import PlanContextProvider from "@/context/PlanContext";
import type { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

const ClintLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <PlanContextProvider>
        <Navbar />
        {children}
        <Toaster />
      </PlanContextProvider>
    </div>
  );
};

export default ClintLayout;
