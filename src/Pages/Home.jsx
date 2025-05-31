
import Banner from '../Components/Banner'
import BestSelling from '../Components/BestSelling'
import Catagory from '../Components/Catagory'
import ExploreProduct from '../Components/ExploreProduct'
import Fetures from '../Components/Fetures'
import FlashSells from '../Components/FlashSells'
import NewArival from '../Components/NewArival'
import Spekar from '../Components/Spekar'

function Home() {
  return (
    <div>
      <Banner/>
      <FlashSells/>
      <Catagory/>
      <BestSelling/>
      <Spekar/>
      <ExploreProduct/>
      <NewArival/>
      <Fetures/>
      
    </div>
  )
}

export default Home