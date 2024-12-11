import Header from "../header";
const Intro = () => {
  return (
    <div className="blog">
      <div className="p-5">
        <Header />
      </div>

      <div className="lg:p-10 lg:pt-32 pt-24 lg:pl-28 pl-10 space-y-4  " >
      <p className="text-white lg:text-7xl text-4xl poppins-extrabold">Turning science </p>
      <p className="text-white lg:text-7xl text-4xl poppins-bold"> Fiction into </p>
      <p className="text-gold lg:text-7xl text-4xl poppins-bold pb-5"> Reality</p>
      <a href="/CareerJob">
      <button className="text-brown lg:text-2xl poppins-light text-sm bg-white p-5 rounded-xl" >Start Your Career With Us</button>
      </a>
      </div>
    </div>
  );
};

export default Intro;
