import { Link, NavLink } from "react-router-dom";
import userDefaultPic from "../../../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => console.log("user logged out"))
      .catch((error) => console.error(error));
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/">About</NavLink>
      </li>
      <li>
        <NavLink to="/">Career</NavLink>
      </li>
    </>
  );
  
  return (
    <div className="navbar mt-5">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-y-2 text-sec-text text-sm font-medium"
          >
            {links}
          </ul>
        </div>
        {/* <a className="normal-case text-pri-text text-3xl font-bold">CareerHub</a> */}
        {/* <img className="w-10/12 md:w-auto" src="https://i.ibb.co/D8fgTpg/Career-Hub.png" alt="" /> */}
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal space-x-5 text-sec-text text-sm font-medium">
          {links}
        </ul>
      </div>
      <div className="navbar-end space-x-3">
        <img className="w-8 md:w-10" src={userDefaultPic} alt="" />
        {
            user ?
            <Link onClick={handleLogOut}
          className="bg-pri-text text-white text-sm font-medium md:text-lg md:font-semibold px-5 py-1 rounded"
        >
          Logout
        </Link>
        :
        <Link
          to="/login"
          className="bg-pri-text text-white text-sm font-medium md:text-lg md:font-semibold px-5 py-1 rounded"
        >
          Login
        </Link>
        }
        {/* <Link
          to="/login"
          className="bg-pri-text text-white text-sm font-medium md:text-lg md:font-semibold px-5 py-1 rounded"
        >
          Login
        </Link> */}
      </div>
    </div>
  );
};

export default Navbar;
