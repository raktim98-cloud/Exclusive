
import ExploreOurProduct from './ProductComponents/ExploreOurProduct'
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa'
import SectionHead from './SectionHead'

function ExploreProduct() {
  return (
    <section className="py-[70px]">
      <div className="container">
        <div className="flex items-center justify-between">
          <SectionHead catagories="Today’s" title={"Flash Sales"}/>
          {/* allow Button */}
          <div className="flex items-center justify-center gap-4">
            <button>
              <FaLongArrowAltRight />
            </button>
            <button>
              <FaLongArrowAltLeft />
            </button>
          </div>
        </div>
        
        {/* Product jsx Component */}
        <div className="py-5">
          <ExploreOurProduct/>
        </div>
        <div className="text-center text-white py-[40px]">
          <button className="bg-red-500 text-[16px] leading-6 font-medium px-[48px] py-[16px]">
            View All Products
          </button>
        </div>
      </div>
    </section>
  )
}

export default ExploreProduct