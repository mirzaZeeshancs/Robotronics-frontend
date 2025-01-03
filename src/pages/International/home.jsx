import Intro from "../../component/international/services/intro";
import SchoolLogos from "../../component/schoollogos";
import Offers from "../../component/offers";
import Updates from "../../component/updates";
import QuickContact from "../../component/international/services/quickContact";
import Footer from "../../component/footer";
import Upcoming from "../../component/international/internationalPage/upcoming";
import Events from "../../component/international/internationalPage/event";
import Shop from "../../component/international/internationalPage/Shop";
const IHome = () => {
  return (
    <div>
      <Intro />
      <SchoolLogos />
      <Upcoming />
      <div className="hidden lg:block ">
        <Events />
      </div>
      <Offers />
      <Shop />
      <Updates />
      <QuickContact />
      <Footer />
    </div>
  );
};

export default IHome;
