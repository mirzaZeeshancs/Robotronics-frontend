import Header from "../header"
// import ShopCartSteps from "../shop/ShopCartSteps"
import CustomerStep from "../../component/shop/steps.jsx/customerStep"
const CustomerInfoIntro = () => {
  return (
    <div className="shopCarthero" id="shopCarthero">
        <div className="p-5">
          <Header />
        </div>
        {/* parent */}
        <div className="flex flex-col lg:py-20 py-10" >
        <div className=" items-center" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="4000">
        <p className="text-brown font-bold lg:text-5xl text-wrap text-2xl text-center self-center " >SHOPING CART</p>
        <p className="text-brown lg:text-l text-center text-wrap self-center " >THIS IS YOUR CART BASED ON WHAT YOU WANTED TO BY</p>
        </div>
        <div className="self-center" >
        <CustomerStep/>
        </div>
        </div>
      </div>
  )
}

export default CustomerInfoIntro