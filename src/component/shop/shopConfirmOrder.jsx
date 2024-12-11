
// import { useState } from 'react';
// import Modal from 'react-modal';
// import { useNavigate } from 'react-router-dom';

// const ShopConfirmOrder = () => {
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [thankYouModalIsOpen, setThankYouModalIsOpen] = useState(false);
//   const [selectedFile, setSelectedFile] = useState(null);
//   const navigate = useNavigate();

//   const products = [
//     {
//       id: 1,
//       title: "MODERN BLACK STANDING LEGO",
//       description: "High-quality wireless headphones with noise-cancelling technology.",
//       image: "https://example.com/images/wireless-headphones.jpg",
//       price: 79.99,
//       item: 2,
//       category: "Electronics",
//     },
//     {
//       id: 2,
//       title: "MODERN BLACK STANDING LEGO",
//       description: "Lightweight running shoes designed for maximum comfort and performance.",
//       image: "https://example.com/images/running-shoes.jpg",
//       price: 59.99,
//       item: 1,
//       category: "Footwear",
//     },
//     {
//       id: 3,
//       title: "MODERN BLACK STANDING LEGO",
//       description: "High-quality wireless headphones with noise-cancelling technology.",
//       image: "https://example.com/images/wireless-headphones.jpg",
//       price: 79.99,
//       item: 1,
//       category: "Electronics",
//     },
//   ];

//   const openModal = () => {
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//   };

//   const handleFileUpload = (e) => {
//     setSelectedFile(e.target.files[0]);
//   };

//   const handleConfirmOrder = () => {
//     console.log("Order confirmed with file:", selectedFile);
//     setModalIsOpen(false);
//     setThankYouModalIsOpen(true);
//   };

//   const goToHomePage = () => {
//     setThankYouModalIsOpen(false);
//     navigate('/');
//   };

//   const triggerFileInput = () => {
//     document.getElementById('fileInput').click();
//   };

//   const calculateTotal = () => {
//     const subtotal = products.reduce((total, product) => total + product.price * product.item, 0);
//     const shipping = 1125.0;
//     const discount = subtotal * 0.1;
//     const total = subtotal + shipping - discount;
//     return { subtotal, shipping, discount, total };
//   };

//   const { subtotal, shipping, discount, total } = calculateTotal();

//   return (
//     <div className="lg:px-14 px-5 lg:p-8 p-4 lg:w-1/3 lg:space-y-20 space-y-8">
//       {/* text */}
//       <div className="lg:space-y-8 space-y-4">
//         <p className="lg:text-4xl text-2xl font-bold">YOUR ORDER</p>
//         <p className="text-sm text-line">Review all the products you want to buy</p>
//       </div>

//       {/* map product */}
//       <div className="lg:space-y-5 space-y-2">
//         {products.map((product) => (
//           <div key={product.id} className="flex flex-row items-center space-x-4">
//             <img src={product.image} alt={product.title} className="w-12 h-12 rounded" />
//             <div>
//               <p className="font-bold">{product.title}</p>
//               <p className="text-sm">Quantity: {product.item}</p>
//               <p className="text-sm">Price: Pkr {product.price}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* line */}
//       <div className="flex flex-col lg:py-5 py-2">
//         <div className="h-0 border border-line"></div>
//       </div>

//       {/* total bills */}
//       <div className="justify-between lg:space-y-5 space-y-2">
//         <div className="flex flex-row justify-between">
//           <p className="text-sm">Shipping</p>
//           <p className="lg:text-xl text-sm font-bold">Pkr {shipping.toFixed(2)}</p>
//         </div>
//         <div className="flex flex-row justify-between">
//           <p className="text-sm">Discount 10%</p>
//           <p className="text-sm font-bold">Pkr {discount.toFixed(2)}</p>
//         </div>
//         <div className="flex flex-row justify-between">
//           <p className="text-sm">Price</p>
//           <p className="text-xl font-bold">Pkr {subtotal.toFixed(2)}</p>
//         </div>
//         <div className="flex flex-row justify-between">
//           <p className="text-sm">Total Price</p>
//           <p className="text-xl text-yellow font-bold">Pkr {total.toFixed(2)}</p>
//         </div>
//         <div className="lg:space-y-3 space-y-1 lg:py-4 py-2">
//           <div className="h-0 border border-line"></div>
//         </div>
//         {/* button */}
//         <div className="flex justify-center lg:py-4 py-2">
//           <button
//             onClick={openModal}
//             className="text-center lg:text-xl text-sm text-gold bg-brown py-2 lg:px-20 px-5"
//           >
//             Confirm Order
//           </button>
//         </div>
//       </div>

