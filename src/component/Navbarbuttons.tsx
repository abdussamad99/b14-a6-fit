import { useContextProvider } from "@/context/PlanContext";
import Link from "next/link";


const NavbarButtons = () => {
  const { todaysPlan, saved } = useContextProvider();
  return (
    <div className="flex gap-4 text-white">
      <Link className="btn" href="/myplan">
        Plan<span className="border border-amber-50 rounded-2xl">{todaysPlan.length}</span>
      </Link>
      <Link className="btn" href={"/myplan"}>
        Saved ({saved.length})
      </Link>
    </div>
  );
};

export default NavbarButtons;