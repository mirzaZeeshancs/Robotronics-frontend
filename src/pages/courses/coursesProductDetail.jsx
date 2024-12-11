import YtVideos from "../../component/course/courseDetailPage/ytVideos";
import Footer from "../../component/footer";
import Decription from "../../component/shop/productDetail/decription";
import CourseIntro from "../../component/course/courseDetailPage/courseIntro";
import MoreProduct from "../../component/shop/productDetail/moreProduct";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CoursesProductDetail = () => {
  const { id } = useParams();
  const [courses, setCourses] = useState([]);

  console.log("courses", id, courses);

  useEffect(() => {
    // Fetch courses from the API
    fetch(`http://localhost:8080/courses/${id}`)
      .then((response) => response.json())
      .then((data) => setCourses(data.data))
      .catch((error) => console.error("Error fetching courses:", error));
  }, [id]);
  return (
    <div>
      <CourseIntro
        id={courses?._id}
        title={courses?.title}
        image={courses?.image}
        price={courses?.price}
      />
      <Decription
        description={courses?.description}
        category={courses?.category}
        duration={courses?.duration}
      />
      <MoreProduct />
      <YtVideos />
      <Footer />
    </div>
  );
};

export default CoursesProductDetail;