//       {/* Modal for file upload */}
//       <Modal
//         isOpen={modalIsOpen}
//         onRequestClose={closeModal}
//         className="fixed inset-0 flex items-center justify-center z-50"
//         overlayClassName="fixed inset-0 bg-black bg-opacity-50"
//       >
//         <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full relative">
//           <button
//             onClick={closeModal}
//             className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
//           >
//             &times;
//           </button>
//           <h2 className="text-xl font-bold mb-4">Upload your file here</h2>
//           <div className="flex items-center mb-4">
//             <input
//               type="text"
//               placeholder="No file chosen"
//               className="bg-white border p-1 w-full"
//               readOnly
//               value={selectedFile ? selectedFile.name : ''}
//             />
//             <button
//               onClick={triggerFileInput}
//               className="bg-blue-500 text-white px-4 py-2 rounded ml-2"
//             >
//               Browse
//             </button>
//             <input
//               type="file"
//               id="fileInput"
//               onChange={handleFileUpload}
//               className="hidden"
//             />
//           </div>
//           <div className="flex justify-end space-x-4">
//             <button
//               onClick={handleConfirmOrder}
//               className="bg-blue-500 text-white px-4 py-2 rounded"
//             >
//               Submit
//             </button>
//             <button
//               onClick={closeModal}
//               className="bg-gray-500 text-white px-4 py-2 rounded"
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       </Modal>

//       {/* Modal for thank you message */}
//       <Modal
//         isOpen={thankYouModalIsOpen}
//         onRequestClose={() => setThankYouModalIsOpen(false)}
//         className="fixed inset-0 flex items-center justify-center z-50"
//         overlayClassName="fixed inset-0 bg-black bg-opacity-50"
//       >
//         <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full relative">
//           <button
//             onClick={() => setThankYouModalIsOpen(false)}
//             className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
//           >
//             &times;
//           </button>
//           <h2 className="text-xl font-bold mb-4">Thank You!</h2>
//           <p className="mb-4 text-wrap ">Your order has been confirmed. Here are the items you have ordered:</p>
//           <ul className="mb-4">
//             {products.map((product) => (
//               <li key={product.id} className="mb-2">
//                 <div className="flex items-center space-x-4">
//                   <img src={product.image} alt={product.title} className="w-12 h-12 rounded" />
//                   <div>
//                     <p className="font-bold">{product.title}</p>
//                     <p className="text-sm">Quantity: {product.item}</p>
//                     <p className="text-sm">Price: Pkr {product.price}</p>
//                   </div>
//                 </div>
//               </li>
//             ))}
//           </ul>
//           <div className="border-t border-gray-200 pt-4">
//             <div className="flex justify-between mb-2">
//               <p className="text-sm">Shipping</p>
//               <p className="text-sm font-bold">Pkr {shipping.toFixed(2)}</p>
//             </div>
//             <div className="flex justify-between mb-2">
//               <p className="text-sm">Discount 10%</p>
//               <p className="text-sm font-bold">Pkr {discount.toFixed(2)}</p>
//             </div>
//             <div className="flex justify-between mb-2">
//               <p className="text-sm">Price</p>
//               <p className="text-sm font-bold">Pkr {subtotal.toFixed(2)}</p>
//             </div>
//             <div className="flex justify-between mb-2">
//               <p className="text-sm">Total Price</p>
//               <p className="text-sm font-bold text-yellow-600">Pkr {total.toFixed(2)}</p>
//             </div>
//           </div>
//           <div className="flex justify-end">
//             <button
//               onClick={goToHomePage}
//               className="bg-blue-500 text-white px-4 py-2 rounded"
//             >
//               Go To Home Page
//             </button>
//           </div>
//         </div>
//       </Modal>
//     </div>
//   );
// };

// export default ShopConfirmOrder;

import { useState } from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import mask from "../../assets/images/shopMask.svg"

