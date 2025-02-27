
import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (
        <div className="navbar px-20  backdrop-blur-xl bg-white/30  z-50 fixed">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
       
       {/* navlink gula k active kore disi ekhon bojaha jabe home achi naki onno kono page e achi */}
       <NavLink to="/"  className = {({isActive}) => `font-bold ${isActive ? 'text-warning' : 'hover: text-black'}`}>Home</NavLink>
      <NavLink className={({isActive}) => `font-bold ${isActive ? 'text-warning' : 'hover: text-black'}`} to="/coffees">Coffees</NavLink>
      <NavLink className={({isActive}) => `font-bold ${isActive ? 'text-warning' : 'hover: text-black'}`} to="/dashboard">Dashboard</NavLink>
         
      </ul>
    </div>
    <NavLink   className="btn btn-ghost text-xl"  to="/">COFFEE BOOK</NavLink>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-9">
     
      <NavLink className={({isActive}) => `font-bold ${isActive ? 'text-warning' : 'text-black'}`} to="/">Home</NavLink>
      <NavLink className={({isActive}) => `font-bold ${isActive ? 'text-warning' : 'hover: text-black'}`} to="/coffees">Coffees</NavLink>
      <NavLink className={({isActive}) => `font-bold ${isActive ? 'text-warning' : 'hover: text-black'}`} to="/dashboard">Dashboard</NavLink>
         
       
      
    
    </ul>
  </div>
  
</div>
    );
};

export default Navbar;