import React from 'react'
import SectionHead from './SectionHead'
import CountdownTimer from './CountdownTimer'
import { FaLongArrowAltRight,FaLongArrowAltLeft } from "react-icons/fa";

function Allproducts() {
  return (
    <section className='py-[120px]'>
        <div className='container'>
        <SectionHead catagories="Today’s" different="Flash Sales"/>
          <div className='grid grid-cols-[211px_1fr_auto] pt-10'>
          <h3 className="text-4xl leading-12 font-semibold tracking-[4%] font-display">Flash Sales</h3>
          <CountdownTimer/>
          <div className='flex items-center justify-center gap-4'>
          <button><FaLongArrowAltRight/></button>
          <button><FaLongArrowAltLeft/></button>
          </div>


          </div>
           
        </div>
    </section>
  )
}

export default Allproducts