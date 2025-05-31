import { LiaFacebookF } from "react-icons/lia";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-black py-12 px-4 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Newsletter Section */}
        <div className="mb-12">
          <h1 className="text-2xl font-bold mb-2">Exclusive</h1>
          <h2 className="text-xl font-semibold mb-4">Subscribe</h2>
          <p className="mb-4">Get 10% off your first order</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-4 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-1 focus:ring-gray-400 flex-grow"
            />
            <button className="bg-black text-white px-6 py-2 rounded-r hover:bg-gray-800 transition">
              Subscribe
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Support Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <address className="not-italic">
              <p>Ill Bijoy sorani, Dholta, DH 1515, Bangladesh.</p>
              <p className="my-2">exclusive@gmail.com</p>
              <p>+88015-88888-9999</p>
            </address>
          </div>

          {/* Account Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Account</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-600">My Account</a></li>
              <li><a href="#" className="hover:text-gray-600">Login / Register</a></li>
              <li><a href="#" className="hover:text-gray-600">Cart</a></li>
              <li><a href="#" className="hover:text-gray-600">Wishlist</a></li>
              <li><a href="#" className="hover:text-gray-600">Shop</a></li>
            </ul>
          </div>

          {/* Quick Link Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Link</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-600">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-600">Terms Of Use</a></li>
              <li><a href="#" className="hover:text-gray-600">FAQ</a></li>
              <li><a href="#" className="hover:text-gray-600">Contact</a></li>
            </ul>
          </div>
          {/* appp */}
          <div className="flex flex-col items-start" >
              <h3 className="text-lg font-semibold mb-2">Download App</h3>
              <p className="text-sm mb-4">Save $3 with App New User Only</p>
              <div className="flex gap-1.5 items-center justify-start">
                <div className="size-[80px]">
                    <img className="size-full object-cover" src="/Qr Code.png" alt="qr" />
                </div>
                <div className="flex flex-col gap-1">
                    <div className="w-[110px] h-[40px]">
                        <img className="w-full h-full " src="/playstore.png" alt="playstore" />
                    </div>
                    <div className="w-[110px] h-[40px]">
                        <img className="w-full h-full " src="/appstore.png" alt="appstore" />
                    </div>
                </div>
              </div>
              {/* icons */}
              <div className="flex items-start justify-center gap-6 py-[24px]">
                    <a className="text-[24px] hover:text-blue-600 text-white " href="#"><LiaFacebookF/></a>
                    <a className="text-[24px] hover:text-blue-600 text-white " href="#"><FaTwitter/></a>
                    <a className="text-[24px] hover:text-blue-600 text-white " href="#"><FaInstagram/></a>
                    <a className="text-[24px] hover:text-blue-600 text-white " href="#"><FaLinkedin/></a>
              </div>
            </div>
        </div>

        {/* Download App Section */}
        <div className="border-t border-gray-300 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm">&copy; {new Date().getFullYear()} Exclusive. All rights reserved</p>
            </div>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;