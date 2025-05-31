import { FaTruckFast } from "react-icons/fa6";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { RiShieldCheckFill } from "react-icons/ri";
const fetureData = [
    {
        id:1,
        icon:<FaTruckFast/>,
        title:"FREE AND FAST DELIVERY",
        discription:"Free delivery for all orders over $140"
    },
    {
        id:2,
        icon:<TfiHeadphoneAlt/>,
        title:"24/7 CUSTOMER SERVICE",
        discription:"Friendly 24/7 customer support"
    },
    {
        id:3,
        icon:<RiShieldCheckFill/>,
        title:"MONEY BACK GUARANTEE",
        discription:"We reurn money within 30 days"
    },
]
function Fetures() {
  return (
    <section className="py-25 px-15">
        <div className="container">
            <div className="grid grid-cols-3">
                {fetureData?.map((item)=> <FeturesList key={item.id} {...item}/>)}
            </div>
        </div>
    </section>
  )
}

export default Fetures

const FeturesList = ({icon,title,discription})=> {
    return(
        <div className="flex flex-col items-center justify-center gap-2 text-center ">
  <div className="size-[80px] flex items-center justify-center text-white bg-black rounded-full text-5xl outline-10 outline-[#2F2E30]">
    {icon}
  </div>
  <h4 className="text-[20px] font-semibold text-black pt-[20px]">{title}</h4>
  <p className="text-gray-600">{discription}</p>
</div>
    )
}