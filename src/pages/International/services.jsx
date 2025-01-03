import Intro from "../../component/international/services/intro"
import SchoolLogos from "../../component/schoollogos"
import Updates from "../../component/updates"
import OurServices from "../../component/international/services/ourServices"
import QuickContact from "../../component/international/services/quickContact"
import Footer from "../../component/footer"
import Marquees from "../../component/marquees"
const IServices = () => {
  return (
    <div>
      <Intro />
      <Marquees/>
      {/* <SchoolLogos /> */}
      <OurServices />
      <Updates />
      <QuickContact />
      <Footer />
    </div>
  )
}

export default IServices