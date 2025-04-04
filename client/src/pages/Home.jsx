import Description from "../components/Description"
import Footer from "../components/Footer"
import GenerateBtn from "../components/GenerateBtn"
import Header from "../components/Header"
import Navbar from "../components/NavBar"
import Steps from "../components/Steps"
import Testimonials from "../components/Testimonials"
export default function Home(){
    return(
        <div>
            <Navbar />
            <Header/>
            <Steps/>
            <Description/>
            <Testimonials/>
            <GenerateBtn/>
            <Footer/>
        </div>
    )
}