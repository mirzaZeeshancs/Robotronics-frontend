import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import AboutUs from "./pages/about";
import Shipping from "./pages/shop/shipping";
import Shop from "./pages/shop";
import Cart from "./pages/shop/cart";
import Signup from "./pages/signup";
import Login from "./pages/login";
import CustomerInfo from "./pages/shop/customerInfo";
import Course from "./pages/courses";
import ProductDetailPage from "./pages/shop/ProductDetailPage";
import CoursesProductDetail from "./pages/courses/coursesProductDetail";
import ShippingService from "./pages/shop/shippingService";
import CareerJob from "./pages/career/careerJob";
import CareerDetailPage from "./pages/career/careerDetailPage";
import Blog from "./pages/Blog/blog";
import BlogDetail from "./pages/Blog/blogDetail";
import COntactUS from "./pages/contactUs/cOntactUS";
import UserInfo from "./pages/Dashboard/userInfo";
import Order from "./pages/Dashboard/order";
import MyCoursesPage from "./pages/Dashboard/myCoursesPage";
import WishList from "./pages/Dashboard/wishList";
import Error from "./pages/404/error";
import UserInfoForm from "./pages/Dashboard/userInfoForm";
import CourseDetail from "./pages/Dashboard/CourseDetail";
import VideoGallery from "./pages/International/videoGallery";
import IServices from "./pages/International/services";
import IHome from "./pages/International/home";
import Screen from "./pages/SplashScreen/screen";
import Search from "./component/search";
import MyRobort from './pages/Dashboard/myRobot'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/Search" element={<Search />} />
          <Route path="/Screen" element={<Screen />} />
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/ProductDetailPage" element={<ProductDetailPage />} />
          <Route path="/Shipping" element={<Shipping />} />
          <Route path="/ShippingService" element={<ShippingService />} />
          <Route path="/Course" element={<Course />} />
          <Route path="/CustomerInfo" element={<CustomerInfo />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route
            path="/CoursesProduct/:id?"
            element={<CoursesProductDetail />}
          />
          <Route path="/CareerJob" element={<CareerJob />} />
          <Route path="/CareerDetailPage" element={<CareerDetailPage />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/BlogDetail" element={<BlogDetail />} />
          <Route path="/COntactUS" element={<COntactUS />} />
          <Route path="/Dashboard/userInfo" element={<UserInfo />} />
          <Route path="/Dashboard/order" element={<Order />} />
          <Route path="/Dashboard/MyCoursesPage" element={<MyCoursesPage />} />
          <Route path="/Dashboard/WishList" element={<WishList />} />
          <Route path="/404" element={<Error />} />
          <Route path="/Dashboard/userInfoForm" element={<UserInfoForm />} />
          <Route path="/Dashboard/courseDetail" element={<CourseDetail />} />
          <Route path="/International/myRobot" element={<MyRobort />} />
          <Route
            path="/International/videoGallery"
            element={<VideoGallery />}
          />
          <Route path="/International/Iservices" element={<IServices />} />
          <Route path="/International/home" element={<IHome />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
