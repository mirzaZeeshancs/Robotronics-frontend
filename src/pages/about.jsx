import Intro from "../component/about/aboutIntro";
import AboutRobotronics from "../component/about/aboutRobotronics";
import AboutScience from "../component/about/aboutScience"
import AboutVision from "../component/about/aboutVision"
import AboutSquad from "../component/about/aboutSquad"
import Schoollgoso from "../component/schoollogos"
import Footer from "../component/footer"
import Gotobtn from "../component/goToBtn"
const About = () => {
  return (
    <div className="flex flex-col" >
      <Intro/>
      <AboutRobotronics/>
      <AboutScience/>
      <AboutVision/>
      <AboutSquad/>
      <Schoollgoso/>
      <Gotobtn/>
      <Footer/>
    </div>
  )
}

export default About;
