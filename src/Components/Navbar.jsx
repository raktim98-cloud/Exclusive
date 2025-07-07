import { NavLink } from "react-router";
import { IoIosSearch } from "react-icons/io";
import { GiSelfLove } from "react-icons/gi";
import { IoCartOutline } from "react-icons/io5";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { FaRegUser } from "react-icons/fa6";
import { useUser } from "../context/UserContext";

const menuData = [
  {
    id: 1,
    text: "Home",
    link: "/",
  },
  {
    id: 2,
    text: "About",
    link: "/about",
  },
  {
    id: 3,
    text: "Contact",
    link: "/contact",
  },
  {
    id: 4,
    text: "Sing Up",
    link: "/singup",
  },
];

const menuItems = [
  {
    id: 1,
    dropIcon: <FaRegUser />,
    dis: "Manage My Account",
  },
  {
    id: 2,
    dropIcon: <FaRegUser />,
    dis: "My Order",
  },
  {
    id: 3,
    dropIcon: <FaRegUser />,
    dis: "My Order",
  },
  {
    id: 4,
    dropIcon: <FaRegUser />,
    dis: "My Order",
  },
  {
    id: 5,
    dropIcon: <FaRegUser />,
    dis: "My Order",
  },
];
const ActiveStyle = ({ isActive }) => {
  return isActive
    ? "text-[16px] leading-[24px] text-red-500 relative group"
    : "text-[16px] leading-[24px] text-black hover:text-blue-300 relative group";
};
function Navbar() {
  const { wishCount } = useContext(CartContext);
  const {currentUser,handleSignOut} = useUser();
 
  
  
  

  return (
    <section className="pt-[40px] pb-4 border-b border-b-[rgba(0,0,0,0.40)]">
      <div className="container">
        <div className="grid grid-cols-[200px_1fr_auto] justify-between items-center">
          {/* logo */}
          <div className="w-[118px] h-[24px]">
            <img className="w-full h-full" src="/Logo.png" alt="logo" />
          </div>
          <ul className="flex items-center justify-center gap-[48px]">
            {menuData?.map((item) => (
              <NavItem key={item.id} text={item.text} link={item.link} />
            ))}
          </ul>
          <div className="flex items-center justify-center gap-6">
            {/* search bar */}
            <div className="max-w-md mx-auto">
              <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-[4px] bg-[#F5F5F5] overflow-hidden pl-5 pr-2">
                <input
                  className="h-full w-full outline-none text-[12px] leading-[18px] text-gray-700 pr-2"
                  type="text"
                  id="search"
                  placeholder="What are you looking for?"
                />
                <div className="grid place-items-center h-full w-12 text-gray-300">
                  <a className="text-black text-2xl" href="#">
                    <IoIosSearch />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center gap-4">
              <div className="flex justify-between items-center gap-4">
                <a className="text-[20px] relative" href="#">
                  <GiSelfLove />
                  <span className="absolute -top-4 bg-black text-white text-sm">
                    {wishCount}
                  </span>
                </a>
                <a className="text-[20px]" href="#">
                  <IoCartOutline />
                </a>
              </div>
              
                 {currentUser ? (
                <div className="group relative">
                  <button className="bg-red-600 rounded-full p-2 hover:bg-red-700 transition-colors duration-200"> 
                    <FaRegUser />
                  </button>
                  <div className="absolute hidden group-hover:block -right-2 mt-2 origin-top-right rounded-md bg-gray-700 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50 transition-all duration-300 transform opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 after:content-[''] after:absolute after:left-0 after:top-0 after:-translate-y-3 after:w-full after:h-3 after:bg-transparent">
                    <div className="px-4 py-3">
                      <div className="flex flex-col gap-4">
                        {menuItems?.map((drop) => (
                          <DropList
                            key={drop.id}
                            dropIcon={drop.dropIcon}
                            dis={drop.dis}
                          />
                        ))}
                        <button onClick={handleSignOut} className="px-2 py-1 bg-blue-600 text-white">Logout</button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <NavLink 
                  to="/login" 
                  className="text-[16px] leading-[24px] text-black hover:text-blue-300"
                >
                  Login
                </NavLink>
              )}
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;

const NavItem = ({ text, link }) => (
  <li>
    <NavLink className={ActiveStyle} to={link}>
      {text}
      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-300 origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 group-[.active]:scale-x-100" />
    </NavLink>
  </li>
);

//  {[...Array(6)].map((_, i) => (
//           <div key={i} className="flex items-center gap-4 hover:bg-gray-700 px-2 py-1 rounded transition-colors">
//             <a className="text-white text-opacity-90 hover:text-opacity-100" href="#">
//               <FaRegUser className="text-lg" />
//             </a>
//             <h5 className="text-sm text-white">Manage My Account</h5>
//           </div>
//         ))}

const DropList = ({ dropIcon, dis }) => {
  return (
    <div className="flex items-center gap-4 hover:bg-gray-700 px-2 py-1 rounded transition-colors text-nowrap">
      <a
        className="text-white  text-opacity-90 hover:text-opacity-100"
        href="#"
      >
        {dropIcon}
      </a>
      <h5 className="text-[14px] leading-[21px] cursor-pointer  text-white">
        {dis}
      </h5>
    </div>
  );
};
