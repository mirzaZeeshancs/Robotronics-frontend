import Footer from "../component/footer";
// import Graph from "../component/graph";
import Intro from "../component/intro";
import Offers from "../component/offers";
import SchoolLogos from "../component/schoollogos";
import Services from "../component/services";
import Shop from "../component/shop";
import Testimonial from "../component/testimonial";
import Updates from "../component/updates";
import BoToBtn from "../component/goToBtn";
const Home = () => {
  return (
    <div className="flex flex-col">
      <Intro />
      <SchoolLogos />
      {/* <Graph /> */}
      <Services />
      <Offers />
      <Shop />
      <Updates />
      <div className="hidden md:block">
        <Testimonial />
      </div>
      <BoToBtn />
      <Footer />
    </div>
  );
};

export default Home;
