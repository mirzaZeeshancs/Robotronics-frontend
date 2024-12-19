import product from "../../../assets/images/productdetail.png";
import star from "../../../assets/images/shopStar.svg"
const MoreProduct = () => {
  return (
    <div className="bg-gray p-14 ">
      {/* product */}
      <div className="space-y-8" >
        {/* title */}
        <p className="lg:text-5xl text-2xl poppins-bold text-brown text-center"data-aos="fade-right" data-aos-duration="2000" data-aos-delay="4000">
          You May Also Like This
        </p>
        {/* dec */}
        <p className="text-line text-wrap poppins-light text-center"data-aos="fade-left" data-aos-duration="2000" data-aos-delay="4000">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod
        </p>
        {/* product img */}
        <div className="p-5 lg:flex flex-row justify-between lg:space-x-14  "data-aos="fade-up" data-aos-duration="2000" data-aos-delay="4000">
          <div>
            <img src={product} alt="" />
            <div className="justify-center space-y-3" >
              {/* product name */}
            <p className="text-line text-center poppins-light" >Robotronics Robot</p>
            {/* rating */}
            <img src={star} className="lg:px-44 px-14" alt="" />
            {/* price */}
            <p className="text-line text-center poppins-light" >Pkr 2668.15</p>
            </div>
          </div>
          <div>
            <img src={product} alt="" />
            <div className="justify-center space-y-3" >
              {/* product name */}
            <p className="text-line poppins-regular text-center poppins-light" >Robotronics Robot</p>
            {/* rating */}
            <img src={star} className="lg:px-44 px-14" alt="" />
            {/* price */}
            <p className="text-line text-center poppins-regular poppins-light" >Pkr 2668.15</p>
            </div>
          </div>
          <div>
            <img src={product} alt="" />
            <div className="justify-center space-y-3 " >
              {/* product name */}
            <p className="text-line text-center" >Robotronics Robot</p>
            {/* rating */}
            <img src={star} className="lg:px-44 px-14" alt="" />
            {/* price */}
            <p className="text-line text-center" >Pkr 2668.15</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreProduct;