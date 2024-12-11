import img from "../../assets/images/contactUsBG.svg"
import Header from "../header"
const Intro = () => {
  return (
    <div className="contactUs bg-contactbg" >
        <div className="p-5 lg:py-10" >
            <Header/>
        </div>
        <div className="w-2/4 text-center lg:p-14 lg:py-14 py-5" >
            <p className="lg:text-6xl text-2xl poppins-extrabold text-gold" >CONTACT US</p>
        </div> 
        <div className="lg:pt-14 lg:px-20 px-5 pt-5" >
            {/* image */}
            <img src={img} alt="Contact_US" className=""/>
        </div>
    </div>
  )
}

export default Intro