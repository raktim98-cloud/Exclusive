import { NavLink } from "react-router";


function PageTop() {
  return (
    <section className="bg-black py-2 ">
      <div className="max-w-[900px] mx-auto flex items-center justify-between gap-4">
        <div className="text-white flex gap-1 items-center justify-center">
          <h5>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </h5>
          <NavLink to={"/allproduct"}><span className="underline">Shop</span></NavLink>
        </div>

        <div className="relative inline-block group">
          <button className="flex items-center px-3 py-2 text-sm bg-white border rounded-md hover:bg-gray-50">
            <span>🌐 English</span>
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke_linecap="round"
                stroke_linejoin="round"
                stroke_width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>

          <div className="absolute right-0 hidden w-40 mt-1 bg-white border rounded-md shadow-lg group-hover:block z-10">
            <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
              🇬🇧 English
            </a>
            <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
              🇧🇩 Bangla
            </a>
            <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
              🇫🇷 Français
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PageTop;
