
import PageTop from './PageTop'
import { Outlet } from 'react-router'
import Navbar from './Navbar'
import Footer from './Footer'

function Layout() {
  return (
    <div>
        <PageTop/>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout