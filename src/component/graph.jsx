import CanvasJSReact from '@canvasjs/react-charts';
import logo from "../assets/logo/Robotrinic.svg";
import robot from "../assets/images/robot(1).svg";
import circleg from "../assets/logo/goldencircle.svg";
import circleb from "../assets/logo/browncircle.svg";
import { useEffect } from 'react';
import Aos from 'aos';

const { CanvasJSChart } = CanvasJSReact;

const Graph = () => {

    useEffect(() => {
        Aos.init(); // Initialize AOS library
      }, []);

    const options = {
        animationEnabled: true,
        theme: "light2",
        backgroundColor: "#ebe5e2",
        axisY: {
        title: "",
        logarithmic: true,
        labelFormatter: () => "" // Remove labels on the y-axis
    },
        
        toolTip: {
          enabled: false // Disable tooltip
      },
      zoomEnabled: false, // Disable zoom
        exportEnabled: false, // Disable export
        data: [{
            type: "spline",
            showInLegend: true,
            dataPoints: [
                { x: new Date(2000, 0), y: 2000},
                { x: new Date(2010, 0), y: 2010},
                { x: new Date(2020, 0), y: 2020},
                { x: new Date(2023, 0), y: 2023},
                { x: new Date(2024, 0), y: 2024}
            ]
        }]
    }

    return (
        <div  >
            {/* img & text */}
            <div className="flex space-x-5 text-center  bg-gray">
                {/* img */}
                <div className='md:ml-20 p-5 md:mt-10'>
                    <img className="w-20 h-30" src={logo} alt="logo" />
                </div>
                {/* text */}
                <div className="mt-10" data-aos="fade-up" >
                    <p className="md:text-6xl text-3xl text-wrap text-left poppins-bold	text-brown">
                        Educating The power of
                    </p>
                    <p className="md:text-6xl text-3xl text-wrap text-left poppins-bold text-yellow">
                        Robotics{" "}
                        <span className="md:text-6xl text-wrap text-3xl text-left font-extrabold text-brown">
                            which was unthinkable
                        </span>
                    </p>
                    <p className="md:text-6xl text-wrap text-3xl text-left poppins-bold	text-brown">
                        previously
                    </p>
                </div>
            </div>
            {/* graph */}
            <div className="flex w-full justify-between bg-gray"  >
                {/* text */}
                <div className="w-2/3 md:mt-14 p-5 md:ml-20" data-aos="fade-up" >
                    <div className="md:text-3xl text-xl text-wrap text-left poppins-regular text-brown">
                        In 2017,
                        <span className="md:text-5xl text-2xl text-wrap text-left poppins-semibold text-brown">
                            {" "}
                            ROBOTRONICS
                        </span>
                        <div className="md:text-3xl text-xl text-wrap text-left poppins-regular text-brown">
                            contributed 10% in Pakistan
                        </div>
                        <div className="md:text-3xl text-xl text-wrap text-left poppins-regular text-brown">
                            Educational growth
                        </div>
                    </div>
                    {/* circles */}
                    <div className="flex space-x-5 text-center ">
                        <div className="flex flex-col mt-28">
                            <div className="flex items-center space-x-4">
                                <img src={circleg} alt="goldcircle" className="mr-2 poppins-ligh " />
                                Progress
                            </div>
                            <div className="flex items-center space-x-4">
                                <img src={circleb} alt="browncircle" className="md:mr-2 poppins-ligh " />
                                Target
                            </div>
                            <div className="flex items-center space-x-4">
                                <img src={circleb} alt="browncircle" className="mr-2 poppins-ligh " />
                                Future
                            </div>
                        </div>
                        <div>
                            <img data-aos="fade-up" src={robot} alt="robot" />
                        </div>
                       
                    </div>
                     
                </div>
                {/* graph */}
                {/* <div className='w-1/3'>
                    <CanvasJSChart options={options} />
                </div> */}
            </div>
        </div>
    );
};

export default Graph;
