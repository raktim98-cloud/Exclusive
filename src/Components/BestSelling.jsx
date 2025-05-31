
import BestSellingProduct from "./ProductComponents/BestSellingProduct";
import SectionHead from "./SectionHead";

function BestSelling() {
  return (
    <section className="py-[70px]">
      <div className="container">
        <div className="flex items-center justify-between py-5">
          <SectionHead
            catagories="This Month"
            title={"Best Selling Products"}
          />
          {/* all product  Button */}
          <button className="bg-red-500 text-[16px] leading-6 font-medium px-[48px] py-[16px]">
            View All Products
          </button>
        </div>
        <div className="py-5">
            <BestSellingProduct/>
        </div>
      </div>
    </section>
  );
}

export default BestSelling;
