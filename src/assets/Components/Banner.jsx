import { FaGreaterThan } from "react-icons/fa6";
import SliderBg_1 from "../Image/Slider_image_1.jpg";
import SliderBg_2 from "../Image/Slider_image_1.jpg";
import SliderBg_3 from "../Image/Slider_image_1.jpg";
import Slider_icon from "../Image/Slider_logo.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import Slider from "react-slick";

const menuData = [
  {
    id: 1,
    text: "Woman’s Fashion",
    icon: true,
  },
  {
    id: 2,
    text: "Men’s Fashion",
    icon: true,
  },
  {
    id: 3,
    text: "Electronics",
    icon: null,
  },
  {
    id: 4,
    text: "Home & Lifestyle",
    icon: null,
  },
  {
    id: 5,
    text: "Medicine",
    icon: null,
  },
  {
    id: 6,
    text: "Sports & Outdoor",
    icon: null,
  },
  {
    id: 7,
    text: "Baby’s & Toys",
    icon: null,
  },
  {
    id: 8,
    text: "Groceries &  ",
    icon: null,
  },
  {
    id: 9,
    text: "Health & Beauty",
    icon: null,
  },
];
const sliderData = [
  {
    id: 1,
    logo: Slider_icon,
    brand: "iPhone 14 Series",
    title: "Up to 10% off Voucher",
    bgimage: SliderBg_1,
  },
  {
    id: 2,
    logo: Slider_icon,
    brand: "iPhone 14 Series",
    title: "Up to 10% off Voucher",
    bgimage: SliderBg_2,
  },
  {
    id: 3,
    logo: Slider_icon,
    brand: "iPhone 14 Series",
    title: "Up to 10% off Voucher",
    bgimage: SliderBg_3,
  },
];

function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-[217px_1fr]">
          <ul className="flex flex-col gap-4 py-10 pr-4">
            {menuData?.map((item) => (
              <MenuItem key={item.id} text={item.text} icon={item.icon} />
            ))}
          </ul>
          {/* slider Part */}
          <div className="h-[344px] border-l border-l-[rgba(0,0,0,0.30)] pl-[40px]">
            <div className="w-[892px] ">
              <Slider {...settings}>
              {sliderData?.map((slideData) => (
              <SliderMenu key={slideData.id} slideData={slideData} />
            ))}
              </Slider>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;

const MenuItem = ({ text, icon = false }) => (
  <li>
    <a
      className="flex items-center justify-between gap-2 text-[16px] leading-[24px]  "
      href="#"
    >
      {text}
      {icon ? <FaGreaterThan /> : null}
    </a>
  </li>
);

const SliderMenu = ({ slideData }) => {
  return (
    <div
      className="grid grid-cols-[350px_1fr] py-10"
      style={{ backgroundImage: `url(${slideData.bgimage})` }}
    >
      <div className="pl-[60px] flex flex-col items-start justify-center gap-[34px] text-white">
        <div className="flex items-center justify-center gap-6">
          <div className="w-10 h-[49px]">
            <img className="w-full h-full" src={slideData.logo} alt="logo" />
          </div>
          <h5 className="text-[16px] leading-[24px]">{slideData.brand}</h5>
        </div>
        <h3 className="text-[48px] leading-[60px] font-semibold font-display tracking-[4%]">
          {slideData.title}
        </h3>
        <div className="flex justify-center items-center gap-2">
          <button className="text-[16px] leading-[24px] font-medium">
            Shop Now
          </button>
          <span>
            <FaLongArrowAltRight />
          </span>
        </div>
      </div>
    </div>
  );
};
