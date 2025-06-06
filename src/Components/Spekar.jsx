import { useEffect, useState } from "react";
import BannerImage from ".././assets/Image/Product_image/Spekar_Banner.jpg"
import Count from "./ProductComponents/Count"
const colorCycle = [
  'text-red-850',    
  'text-amber-400',   
  'text-red-700',    
  'text-yellow-300',  
  'text-orange-500',  
  'text-pink-500',    
  'text-red-400',
  'text-white',
        
];
function Spekar() {
    const [currentColorIndex,setCurrentColorIndex] = useState(0)
    useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colorCycle.length);
    }, 142); 

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="py-15">
        <div className="container">
            <div className="grid py-[69px] px-[56px] grid-cols-[500px_1fr] relative" style={{backgroundImage: `url(${BannerImage})`}}>
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
                <div className="px-2 py-[6px] bg-red-950 absolute right-[32.5%] rotate-7 rounded-[2px] top-[49.6%]">
                    <h3 className={`font-extrabold ${colorCycle[currentColorIndex]} transition-colors duration-100`}>JBL</h3>

                </div>
            </div>
        </div>
    </section>
  )
}

export default Spekar