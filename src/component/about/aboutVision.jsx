import mission from "../../assets/images/aboutMission.svg";
import vision from "../../assets/images/aboutVision.svg";
import quote from "../../assets/images/aboutquote.svg"
const AboutVision = () => {
  return (
    <div className="flex flex-col bg-black p-4 ">
      {/* block 1 */}
      <div className="lg:flex flex-row lg:p-10 p-4 lg:justify-between items-center ">
        {/* div 1 */}
        <div className="flex-1 flex flex-row p-2 ">
          <img className="lg:h-20 lg:w-20 h-10 w-10 px-2 " src={mission} />
          <div>
            <p className="text-white lg:pb-4 pb-2 text-bold poppins-semibold lg:text-4xl text-2xl">MISSION</p>
            <p className="text-wrap poppins-light text-white text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              dolores facere, ad quisquam id adipisci nihil, ipsum minus debitis
              voluptate ullam, sapiente eum dignissimos doloremque voluptatum
              in. Velit, molestias quidem.
              <p className="py-2 poppins-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Maiores, reprehenderit doloremque! Reprehenderit, similique.
                Asperiores blanditiis a quasi fuga rerum voluptatem, assumenda
                nostrum corrupti provident doloremque temporibus, obcaecati
                dignissimos. Ipsum, nemo.
              </p>
            </p>
          </div>
        </div>
        <div className="flex-1 flex flex-row p-2">
          <img className="lg:h-20 lg:w-20 h-10 w-10 px-2" src={vision} />
          <div>
            <p className="text-white lg:pb-4 pb-2 text-bold poppins-semibold lg:text-4xl text-2xl">VISION</p>
            <p className="text-wrap text-white poppins-light text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Temporibus non ipsum iure namshri dolor quam, enim sunt eligendi natus
              earum ex quasi possimus similique solutanamri reprehenderit voluptates
              laborum? Voluptatum, at!{" "}
              <p className="py-2 poppins-light ">
                {" "}
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Obcaecati quibusdam id veniam, delectus nostrum debitis minima
                esse dolore eum mollitia laborum eius blanditiis. Nobis, animi?
                Incidunt similique ipsum culpa corporis.
              </p>{" "}
            </p>
          </div>
        </div>
      </div>
      {/* block 2 */}
      <div className="lg:flex lg:p-16 p-8 flex-row justify-between items-center ">
        <div>
          <blockquote>
            <p className="lg:text-2xl text-sm italic poppins-light text-wrap font-medium text-white dark:text-white">
              At Everyday Robots, we are building machines to learn and operate
              alongside us.Given our progress so far,I am confident helper robots
              will add tremendous value to society.They will work alongside us,
              help care for us as we age and improve our lives in ways that are
              unimaginable.
            </p>
          </blockquote>
        </div>
        <div className="p-2" >
          <img className="" src={quote} />
          <p className="lg:text-2xl text-xl text-gold poppins-light" >Peter Nammy</p>
          <p className="text-white  poppins-light" >Robotics Engineer</p>
        </div>
      </div>
    </div>
  );
};

export default AboutVision;
