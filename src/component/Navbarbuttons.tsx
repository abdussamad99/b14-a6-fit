import { useContextProvider } from "@/context/PlanContext";
import Link from "next/link";


const NavbarButtons = () => {
  const { todaysPlan, saved } = useContextProvider();
  return (
    <div className="flex gap-2">
      <Link className="btn" href="/myplan">
        Plan<span>({todaysPlan.length})</span>
      </Link>
      <Link className="btn" href={"/workout"}>
        Saved ({saved.length})
      </Link>
    </div>
  );
};

export default NavbarButtons;