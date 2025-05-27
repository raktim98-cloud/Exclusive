import React from 'react'
import SectionHead from './SectionHead'
import CatagoriesProduct from './ProductComponents/CatagoriesProduct'

function Catagory() {
  return (
    <section className='py-10'>
        <div className="container">
            <div className='border-y border-y-amber-900 py-20'>
                {/* Section Head */}
                <div className='py-[60px]'>
                    <SectionHead catagories="Categories" title={"Browse By Category"}/>
                </div>
                <CatagoriesProduct/>
            </div>
        </div>
    </section>
  )
}

export default Catagory