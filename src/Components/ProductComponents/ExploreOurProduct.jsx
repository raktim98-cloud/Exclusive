import Camera_I from "../../assets/Image/Product_image/Camera_Image.png";
import Packet_I from "../../assets/Image/Product_image/Packet_image.png";
import Laptop_I from "../../assets/Image/Product_image/Facewash_Image.png";
import Facewash_I from "../../assets/Image/Product_Image/BookSelf_image.png";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsEye } from "react-icons/bs";
const productData = [
  {
    id: 1,
    image: Packet_I,
    title: "Breed Dry Dog Food",
    price: 100,
    rating: 3,
    reviews: 65,
    hear_icon:<IoMdHeartEmpty />,
    eye_icon:<BsEye />
  },
  {
    id: 2,
    image: Camera_I,
    title: "CANON EOS DSLR Camera",
    price: 360,
    rating: 4,
    reviews: 95,
    hear_icon:<IoMdHeartEmpty />,
    eye_icon:<BsEye />
  },
  {
    id: 3,
    image: Laptop_I,
    title: "ASUS FHD Gaming Laptop",
    price: 700,
    rating: 5,
    reviews: 325,
    hear_icon:<IoMdHeartEmpty />,
    eye_icon:<BsEye />
  },
  {
    id: 4,
    image: Facewash_I,
    title: "Curology Product Set ",
    price: 500,
    rating: 5,
    reviews: 145,
    hear_icon:<IoMdHeartEmpty />,
    eye_icon:<BsEye />
  },
];

function ExploreOurProduct() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {productData?.map((product) => (
        <ProductList key={product.id} {...product} />
      ))}
    </div>
  )
}

export default ExploreOurProduct


const ProductList = ({
  image,
  title,
  price,
  rating,
  reviews,
  hear_icon,
  eye_icon,

}) => {
  return (
    <div className="group relative border  rounded shadow hover:shadow-lg transition bg-white">
      <div className="Image bg-red-200 py-9">
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