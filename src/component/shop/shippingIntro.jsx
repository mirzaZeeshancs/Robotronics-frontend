import Header from "../header"
import ShippingStep from "../../component/shop/steps.jsx/reviewStep"
const ShippingIntro = () =>  {
    return (
      <div className="shopCarthero" id="shopCarthero">
          <div className="p-5">
            <Header />
          </div>
          {/* parent */}
          <div className="flex flex-col lg:py-20 py-10" >
          <div className=" items-center" >
          <p className="text-brown font-bold lg:text-5xl text-2xl poppins-extrabold text-center self-center " data-aos="fade-down" data-aos-duration="2000" data-aos-delay="4000">SHOPING CART</p>
          <p className="text-brown lg:text-l text-sm text-wrap  text-center self-center "data-aos="fade-down" data-aos-duration="2000" data-aos-delay="4000" >THIS IS YOUR CART BASED ON WHAT YOU WANT</p>
          </div>
          <div className="" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="4000">
          <ShippingStep/>
          </div>
          </div>
        </div>
    )
  }

export default ShippingIntro