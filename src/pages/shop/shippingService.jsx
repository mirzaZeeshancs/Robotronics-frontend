import Footer from "../../component/footer";
import Cartintro from "../../component/shop/shopCartIntro";
import ShopPaymentMethod from "../../component/shop/shopPaymentMethod"

const ShippingService = () => {
  return (
    <div>
        <Cartintro/>
        <ShopPaymentMethod/>
        <Footer/>
    </div>
  )
}

export default ShippingService;