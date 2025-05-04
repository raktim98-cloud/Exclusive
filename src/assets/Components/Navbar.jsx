import { NavLink } from "react-router";
import { IoIosSearch } from "react-icons/io";
import { GiSelfLove } from "react-icons/gi";
import { IoCartOutline } from "react-icons/io5";

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
    id: 1,
    text: "Sing Up",
    link: "/singup",
  },
];
const ActiveStyle = ({ isActive }) => {
    return isActive 
      ? "text-[16px] leading-[24px] text-red-500 relative group" 
      : "text-[16px] leading-[24px] text-black hover:text-blue-300 relative group";
  };
function Navbar() {
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
            <div class="max-w-md mx-auto">
              <div class="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-[4px] bg-[#F5F5F5] overflow-hidden pl-5 pr-2">
                <input
                  class="h-full w-full outline-none text-[12px] leading-[18px] text-gray-700 pr-2"
                  type="text"
                  id="search"
                  placeholder="What are you looking for?"
                />
                <div class="grid place-items-center h-full w-12 text-gray-300">
                  <a className="text-black text-2xl" href="#"><IoIosSearch/></a>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center gap-4">
                <a className="text-[20px]" href="#"><GiSelfLove/></a>
                <a className="text-[20px]" href="#"><IoCartOutline/></a>

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
    <NavLink className={ActiveStyle} to={link}>{text}
    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-300 origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 group-[.active]:scale-x-100" />
    </NavLink>
  </li>
);
