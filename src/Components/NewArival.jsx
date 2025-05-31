import Playstation from "../assets/Image/Product_image/Playstation.png";
import Black_ledy from "../assets/Image/Product_image/Black_ledy.jpg";
import Roll_spekar from "../assets/Image/Product_image/Roll_spekar.jpg";
import Gucci from "../assets/Image/Product_image/Gucci.jpg";
import SectionHead from "./SectionHead";
function NewArival() {
  return (
    <section>
      <div className="container">
        <SectionHead catagories="Featured" title={"New Arrival"} />
        <div className="grid grid-cols-[570px_1fr]">
          <div className="relative">
            <img src={Playstation} alt="PlayStation 5 console" />
            <div className="absolute bottom-0 left-0 p-4  text-white">
              <h3>PlayStation 5</h3>
              <p className="pr-67 py-[16px] text-[14px] leading-[21px]">
                Black and White version of the PS5 coming out on sale.
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Shop Now
              </button>
            </div>
          </div>
          {/* 2nd part */}
          <div className="pl-7 flex flex-col gap-[30px]  justify-between">
              <div className="relative">
                <img src={Black_ledy} alt="PlayStation 5 console" />
                <div className="absolute bottom-0 left-0 p-4  text-white">
                  <h3>Women’s Collections</h3>
                  <p className="pr-67 py-[16px] text-[14px] leading-[21px]">
                    Featured woman collections that give you another vibe
                  </p>
                  <button className="text-white border-b border-b-red-500">
                    Shop Now
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-center gap-5">
                <div className="relative">
                <img src={Roll_spekar} alt="PlayStation 5 console" />
                <div className="absolute bottom-0 left-0 p-4  text-white">
                  <h3>Speakers</h3>
                  <p className="py-[8px] text-[14px] leading-[21px]">
                    Amazon wireless speakers
                  </p>
                  <button className="text-white border-b border-b-red-500">
                    Shop Now
                  </button>
                </div>
              </div>
              <div className="relative">
                <img src={Gucci} alt="PlayStation 5 console" />
                <div className="absolute bottom-0 left-0 p-4  text-white">
                  <h3>Perfume</h3>
                  <p className="py-[8px] text-[14px] leading-[21px]">
                    GUCCI INTENSE OUD EDP
                  </p>
                  <button className="text-white border-b border-b-red-500">
                    Shop Now
                  </button>
                </div>
              </div>
              </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewArival;

// style={{backgroundImage:` url(${Playstation})`}}
