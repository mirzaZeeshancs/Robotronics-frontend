import  { useState } from 'react';
import mask from  "../../assets/images/shopMask.svg"

const stepsData = [
  {
    "id": 1,
    "title": 'CART',
    "description": 'Review all your product and edit the number.',
    "imageUrl": '../../assets/logo/cartaddshoppingbag.svg', // Sample image URL for Step 1
  },
  {
    "id": 2,
    "title": 'CUSTOMER INFORMATION',
    "description": 'Add your name, phone number and address.',
    "imageUrl": '../../assets/logo/cartusercircle.svg', // Sample image URL for Step 2
  },
  {
    "id": 3,
    "title": 'SHIPPING & PAYMENT',
    "description": 'With many payment method, included yours.',
    "imageUrl": '../../assets/logo/cartcreditcard.svg', // Sample image URL for Step 3
  },
  {
    "id": 4,
    "title": 'REVIEW',
    "description": 'View all your information before the confimation.Step 4 Description',
    "imageUrl": '../../assets/logo/carteye.svg', // Sample image URL for Step 4
  },
];

const HorizontalStepper = ({ numSteps = 4 }) => {
  const [activeStep, setActiveStep] = useState(1); // Initial active step

  const handleStepClick = (step) => {
    setActiveStep(step); // Update active step when a step is clicked
  };

  return (
    <div className="flex flex-col items-center space-y-2  my-20">
      {/* Horizontal line */}
      <div className="w-full h-0.5 bg-black"></div>

      {/* Steps */}
      <div className="flex justify-between space-x-2 w-full max-w-xl">
        {stepsData.slice(0, numSteps).map((step) => {
          const { id, title, description, imageUrl } = step;
          const isActive = id === activeStep;

          return (
            <div
              key={id}
              className={`flex flex-col items-center cursor-pointer  ${
                isActive ? 'text-black' : 'text-gray-600'
              }`}
              onClick={() => handleStepClick(id)}
            >
              {/* Step dot (circle) */}
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${
                  isActive ? 'bg-brown' : 'bg-gray-300'
                }`}
              ></div>
              {/* Step content */}
              <div className="text-sm text-center  ">
                 <span className='bg-white ' >
                 <img src={mask}  className="w-12 h-12 " style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
                 </span>
                <div className="font-semibold">{title}</div>
                <div className="text-gray-600 text-wrap">{description}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HorizontalStepper;

