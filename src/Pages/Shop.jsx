import { useContext } from "react"
import { CartContext } from "../Components/CartContext"

const Shop = () => {
  const {wishCount, setWishCount} = useContext(CartContext)
  const addWishList = ()=> {
    setWishCount(wishCount+1)
  }

  return (
    
    <section className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
      {/* Product Image */}
      <div className="bg-gray-100 rounded-lg h-64 mb-4 flex items-center justify-center">
        <div>
          <img src="/cart.jpg" alt="" />
        </div>
      </div>

      {/* Product Info */}
      <div>
        <h2 className="text-xl font-bold text-gray-800">
Canon EOS 2000D DSLR Camera</h2>
        
        {/* Price */}
        <div className="my-3">
          <span className="text-2xl font-bold">$24.99</span>
          <span className="ml-2 text-gray-500 line-through">$29.99</span>
          <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">20% OFF</span>
        </div>

        {/* Size Selection */}
        <div className="mb-4">
          
          <div className="flex gap-2">
            <button className="border px-2 py-1 hover:bg-red-500 hover:text-white border-gray-300 rounded-md hover:border-indigo-500">Specification</button>
            <button className="border px-2 py-1 hover:bg-red-500 hover:text-white border-indigo-500 bg-indigo-50 text-indigo-700 rounded-md">Description</button>
            <button className="border px-2 py-1 hover:bg-red-500 hover:text-white border-gray-300 rounded-md hover:border-indigo-500">Questions</button>
            <button className="border px-2 py-1 hover:bg-red-500 hover:text-white border-gray-300 rounded-md hover:border-indigo-500">Reviews</button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md font-medium">
            Proceed To Buy
          </button>
          <button className="w-full flex items-center justify-center gap-2 border border-gray-300 hover:bg-gray-50 py-2 px-4 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span onClick={addWishList}>Add To WishList</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Shop;