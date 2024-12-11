 import { useEffect } from "react"
import ceo1 from "../assets/images/ceo1.svg"
 import ceo2 from "../assets/images/ceo2.svg"
 import ceo3 from "../assets/images/ceo3.svg" 
 import ceo4 from "../assets/images/ceo4.svg"
import ceo5 from "../assets/images/ceo5.svg"
// import ceo6 from "../assets/images/ceo6.svg"
import ceo7 from "../assets/images/ceo7.svg"
import star from "../assets/logo/Stars.svg"
import Aos from "aos"

const Testimonial = () => {

  useEffect(() => {
    Aos.init(); // Initialize AOS library
  }, []);

  return (
    <div className="flex flex-col" >
      {/* layer 1 */}
      <div className="lg:flex justify-center content-center lg:pt-20 p-5" >
        <p className="text-brown lg:text-6xl text-2xl poppins-semibold m-5 justify-center items-center " data-aos="fade-up" >Are my clients happy?</p>
        </div>
      {/* layer 2 */}
      <div className="  flex w-full justify-between lg:gap-5 gap-2 p-2 lg:p-5">
        {/* block 1 */}
        <div className="flex-1 lg:space-y-4 space-y-2 "> 
        {/* div 1 */}
        <div className="flex  flex-col justify-center border border-gray rounded-2xl content-center ">
         <img className="flex " src={ceo1}/>
         <div className="lg:p-5 p-2">
         <p className=" py-2 text-brown lg:text-base text-sm poppins-regular text-wrap ">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
         <p className=" text-brown lg:text-base text-sm poppins-bold font-bold" >Amet minim</p>
         <p className=" text-brown lg:text-base text-sm poppins-regular" >CEO, Avito</p>
         <p className=" py-2 " ><img src={star} /></p>
         </div>
        </div>
        {/* div 2 */}
        <div className="flex p-5 border border-gray rounded-2xl">
          {/* image */}
         <img className="self-start" src={ceo3}/>
          <div className="flex flex-col lg:px-8 p-4 ">
            <p className=" text-brown text-wrap font-black poppins-bold" >Jon Sari</p>
            <p>CEO, Avito</p>
            <img className="lg:h-10 lg:w-20" src={star}/>
            <p className=" text-brown lg:text-base text-sm poppins-regular text-wrap" >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam</p>
          </div>
        </div>
        </div>
        {/* block 2 */}
        <div className="flex-1 flex flex-col justify-between lg:space-y-4">
          {/* div 1 */}
          <div className="lg:flex  border border-gray rounded-2xl ">
              <img className="flex w-full" src={ceo2}/>
            <div className=" lg:px-5  ">
              <p className=" py-2 text-brown lg:text-base text-sm text-wrap poppins-regular"> Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
              <p className=" text-brown text-sm lg:text-base font-bold poppins-bold">Amet minim</p>
              <p className=" text-brown text-sm  poppins-regular">CEO, Avito</p>
              <img className="py-2" src={star}/>
            </div>
          </div>
          {/* div 2 */}
          <div className=" lg:p-5 border border-gray rounded-2xl">
            {/* img */}
            <div className="flex">

              <img className="flex lg:p-5" src={ceo5}/>
              <div className="flex lg:p-5 flex-col">
              <p className=" text-brown text-sm lg:text-base font-bold poppins-bold">Amet minim</p>
              <p className=" text-brown text-sm poppins-regular">CEO, Avito</p>
              <img src={star}/>
            </div>
              </div>
            {/* imfo */}
            <div className="">
              <p className="py-2 text-brown lg:text-base text-sm text-wrap poppins-regular" > Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
              </div>
          </div>
          {/* div 3 */}
          <div className="lg:p-5 border border-gray rounded-2xl">
            {/* img */}
            <div className="flex">

              <img className="flex lg:p-5" src={ceo5}/>
              <div className="flex lg:p-5 flex-col">
              <p className=" text-brown text-sm lg:text-base font-bold poppins-bold">Amet minim</p>
              <p className=" text-brown text-sm poppins-regular">CEO, Avito</p>
              <img src={star}/>
            </div>
              </div>
            {/* imfo */}
            <div className="">
              <p className="py-2 text-brown lg:text-base text-sm text-wrap poppins-regular" > Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
              </div>
          </div>
        </div>
        {/* block 3 */}
        <div className="flex-1 lg:space-y-4 " > 
        {/* div 1 */}
        <div className="flex p-5 border border-gray rounded-2xl">
          {/* image */}
         <img className="self-start" src={ceo4}/>
          <div className="flex flex-col lg:px-8 ">
          <p className=" text-brown text-sm lg:text-base font-bold poppins-bold">Amet minim</p>
              <p className=" text-brown text-sm poppins-regular">CEO, Avito</p>
            <img className="lg:h-10 lg:w-20" src={star}/>
            <p className=" text-brown lg:text-base text-sm text-wrap poppins-regular" >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam</p>
          </div>
        </div>
        {/* div 2 */}
        <div className="flex p-5 border border-gray rounded-2xl">
          {/* image */}
         <img className="self-start" src={ceo7}/>
          <div className="flex flex-col lg:px-8 ">
          <p className=" text-brown text-sm lg:text-base font-bold poppins-regular">Amet minim</p>
              <p className=" text-brown text-sm poppins-bold">CEO, Avito</p>
            <img className="lg:h-10 lg:w-20" src={star}/>
            <p className=" text-brown lg:text-base text-sm text-wrap poppins-regular" >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial;
