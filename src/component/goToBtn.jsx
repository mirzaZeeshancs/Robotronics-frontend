const BoToBtn = () => {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    // <div className=" flex justify-center align-center " onClick={goToTop}>
    //   <button className="lg:h-20 lg:w-10 border-4 border-gold rounded-3xl fixed bottom-40 right-10 z-50 flex justify-center items-center cursor-pointer ">
    //    <div className="lg:h-8" >
    //    <div className="h-3 w-0  border-4 border-gold rounded-3xl mx-3"></div>
    //    </div>
    //   </button>
    // </div>
    <div className="flex justify-center align-center" onClick={goToTop}>
      <button className="h-16 w-8 lg:h-20 lg:w-10 border-4 border-gold rounded-3xl fixed bottom-10 lg:bottom-40 right-5 lg:right-10 z-50 flex justify-center items-center cursor-pointer">
        <div className="h-6 lg:h-8">
          <div className="h-2 lg:h-3 w-0 border-4 border-gold rounded-3xl mx-2 lg:mx-3"></div>
        </div>
      </button>
    </div>
  );
};

export default BoToBtn;

{
  /* <div class="bg-white bg-opacity-50 border border-gray-300 p-4 w-64 mx-auto mt-8 rounded-lg text-center text-gray-800">
        This is a transparent div with a transparent background using Tailwind CSS.
    </div> */
}
