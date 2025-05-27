import Chair_I from "../../assets/Image/Product_image/chair_image.png";
import Keyboard_I from "../../assets/Image/Product_image/Keyboard_image.png";
import Monitor_I from "../../assets/Image/Product_image/Monitor_image.png";
import Playstation_I from "../../assets/Image/Product_image/Playstation_image.png";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsEye } from "react-icons/bs";

const productData = [
  {
    id: 1,
    image: Playstation_I,
    title: "HAVIT HV-G92 Gamepad",
    price: 120,
    oldPrice: 160,
    discount: 40,
    rating: 4,
    reviews: 88,
    hear_icon:<IoMdHeartEmpty />,
    eye_icon:<BsEye />
  },
  {
    id: 2,
    image: Keyboard_I,
    title: "AK-900 Wired Keyboard",
    price: 960,
    oldPrice: 1160,
    discount: 30,
    rating: 5,
    reviews: 75,
    hear_icon:<IoMdHeartEmpty />,
    eye_icon:<BsEye />
  },
  {
    id: 3,
    image: Monitor_I,
    title: "IPS LCD Gaming Monitor",
    price: 370,
    oldPrice: 400,
    discount: 30,
    rating: 5,
    reviews: 99,
    hear_icon:<IoMdHeartEmpty />,
    eye_icon:<BsEye />
  },
  {
    id: 4,
    image: Chair_I,
    title: "HAVIT HV-G92 Gamepad",
    price: 120,
    oldPrice: 160,
    discount: 30,
    rating: 4,
    reviews: 88,
    hear_icon:<IoMdHeartEmpty />,
    eye_icon:<BsEye />
  },
];

function FlashSellsProduct() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {productData?.map((product) => (
        <ProductList key={product.id} {...product} />
      ))}
    </div>
  );
}

export default FlashSellsProduct;

const ProductList = ({
  image,
  title,
  price,
  oldPrice,
  discount,
  rating,
  reviews,
  hear_icon,
  eye_icon,

}) => {
  return (
    <div className="group relative border  rounded shadow hover:shadow-lg transition bg-white">
      <div className="Image bg-red-200 py-9">
        {/* Discount Badge */}
        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
          -{discount}%
        </div>
        {/* Heart and eye icon */}
          <div className="flex flex-col gap-2 absolute top-2 right-1.5">
            <div className=" text-[16px] p-2 font-bold rounded-full bg-white">
          {hear_icon}
        </div>
        <div className="text-[16px] p-2 font-bold rounded-full bg-white">
          {eye_icon}
        </div>
          </div>
        {/* Image Container */}
        <div className="w-[190px] h-[180px] mx-auto  flex items-center justify-center">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain"
          />
        </div>
        {/* Add To Cart Button */}
        <button className="hidden group-hover:block absolute py-2  px-[87px] bottom-[28%] bg-black text-white text-[16px] leading-[24px] font-medium text-nowrap">
          Add To Cart
        </button>
      </div>

      {/* Product Details */}
      <div className="p-4">
        <h3 className="font-semibold text-sm">{title}</h3>
        <div className="text-red-500 font-bold">
          ${price}
          <span className="text-gray-400 line-through text-sm ml-2">
            ${oldPrice}
          </span>
        </div>
        <div className="flex items-center text-sm text-yellow-500 mt-1">
          {"★".repeat(Math.round(rating))}
          {"☆".repeat(5 - Math.round(rating))}
          <span className="text-gray-500 text-xs ml-1">({reviews})</span>
        </div>
      </div>
    </div>
  );
};