const ShopConfirmOrder = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [thankYouModalIsOpen, setThankYouModalIsOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      title: "MODERN BLACK STANDING LEGO",
      description: "High-quality wireless headphones with noise-cancelling technology.",
      image: { mask },
      price: 79.99,
      item: 2,
      category: "Electronics",
    },
    {
      id: 2,
      title: "MODERN BLACK STANDING LEGO",
      description: "Lightweight running shoes designed for maximum comfort and performance.",
      image: { mask },
      price: 59.99,
      item: 1,
      category: "Footwear",
    },
    {
      id: 3,
      title: "MODERN BLACK STANDING LEGO",
      description: "High-quality wireless headphones with noise-cancelling technology.",
      image: { mask },
      price: 79.99,
      item: 1,
      category: "Electronics",
    },
  ];

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleFileUpload = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleConfirmOrder = () => {
    console.log("Order confirmed with file:", selectedFile);
    setModalIsOpen(false);
    setThankYouModalIsOpen(true);
  };

  const goToHomePage = () => {
    setThankYouModalIsOpen(false);
    navigate('/');
  };

  const triggerFileInput = () => {
    document.getElementById('fileInput').click();
  };

  const calculateTotal = () => {
    const subtotal = products.reduce((total, product) => total + product.price * product.item, 0);
    const shipping = 1125.0;
    const discount = subtotal * 0.1;
    const total = subtotal + shipping - discount;
    return { subtotal, shipping, discount, total };
  };

  const { subtotal, shipping, discount, total } = calculateTotal();

  return (
    <div className="lg:px-14 px-5 lg:py-8 py-4 lg:w-1/3 space-y-8 w-full">
      {/* Header */}
      <div className="space-y-4 text-center lg:text-left">
        <p className="lg:text-4xl text-2xl font-bold">YOUR ORDER</p>
        <p className="text-sm text-gray-600">Review all the products you want to buy</p>
      </div>

      {/* Product List */}
      <div className="space-y-6">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <img src={product.image} alt={product.title} className="w-16 h-16 sm:w-20 sm:h-20 rounded" />
            <div className="text-center sm:text-left">
              <p className="font-bold">{product.title}</p>
              <p className="text-sm">Quantity: {product.item}</p>
              <p className="text-sm">Price: Pkr {product.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 py-2"></div>

      {/* Total Bill Details */}
      <div className="space-y-4">
        <div className="flex justify-between">
          <p className="text-sm">Shipping</p>
          <p className="font-bold">Pkr {shipping.toFixed(2)}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-sm">Discount 10%</p>
          <p className="font-bold">Pkr {discount.toFixed(2)}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-sm">Price</p>
          <p className="font-bold">Pkr {subtotal.toFixed(2)}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-sm">Total Price</p>
          <p className="text-yellow-600 font-bold">Pkr {total.toFixed(2)}</p>
        </div>
      </div>

      {/* Confirm Button */}
      <div className="flex justify-center">
        <button onClick={openModal} className="bg-brown text-white px-6 py-2 text-sm lg:text-lg rounded-lg">
          Confirm Order
        </button>
      </div>

      {/* File Upload Modal */}
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="fixed inset-0 flex items-center justify-center z-50" overlayClassName="fixed inset-0 bg-black bg-opacity-50">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full relative">
          <button onClick={closeModal} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">&times;</button>
          <h2 className="text-xl font-bold mb-4">Upload your file here</h2>
          <div className="flex items-center mb-4">
            <input type="text" placeholder="No file chosen" className="bg-white border p-2 w-full" readOnly value={selectedFile ? selectedFile.name : ''} />
            <button onClick={triggerFileInput} className="bg-blue-500 text-white px-4 py-2 rounded ml-2">Browse</button>
            <input type="file" id="fileInput" onChange={handleFileUpload} className="hidden" />
          </div>
          <div className="flex justify-end space-x-4">
            <button onClick={handleConfirmOrder} className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
            <button onClick={closeModal} className="bg-gray-500 text-white px-4 py-2 rounded">Cancel</button>
          </div>
        </div>
      </Modal>

      {/* Thank You Modal */}
      <Modal isOpen={thankYouModalIsOpen} onRequestClose={() => setThankYouModalIsOpen(false)} className="fixed inset-0 flex items-center justify-center z-50" overlayClassName="fixed inset-0 bg-black bg-opacity-50">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full relative">
          <button onClick={() => setThankYouModalIsOpen(false)} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">&times;</button>
          <h2 className="text-xl font-bold mb-4">Thank You!</h2>
          <p>Your order has been confirmed. Here are the items you ordered:</p>
          <ul className="my-4 space-y-2">
            {products.map((product) => (
              <li key={product.id} className="flex space-x-4">
                <img src={product.image} alt={product.title} className="w-12 h-12 rounded" />
                <div>
                  <p className="font-bold">{product.title}</p>
                  <p className="text-sm">Quantity: {product.item}</p>
                  <p className="text-sm">Price: Pkr {product.price}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="border-t border-gray-200 pt-4">
            <div className="flex justify-between">
              <p className="text-sm">Shipping</p>
              <p className="text-sm font-bold">Pkr {shipping.toFixed(2)}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-sm">Discount 10%</p>
              <p className="text-sm font-bold">Pkr {discount.toFixed(2)}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-sm">Total Price</p>
              <p className="text-yellow-600 font-bold">Pkr {total.toFixed(2)}</p>
            </div>
          </div>
          <div className="mt-4 text-center">
            <button onClick={goToHomePage} className="bg-blue-500 text-white px-6 py-2 rounded">Go to Home</button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ShopConfirmOrder;
