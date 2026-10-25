import NavbarButtons from "@/component/Navbarbuttons";
import NavLinks from "@/component/NavLinks";
import Link from "next/link";

const Navbar = () => {
  const navlink = (
    <>
     <li>
      <NavLinks href={"/"}>Workouts</NavLinks>
     </li>
     <li>
      <NavLinks href={"/myplan"}>My-Plan</NavLinks>
     </li>

    </>
  )
  return (

    <div className="navbar bg-[#1a2312] shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 text-[#9ca3af] rounded-box z-1 mt-3 w-52 p-2 shadow">
            {navlink}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl text-[#ffffff]">FITLOG</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-[#9ca3af] px-1">
          {navlink}
        </ul>
      </div>
      <div className="navbar-end gap-2">
        <NavbarButtons/>
        {/* <Link className="btn" href={"/myplan"}><button>Plan(0)</button></Link>
        <Link className="btn" href={"/mybuild"}><button>Saved(0)</button></Link> */}
        {/* <a className="text-[#ffffff] cursor-pointer">Button</a> */}
      </div>
    </div>
  );
};

export default Navbar;