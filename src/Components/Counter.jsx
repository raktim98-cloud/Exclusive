
import CountUp from 'react-countup';
import { BiDollarCircle } from "react-icons/bi";
import { CiShop } from "react-icons/ci";
import { BiLogoShopify } from "react-icons/bi";
import { FaSackDollar } from "react-icons/fa6";
const countData = [
    {
        id:1,
        icon:<CiShop/>,
        counterNumber:"10.5",
         text:"Sallers active our site",
         suffix:"k"
    },
    {
        id:2,
        icon:<BiDollarCircle/>,
        counterNumber:"33",
         text:"Mopnthly Produduct Sale",
         suffix:"k"
    },
    {
        id:3,
        icon:<BiLogoShopify/>,
        counterNumber:"45.5",
         text:"Customer active in our site",
         suffix:"k"
    },
    {
        id:4,
        icon:<FaSackDollar/>,
        counterNumber:"25",
         text:"Anual gross sale in our site",
         suffix:"k"
    },
    
]
function Counter() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
      {countData?.map((count)=> <CountItem key={count.id} {...count}/>)}

    </div>
  )
}

export default Counter

const CountItem = ({icon,counterNumber,text,suffix})=> {
  return(
    <div className="group flex flex-col gap-[12px] items-center justify-center border border-[rgba(0,0,0,0.3)] rounded-[4%] hover:bg-red-500 hover:shadow-[0_2px_10px_2px_rgba(0,0,0,0.1) transition-all px-[50px] py-[30px] text-center">
      <div className="size-[80px] flex items-center justify-center text-white bg-black rounded-full text-5xl outline-10 outline-[#ECECEC] group-hover:text-black group-hover:bg-white transition-all mb-3 ">
        {icon}
      </div>
      <div>
        <h2 className="font-display text-[32px] leading-[30px] text-black tracking-[4%] font-bold group-hover:text-white transition-all pb-[12px]">
            {
                <CountUp
                start={0}
                end={counterNumber}
                duration={2.75}
                separator=" "
                decimals={1}
               
                suffix={suffix}
               
              />
            }
        </h2>
        <p className="text-[16px] leading-[24px] group-hover:text-white transition-all text-nowrap">{text}</p>

      </div>

    </div>
  )
}