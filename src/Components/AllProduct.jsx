import { useEffect, useState } from "react"
import ProductCard from "./ProductComponents/ProductCard"
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';




function AllProduct() {
const box = useRef()
  useGSAP(() => {
	// gsap code here...
	gsap.to('.box', { x: 360 }); 
});
  

  const [product, setProduct] =useState([])
  const [showProduct, setSowProduct] =useState([])
  
  const API = "https://dummyjson.com/products"
  const fetchProduct =async () => {
    try {
      const res = await fetch(API)
      const data = await res.json()
      setProduct(data.products)
      setSowProduct(data.products)
      

      
    } catch (error) {
      console.log(error);
      
      
    }
    
  }

  
  useEffect(()=>{
    fetchProduct()
    
  },[])

  const categoryItem = product.map((cat) => cat.category)
  let allCategoryMenu = [...new Set(categoryItem)]
  console.log(allCategoryMenu);
  
  

  const handleCagegory = (category)=>{
    console.log(category);
    const newCategory = product.filter((cat) => cat.category === category);
    setSowProduct(newCategory)
  }

 
  return (
    <section>
      <div className="container">
        <div className='flex items-center justify-between gap-3 py-2'>
          <h2 className='text-2xl font-bold text-[#343A40]'>All Products</h2>
        
        </div>
        <div className="grid grid-cols-[190px_1fr] gap-4">
          <div>
            <h6>Shop by Category</h6>
            <ul>
              {allCategoryMenu?.map((c, i) => {
                return <li key={i} onClick={()=> handleCagegory(c)}>{c}</li>
              })}
            </ul>
          </div>
          <div className='grid grid-cols-4 gap-3'>
            {showProduct?.map((product)=> {
              return(
                <ProductCard ref={box} key={product.id} product={product}/>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AllProduct