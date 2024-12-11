import Intro from "../../component/international/services/intro"
import SchoolLogos from "../../component/schoollogos"
import Updates from "../../component/updates"
import OurServices from "../../component/international/services/ourServices"
import QuickContact from "../../component/international/services/quickContact"
import Footer from "../../component/footer"
const IServices = () => {
  return (
    <div>
      <Intro />
      <SchoolLogos />
      <OurServices />
      <Updates />
      <QuickContact />
      <Footer />
    </div>
  )
}

export default IServices