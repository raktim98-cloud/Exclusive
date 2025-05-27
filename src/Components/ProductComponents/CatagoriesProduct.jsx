import { CiMobile4,CiHeadphones  } from "react-icons/ci";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { TbDeviceWatchStats } from "react-icons/tb";
import { IoCameraOutline,IoGameControllerOutline } from "react-icons/io5";
import Slider from "react-slick";
const ProductData = [
    {
        id:1,
        icon:<CiMobile4 />,
        title:"Phones"
    },
    {
        id:2,
        icon:<HiOutlineComputerDesktop />,
        title:"Computers"
    },
    {
        id:3,
        icon:<TbDeviceWatchStats />,
        title:"SmartWatch"
    },
    {
        id:4,
        icon:<IoCameraOutline />,
        title:"Camera"
    },
    {
        id:5,
        icon:<CiHeadphones  />,
        title:"HeadPhones"
    },
    {
        id:6,
        icon:<IoGameControllerOutline />,
        title:"Gaming"
    },
]
function CatagoriesProduct() {
    const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
}
  return (
     <div className="slider-container">
      <Slider {...settings}>
          {ProductData.map((product) => (
            <div key={product.id} className="px-5">
              <ProductList {...product} />
            </div>
          ))}
        </Slider>
    </div>
  )
}

export default CatagoriesProduct
const ProductList = ({icon,title}) => {
    return(
        <div className="group flex flex-col gap-[16] items-center justify-center hover:bg-red-600 py-6 px-[57px] hover:shadow-[0_1px_13px_0_rgba(0,0,0,0.05)] rounded-[4px] border border-[rgba(0,0,0,0.32)] hover:border-none">
            <div className="text-[50px] group-hover:text-white transition-all">
                {icon}
            </div>
            <div className="text-[16px] leading-[24px] text-black group-hover:text-white transition-all">
                {title}
            </div>

        </div>
    )
}