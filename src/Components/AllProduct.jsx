import { useEffect, useState } from "react"
import ProductCard from "./ProductComponents/ProductCard"




function AllProduct() {
  

  const [product, setProduct] =useState([])
  
  const API = "https://dummyjson.com/products"
  const fetchProduct =async () => {
    try {
      const res = await fetch(API)
      const data = await res.json()
      setProduct(data.products)
      
    } catch (error) {
      console.log(error);
      
      
    }
  }

  
  useEffect(()=>{
    fetchProduct()
  },[])

 
  return (
    <section>
      <div className="container">
        <div className='flex items-center justify-between gap-3 py-2'>
          <h2 className='text-2xl font-bold text-[#343A40]'>All Products</h2>
        
        </div>
        <div className='grid grid-cols-4 gap-3'>
          {product?.map((product)=> {
            return(
              <ProductCard key={product.id} product={product}/>
              
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default AllProduct