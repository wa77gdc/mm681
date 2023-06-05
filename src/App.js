
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Header from "./components/Header"
import { Outlet } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'


const App = () => {
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
export default App
