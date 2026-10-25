import { useContextProvider } from "@/context/PlanContext";
import Link from "next/link";


const NavbarButtons = () => {
  const { todaysPlan, saved } = useContextProvider();
  return (
    <div>
      <Link className="btn" href={"/myplan"}>
        {" "}
        <button>Build </button>
        <span>({todaysPlan.length})</span>
      </Link>
      <Link className="btn" href={"/workout"}>
        {" "}
        <button>Wish ({saved.length})</button>{" "}
      </Link>
    </div>
  );
};

export default NavbarButtons;