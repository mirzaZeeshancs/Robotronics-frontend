import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import logo from '../assets/logo/Robotrinic.svg';
import robot from '../assets/images/robot(1).svg';
import circleg from '../assets/logo/goldencircle.svg';
import circleb from '../assets/logo/browncircle.svg';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'; // Ensure AOS styles are imported

// Register Chart.js modules
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

// Subcomponents
const Header = () => (
    <div className="flex space-x-5 text-center bg-gray">
        <div className='md:ml-20 p-5 md:mt-10'>
            <img className="w-20 h-30" src={logo} alt="Logo" aria-label="Company Logo" />
        </div>
        <div className="mt-10" data-aos="fade-up">
            <p className="md:text-6xl text-3xl text-wrap text-left poppins-bold text-brown">
                Educating The power of
            </p>
            <p className="md:text-6xl text-3xl text-wrap text-left poppins-bold text-yellow">
                Robotics{' '}
                <span className="md:text-6xl text-wrap text-3xl text-left font-extrabold text-brown">
                    which was unthinkable
                </span>
            </p>
            <p className="md:text-6xl text-wrap text-3xl text-left poppins-bold text-brown">
                previously
            </p>
        </div>
    </div>
);

const InfoSection = () => (
    <div className="w-2/3 md:mt-14 p-5 md:ml-20" data-aos="fade-up">
        <div className="md:text-3xl text-xl text-wrap text-left poppins-regular text-brown">
            In 2017,
            <span className="md:text-5xl text-2xl text-wrap text-left poppins-semibold text-brown">
                {' '}ROBOTRONICS
            </span>
            <div className="md:text-3xl text-xl text-wrap text-left poppins-regular text-brown">
                contributed 10% to Pakistan's
            </div>
            <div className="md:text-3xl text-xl text-wrap text-left poppins-regular text-brown">
                Educational growth
            </div>
        </div>

    <div className="mt-10">
        <div className="text-center">
            <div>
                <img data-aos="fade-up" src={robot} alt="Robot illustration" aria-label="Robot Illustration"/>
            </div>
    </div>

    <div className="flex flex-col mt-5">
        <div className="flex items-center space-x-4">
            <img src={circleg} alt="Progress" className="mr-2" aria-label="Progress Circle" />
            <span>Progress</span>
        </div>
        <div className="flex items-center space-x-4">
            <img src={circleb} alt="Target" className="mr-2" aria-label="Target Circle" />
            <span>Target</span>
        </div>
        <div className="flex items-center space-x-4">
            <img src={circleb} alt="Future" className="mr-2" aria-label="Future Circle" />
            <span>Future</span>
        </div>
    </div>
</div>

    </div>
);

const ChartSection = ({ data, options }) => (
    <div className='w-[30%] md:w-[65%] m-20'>
        <Line data={data} options={options} aria-label="Line Chart" />
    </div>
);

// Main Component
const Graph = () => {
    useEffect(() => {
        Aos.init({ duration: 1200 }); // Initialize AOS with animation duration
    }, []);

    // Chart data
    const data = {
        labels: ['2000', '2010', '2020', '2023', '2024'], // X-axis labels
        datasets: [
            {
                label: '',
                data: [60, 40, 70, 80, 100], // Adjusted data points for a slope
                borderColor: 'rgb(249 159 14)', // Line color
                backgroundColor: 'rgb(249 159 14)', // Line fill color
                tension: 0.4, // Smoothness of the line
            },
        ],
    };

    // Chart options
    const options = {
        responsive: true,
        scales: {
            y: {
                ticks: {
                    display: false, // Hide y-axis ticks
                },
                grid: {
                    display: false, // Hide y-axis grid lines
                },
                title: {
                    display: false, // Hide y-axis title
                },
            },
            x: {
                title: {
                    display: true, // Show x-axis title
                },
            },
        },
    };

    return (
        <div>
            <Header />
            <div className="flex w-full justify-between bg-gray">
                <InfoSection />
                <ChartSection data={data} options={options} />
            </div>
        </div>
    );
};

export default Graph;
