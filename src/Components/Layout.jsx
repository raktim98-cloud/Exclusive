
import PageTop from './PageTop'
import { Outlet } from 'react-router'
import Navbar from './Navbar'

function Layout() {
  return (
    <div>
        <PageTop/>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Layout