import python from "../assets/images/python.svg"
import time from "../assets/logo/time-svgrepo-com 1.svg"
import download from "../assets/logo/download.svg"
import sale from "../assets/logo/sales.svg" 
import img7 from "../assets/logo/shopStars.svg"
const ShopItems = () => {
  return (
    <div>
        <div className="flex-1 xl:w-1/4 md:w-1/2 p-4"  >
            <div>
              <div className="bg-white p-6 rounded-xl">
                <img
                  className="h-50 rounded-xl w-full object-cover object-center"
                  src={python}
                  alt="content"
                />
                {/* name price AI */}
                <div className="flex flex-row">
                  <h3 className="tracking-widest text-gray-900 text-lg font-bold title-font  py-5">
                    Artificial Intelligence <br />
                    and Machine Learning{" "}
                  </h3>
                  <div className="flex flex-col p-5 px-16 ">
                  <img  className="flex p-2 " src={img7}/>
                  <p className="flex text-gold font-bold">PKR 50,000</p>
                  </div>
                </div>
                {/*doted line */}
                <div className="w-full h-0.5 border border-dotted border-black"></div>
                <div className="flex justify-center items-center">
                  <div className="flex m-5">
                    <img className="p-1" src={time} />
                    22hr 30min
                  </div>
                  <div className="flex m-5">
                    <img className="p-1" src={download} />
                    34 Course
                  </div>
                  <div className="flex m-5">
                    <img className="p-1" src={sale} />
                    250 Sales
                  </div>
                </div>
              </div>
            </div>
            <button className="bg-yellow text-xl px-40 font-bold mt-4 p-4 rounded flex justify-center items-center" data-aos="fade-up" >
              Join Course
            </button>
          </div> 
    </div>
  )
}

export default ShopItems;