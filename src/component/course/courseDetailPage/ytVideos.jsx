const YtVideos = () => {
  return (
    <div className="p-5 bg-gray">
      <p className="lg:text-6xl text-4xl text-brown text-center font-bold">FQA</p>
      <div className="lg:p-10 p-5 lg:flex flex-row lg:space-x-5 lg:space-y-0 space-y-8  justify-center">
        {/* video 1 */}
        <div className=" bg-white  ">
          {/* eslint-disable-next-line react/no-unknown-property */}
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/rfscVS0vtbw?autoplay=1"
            title="YouTube video player"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div className="p-6">
            <p className="text-base poppins-light text-gold">23 Feb, 2022</p>
            <p className="lg:text-2xl text-xl text-wrap text-brown poppins-bold">
              Python Initial Language
            </p>
            <p className="text-wrap poppins-extralight text-xs text-line">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        {/* video 2 */}
        <div className=" bg-white">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/_uQrJ0TkZlc?autoplay=1"
            title="YouTube video player"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div className="p-6">
            <p className="text-base poppins-lights text-gold">23 Feb, 2022</p>
            <p className="lg:text-2xl text-xl text-wrap text-brown poppins-bold">
              Python Initial Language
            </p>
            <p className="text-wrap poppins-extralight text-xs text-line">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        {/* video 3 */}
        <div className=" bg-white">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/XnSasPR2KJI?autoplay=1"
            title="YouTube video player"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div className="p-6">
            <p className="text-base poppins-light text-gold">23 Feb, 2022</p>
            <p className="lg:text-2xl text-xl text-wrap text-brown poppins-bold">
              Python Initial Language
            </p>
            <p className="text-wrap poppins-extralight text-xs text-line">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YtVideos;
