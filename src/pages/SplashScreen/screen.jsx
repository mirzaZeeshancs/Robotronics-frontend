
import React from 'react'
import img from '../../assets/images/bosten.svg'
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const Screen = () => {
    return (
        <div className="screen bg-gray">
            {/* div-1 */}
            <div>
                <div className='text-center pt-20 poppins-extralight md:text-6xl text-3xl p-5' >
                    <p>WELCOME TO</p>
                </div>
                <div className=' flex justify-center items-center' >
                    <h1 className=" lg:text-9xl md:text-7xl text-5xl font-extrabold" style={{ backgroundImage: "url('../../assets/images/bosten.svg')" }}>
                        ROBOTRONICS
                    </h1>
                </div>
            </div>
            {/* div-2 */}
            <div className="flex flex-row px-10 justify-end">
                <div className='flex lg:space-x-32'>
                    <a className='pt-24'
                    href='/'>
                        <button className="text-sm md:text-lg border border-brown rounded-full w-32 h-32  hover:bg-black hover:text-white transition-all duration-300">
                            Explore Us &rarr;
                        </button>
                    </a>

                    <div className="mt-12">
                        <img
                            src={img}
                            alt="Robot"
                            className="w-60 md:w-96"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Screen;
