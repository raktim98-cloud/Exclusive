import BannerImage from ".././assets/Image/Product_image/Spekar_Banner.jpg"
import Count from "./ProductComponents/Count"

function Spekar() {
  return (
    <section className="py-15">
        <div className="container">
            <div className="grid py-[69px] px-[56px] grid-cols-[500px_1fr]" style={{backgroundImage: `url(${BannerImage})`}}>
                <div>
                    <h5 className="text-[#00FF66] text-lg leading-5 font-semibold">Categories</h5>
                    <h2 className="text-white text-5xl leading-[60px] font-display tracking-[4%] py-8 font-semibold">Enhance Your Music Experience</h2>
                    <div className="flex items-start pb-9">
                        <Count/>
                    </div>
                    <button className="px-12 py-4 bg-[#00FF66] text-blue-600 text-[16px] leading-6 font-medium rounded-[4px]">
                        Buy Now!
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Spekar