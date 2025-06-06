import Redhudi_I from "../../assets/Image/Product_image/Redhudi_Image.png";
import Handbag_I from "../../assets/Image/Product_image/Handbag_Image.png";
import Spekar_I from "../../assets/Image/Product_image/Spekar_Image.png";
import BookSelf_I from "../../assets/Image/Product_Image/BookSelf_image.png";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsEye } from "react-icons/bs";
import Slider from "react-slick/lib/slider";

const productData = [
  {
    id: 1,
    image: Redhudi_I,
    title: "The north coat",
    price: 226,
    oldPrice: 360,
    rating: 4.1,
    reviews: 65,
    hear_icon: <IoMdHeartEmpty />,
    eye_icon: <BsEye />,
  },
  {
    id: 2,
    image: Handbag_I,
    title: "Gucci duffle bag",
    price: 960,
    oldPrice: 1160,
    rating: 4.9,
    reviews: 65,
    hear_icon: <IoMdHeartEmpty />,
    eye_icon: <BsEye />,
  },
  {
    id: 3,
    image: Spekar_I,
    title: "RGB liquid CPU Cooler",
    price: 160,
    oldPrice: 170,
    rating: 1.2,
    reviews: 65,
    hear_icon: <IoMdHeartEmpty />,
    eye_icon: <BsEye />,
  },
  {
    id: 4,
    image: BookSelf_I,
    title: "Small BookSelf",
    price: 360,
    oldPrice: "",
    rating: 5,
    reviews: 65,
    hear_icon: <IoMdHeartEmpty />,
    eye_icon: <BsEye />,
  },
];

function BestSellingProduct() {
  const settings = {
    className: "center",
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="slider-container">
          <Slider {...settings}>
            {productData.map((product) => (
              <div key={product.id} className="px-1.5">
                <ProductList {...product} />
              </div>
            ))}
          </Slider>
        </div>
  );
}

export default BestSellingProduct;

const ProductList = ({
  image,
  title,
  price,
  oldPrice,
  rating,
  reviews,
  hear_icon,
  eye_icon,
}) => {
  console.log(Math.round(3.6));

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
          <span className="text-gray-400 line-through text-sm ml-2">
            ${oldPrice}
          </span>
        </div>
        <div className="flex items-center text-sm text-yellow-500 mt-1">
          {"★".repeat(Math.round(rating))}
          {/* {<FaRegStar/>.repeat(5 - Math.round(rating))} */}
          {Array.fill}
          <span className="text-gray-500 text-xs ml-1">({reviews})</span>
        </div>
      </div>
    </div>
  );
};
