import SectionHead from "./SectionHead";
import CountdownTimer from "./CountdownTimer";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";
import FlashSellsProduct from "./ProductComponents/FlashSellsProduct";
import CounterBanner from "./ProductComponents/CounterBanner";

function FlashSells() {
  return (
    <section className="py-[120px]">
      <div className="container">
        <div className="flex items-end justify-between">
          <SectionHead catagories="Today’s" title={"Flash Sales"} />
          <CounterBanner />
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
          <FlashSellsProduct  />
        </div>
        <div className="text-center text-white py-[40px]">
          <button className="bg-red-500 text-[16px] leading-6 font-medium px-[48px] py-[16px]">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}

export default FlashSells;
