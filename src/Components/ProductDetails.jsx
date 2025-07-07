import { useEffect, useState } from "react";
import Slider from "react-slick";
import { useParams } from "react-router";
import { IoIosArrowForward } from "react-icons/io";
import { PiSealPercentFill } from "react-icons/pi";
import { FaMessage } from "react-icons/fa6";
// import { baseUrl } from "./config";

function ProductDetails() {
  const param = useParams();

  const [product, setProduct] = useState({});
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("M");

  const API = `https://dummyjson.com/products/${param.id}`;
  const fetchProduct = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelectImage = (id)=> {
    setSelectedImage(id)
  }

  const settings = {
    infinite: product.images?.length > 1,
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: product.images?.length > 1, // Only show arrows if multiple images
    nextArrow: product.images?.length > 1 ? <NextButton /> : null,
    prevArrow: product.images?.length > 1 ? <PrevButton /> : null,
    // Spread the custom paging settings only if multiple images
    ...(product.images?.length > 1 && {
      customPaging: function (i) {
        return (
          <a>
            <img src={product.images[i]} alt={`Thumbnail ${i + 1}`} />
          </a>
        );
      },
    }),
  };
  useEffect(() => {
    fetchProduct();
  }, []);

  const previousPrice = (
    product.price /
    (1 - product.discountPercentage / 100)
  ).toFixed(2);
  const havePrice = (product.price - product.discountPercentage).toFixed(2);

  return (
    <section className="py-10">
      <div className="container">
        <div className="grid grid-cols-[auto_1fr] gap-4">
          {/* 1st Image Part */}
          <div className="">
            <div className="grid grid-cols-[170px_500px] gap-7.5">
              <div className="flex flex-col gap-1">
                {product?.images && product?.images.map((image, index)=> {
                  return (
                    <div key={index} className="h-[138px] w-[170px] p-3 bg-[#F5F5F5]" onClick={()=> handleSelectImage(index)}>
                      <img className="w-full" src={ image} alt="" />
                    </div>
                  )
                })}
              </div>
              <div className="h-[600px] w-[500px] bg-[#F5F5F5]">
                <img className="hover:scale-[1.2] transition-all" src={product.images ? product.images[selectedImage]: ""} alt="" />
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)] p-3">
            <div className="flex items-center justify-start gap-2 text-red-700 ">
              <div className=" ">
                {" "}
                <PiSealPercentFill />
              </div>
              <div className="font-medium">
                -{Math.floor(product.discountPercentage)}% OFF
              </div>
            </div>
            <h1 className="text-3xl leading-5 font-medium text-gray-800 pt-3 pb-6">
              {product.title}
            </h1>
            {/* product Coad Part */}
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <span className="text-black">
                Product code:{" "}
                <span className="font-semibold">{product.sku}</span>
              </span>
              |
              <span className=" font-medium">
                <span className="text-[#17AAD0] font-bold">FREE Delivery</span>{" "}
                on orders over $299
              </span>
            </div>
            {/* Doller Part */}
            <div className=" border-y border-gray-200 px-5 py-4 bg-[#FBFBFB] my-5 flex  items-center justify-start gap-3">
              <span className="text-[#6C757D] line-through text-lg font-medium">
                ${previousPrice}
              </span>
              <span className="text-red-500  text-3xl font-medium">
                ${product.price}
              </span>
              <span className="text-[#e6b74a]  text-lg font-medium">
                You Have : ${havePrice}
              </span>
            </div>
            {/* Ratting part  */}
            <div className="flex items-center justify-between gap-3">
              {/* 1st part */}
              <div className="flex flex-col items-center justify-start gap-4">
                <div className="flex items-center text-lg text-yellow-500 mt-1">
                  {"★".repeat(Math.round(product.rating))}
                  {"☆".repeat(5 - Math.round(product.rating))}
                  <span className="pl-2 text-black text-sm">[613]</span>
                </div>
                <h2>Apparel Size : </h2>
              </div>
              {/* 2nd part */}
              <div className="flex flex-col items-center justify-start gap-4">
                <div className="flex gap-2 items-center">
                  <button className="text-red-600 hover:underline text-sm">
                    1 Review(s)
                  </button>
                  <span className="text-[12px] text-[#EBE9E9] cursor-pointer">
                    <FaMessage />
                  </span>
                  <button className="text-red-600 hover:underline text-sm">
                    Add Your Review
                  </button>
                </div>
                <div className="flex gap-2">
                    {["XS", "S", "M", "L", "XL"].map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 border rounded-md transition-colors ${
                          selectedSize === size
                            ? "bg-[#6C757D] text-white border-[#6C757D]"
                            : "bg-white text-gray-700 border-gray-300 hover:border-gray-400"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                
                  
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;

const PrevButton = ({ onClick }) => {
  return (
    <span
      onClick={onClick}
      className="absolute rounded-full p-3.5 bg-gray-500 hover:bg-black text-white transition-all left-0 top-0 translate-y-[240px] -translate-x-10 "
    >
      <IoIosArrowForward />
    </span>
  );
};
const NextButton = ({ onClick }) => {
  return (
    <span
      onClick={onClick}
      className="absolute rounded-full p-3.5 bg-gray-500 hover:bg-black text-white transition-all right-0 top-0 translate-y-[240px] translate-x-10 "
    >
      <IoIosArrowForward />
    </span>
  );
};
