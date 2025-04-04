import { useContext } from "react"
import Description from "../components/Description"
import Footer from "../components/Footer"
import GenerateBtn from "../components/GenerateBtn"
import Header from "../components/Header"
import Login from "../components/Login"
import Navbar from "../components/NavBar"
import Steps from "../components/Steps"
import Testimonials from "../components/Testimonials"
import { AppContext } from "../context/AppContext"
export default function Home(){
    const {showLogin}=useContext(AppContext);
    return(
        <div>
            <Navbar />
            {
                showLogin && <Login/>
            }
            <Header/>
            <Steps/>
            <Description/>
            <Testimonials/>
            <GenerateBtn/>
            <Footer/>
        </div>
    )
}