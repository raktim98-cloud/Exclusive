
import { IoMdHeartEmpty } from "react-icons/io";
import { BsEye } from "react-icons/bs";
import { useNavigate } from "react-router";


const ProductCard = ({product}) => {
    const previousPrice = (product.price / (1 - product.discountPercentage / 100)).toFixed(2);
    const navigate = useNavigate()
    const handleDetails = () => {
    navigate(`/allproduct/${product.id}`)
}
    

  return (
    <div className="group relative border  rounded shadow hover:shadow-lg transition bg-white">
      <div className="Image bg-red-200 py-9">
        {/* Discount Badge */}
        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
          -{Math.floor(product.discountPercentage)}%OFF
        </div>
        {/* Heart and eye icon */}
        <div className="flex flex-col gap-2 absolute top-2 right-1.5">
          <div className=" text-[16px] p-2 font-bold rounded-full bg-white">
            <IoMdHeartEmpty/>
          </div>
          <div className="text-[16px] p-2 font-bold rounded-full bg-white">
            <BsEye/>
          </div>
        </div>
        {/* Image Container */}
        <div onClick={handleDetails} className="w-[190px] h-[180px] mx-auto  flex items-center justify-center">
          <img className='w-full h-full hover:scale-110 object-cover transition-transform duration-2000 ease-in-out transform' src={product.thumbnail} alt="image" />
        </div>
        {/* Add To Cart Button */}
        <button className="hidden group-hover:block absolute py-2  px-[87px] bottom-[28%] bg-black text-white text-[16px] leading-[24px] font-medium text-nowrap">
          Add To Cart
        </button>
      </div>

      {/* Product Details */}
      <div className="p-4">
        <h3 className="font-semibold text-sm">{product.title}</h3>
        <div className="text-red-500 font-bold">
          ${product.price}
          <span className="text-gray-400 line-through text-sm ml-2">
            ${previousPrice}
          </span>
        </div>
        <div className="flex items-center text-sm text-yellow-500 mt-1">
          {"★".repeat(Math.round(product.rating))}
          {"☆".repeat(5 - Math.round(product.rating))}
          <span className="text-gray-500 text-xs ml-1">Review</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard