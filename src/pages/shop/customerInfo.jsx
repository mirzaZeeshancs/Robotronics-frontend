import Footer from "../../component/footer"
import CustomerInfoIntro from "../../component/shop/customerInfoIntro"
import CustomerInfomation from "../../component/shop/CustomerInfomation"
const customerInfo = () => {
  return (
    <div>
        <CustomerInfoIntro/>
        <CustomerInfomation/>
        <Footer/>
    </div>
  )
}

export default customerInfo