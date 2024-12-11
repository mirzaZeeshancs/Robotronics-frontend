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
          <p className="text-brown font-bold lg:text-5xl text-2xl poppins-extrabold text-center self-center " >SHOPING CART</p>
          <p className="text-brown lg:text-l text-sm text-wrap  text-center self-center " >THIS IS YOUR CART BASED ON WHAT YOU WANT</p>
          </div>
          <div className="" >
          <ShippingStep/>
          </div>
          </div>
        </div>
    )
  }

export default ShippingIntro