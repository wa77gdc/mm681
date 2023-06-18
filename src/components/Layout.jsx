import Header from './Header'
import Banner from './Banner'
import Footer from './Footer'
import { Outlet } from "react-router-dom"
import { ToastContainer } from "react-toastify"

const Layout = () => {
    return (
    <div className="main">
      <Header />
      <ToastContainer />
      <Banner />
        <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
