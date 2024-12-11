import Header from "../../component/header";
import Footer from "../../component/footer";
const Error = () => {
  return (
    <div className="bg-background">
      <div className="p-5">
        <Header />
      </div>
      <div className="flex flex-col h-svh items-center justify-center space-y-10">
        <div className="flex flex-row justify-center space-x-5 items-center  ">
          <h1 className=" text-6xl poppins-extrabold text-gray-600">404</h1>
          <h2 className=" text-6xl poppins-extrabold text-gray-600"> Not Found</h2>
        </div>
        <div className="text-center space-y-10" >
          <p className="text-xl poppins-light text-gray-600">
            Your visited page was not found. you may go home page.
            <br />
            <br />
            {/* Please go back to our <a href="/">homepage</a>. */}
            <button className="bg-yellow poppins-light rounded-md p-2" >
              <a href="/" className="text-brown poppins-light px-10 py-2 " >Back to Home page</a>{" "}
            </button>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Error;
