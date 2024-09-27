// {// // // src/pages/Generate.js
// // // import React from 'react';
// // // import { motion } from 'framer-motion';

// // // const Generate = () => {
// // //   return (
// // //     <div className="bg-gray-50 min-h-screen py-12 px-6">
// // //       <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
// // //         <motion.h2
// // //           className="text-3xl font-bold text-gray-800 mb-6"
// // //           initial={{ opacity: 0, y: -50 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           transition={{ duration: 0.6 }}
// // //         >
// // //           Generate Document
// // //         </motion.h2>
// // //         <motion.p
// // //           className="text-gray-700 mb-6"
// // //           initial={{ opacity: 0, y: 20 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           transition={{ duration: 0.6, delay: 0.3 }}
// // //         >
// // //           Here you can generate your documents. Provide the necessary details below.
// // //         </motion.p>
// // //         {/* Add your form or content here */}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Generate;


// // // src/pages/Generate.js
// // import React, { useState } from 'react';
// // import { motion } from 'framer-motion';

// // const Generate = () => {
// //   const [formData, setFormData] = useState({
// //     name: '',
// //     dob: '',
// //     gender: '',
// //     aadhar: ''
// //   });
// //   const [errors, setErrors] = useState({});

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({
// //       ...formData,
// //       [name]: value
// //     });
// //   };

// //   const validateForm = () => {
// //     let valid = true;
// //     let newErrors = {};

// //     // Validate Aadhar number
// //     if (formData.aadhar) {
// //       const aadharNumber = formData.aadhar.replace(/\s+/g, ''); // Remove any whitespace
// //       if (aadharNumber.length < 12) {
// //         newErrors.aadhar = 'Aadhar number must be exactly 12 digits.';
// //         valid = false;
// //       } else if (!/^\d{12}$/.test(aadharNumber)) {
// //         newErrors.aadhar = 'Aadhar number must be numeric.';
// //         valid = false;
// //       }
// //     }

// //     setErrors(newErrors);
// //     return valid;
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();

// //     if (!validateForm()) {
// //       return;
// //     }

// //     console.log('Form data:', formData);
// //     // Add your form submission logic here
// //   };

// //   return (
// //     <div className="bg-gray-50 min-h-screen py-12 px-6">
// //       <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
// //         <motion.h2
// //           className="text-3xl font-bold text-gray-800 mb-6"
// //           initial={{ opacity: 0, y: -50 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.6 }}
// //         >
// //           Generate Document
// //         </motion.h2>
// //         <motion.p
// //           className="text-gray-700 mb-6"
// //           initial={{ opacity: 0, y: 20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.6, delay: 0.3 }}
// //         >
// //           Please fill in the details below to generate your document.
// //         </motion.p>

// //         <form onSubmit={handleSubmit} className="space-y-6">
// //           <div>
// //             <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2">
// //               Name
// //             </label>
// //             <input
// //               type="text"
// //               id="name"
// //               name="name"
// //               value={formData.name}
// //               onChange={handleChange}
// //               placeholder="Enter your name"
// //               className="block w-full mt-1 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
// //               required
// //             />
// //           </div>

// //           <div>
// //             <label htmlFor="dob" className="block text-gray-700 text-sm font-semibold mb-2">
// //               Date of Birth
// //             </label>
// //             <input
// //               type="date"
// //               id="dob"
// //               name="dob"
// //               value={formData.dob}
// //               onChange={handleChange}
// //               className="block w-full mt-1 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
// //               required
// //             />
// //           </div>

// //           <div>
// //             <label htmlFor="gender" className="block text-gray-700 text-sm font-semibold mb-2">
// //               Gender
// //             </label>
// //             <select
// //               id="gender"
// //               name="gender"
// //               value={formData.gender}
// //               onChange={handleChange}
// //               defaultValue=""
// //               className="block w-full mt-1 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
// //               required
// //             >
// //               <option value="" disabled>Select Gender</option>
// //               <option value="male">Male</option>
// //               <option value="female">Female</option>
// //               <option value="other">Other</option>
// //             </select>
// //           </div>

// //           <div>
// //             <label htmlFor="aadhar" className="block text-gray-700 text-sm font-semibold mb-2">
// //               Aadhar Number
// //             </label>
// //             <input
// //               type="text"
// //               id="aadhar"
// //               name="aadhar"
// //               value={formData.aadhar}
// //               onChange={handleChange}
// //               placeholder="Enter your Aadhar number"
// //               className={`block w-full mt-1 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 ${errors.aadhar ? 'border-red-500' : ''}`}
// //               maxLength="12"
// //               required
// //             />
// //             {errors.aadhar && <p className="text-red-600 text-sm mt-1">{errors.aadhar}</p>}
// //           </div>

// //           <motion.button
// //             type="submit"
// //             className="w-full bg-blue-500 text-white py-3 rounded-md shadow-lg hover:bg-blue-600 transition-transform transform-gpu"
// //             whileHover={{ scale: 1.05 }}
// //           >
// //             Generate
// //           </motion.button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Generate;
// }

// src/pages/Generate.js


import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { FaFileUpload } from 'react-icons/fa';


async function addBlock(blockData) {
  try {
    // Make the POST request
    const response = await axios.post('http://192.168.247.170:3000/api/blockchain/add-block', blockData);

    // Handle the response
    console.log('Block added successfully:', response.data);
    return response.data;
  } catch (error) {
    // Handle any errors
    console.error('Error adding block:', error.message);
    return null; // Ensure to return null if there's an error
  }
}
const Generate = () => {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    gender: '',
    aadhar: '',
    photo: null // Added photo state
  });
  const [errors, setErrors] = useState({});
  const canvasRef = useRef(null);
  const photoInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData({
        ...formData,
        [name]: files[0] // Update photo state with the selected file
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const validateForm = () => {
    let valid = true;
    let newErrors = {};

    // Validate Aadhar number
    if (formData.aadhar) {
      const aadharNumber = formData.aadhar.replace(/\s+/g, ''); // Remove any whitespace
      if (aadharNumber.length < 12) {
        newErrors.aadhar = 'Aadhar number must be exactly 12 digits.';
        valid = false;
      } else if (!/^\d{12}$/.test(aadharNumber)) {
        newErrors.aadhar = 'Aadhar number must be numeric.';
        valid = false;
      }
    }

    setErrors(newErrors);
    return valid;
  };

  const generateVoterID = (aadhaar_no) => {
    let hash = 0;
    for (let i = 0; i < aadhaar_no.length; i++) {
      hash = (hash << 5) - hash + aadhaar_no.charCodeAt(i);
      hash = hash & hash; // Convert to 32-bit integer
    }
    return Math.abs(hash).toString().padStart(8, '0');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const voterID = generateVoterID(formData.aadhar);
    drawVoterIDCard(formData.name, formData.dob, formData.gender, voterID, formData.photo);

    const blockData = {
      document_content: 
        voterID
    };

    const apiResult = addBlock(blockData);

    console.log('Form data:', formData);
  };

  const drawVoterIDCard = (name, dob, gender, voterID, photo) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
  
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height-20);
  
    // Draw background with rounded corners
    const cornerRadius = 15;
    ctx.fillStyle = '#ffffff'; // Light grey background
    ctx.beginPath();
    ctx.moveTo(cornerRadius, 0);
    ctx.lineTo(canvas.width - cornerRadius, 0);
    ctx.quadraticCurveTo(canvas.width, 0, canvas.width, cornerRadius);
    ctx.lineTo(canvas.width, canvas.height - cornerRadius);
    ctx.quadraticCurveTo(canvas.width, canvas.height, canvas.width - cornerRadius, canvas.height);
    ctx.lineTo(cornerRadius, canvas.height);
    ctx.quadraticCurveTo(0, canvas.height, 0, canvas.height - cornerRadius);
    ctx.lineTo(0, cornerRadius);
    ctx.quadraticCurveTo(0, 0, cornerRadius, 0);
    ctx.closePath();
    ctx.fill();
  
    // Draw border with rounded corners
    ctx.strokeStyle = '#090909'; // Black border
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(cornerRadius + 1, 1);
    ctx.lineTo(canvas.width - cornerRadius - 1, 1);
    ctx.quadraticCurveTo(canvas.width - 1, 1, canvas.width - 1, cornerRadius + 1);
    ctx.lineTo(canvas.width - 1, canvas.height - cornerRadius - 1);
    ctx.quadraticCurveTo(canvas.width - 1, canvas.height - 1, canvas.width - cornerRadius - 1, canvas.height - 1);
    ctx.lineTo(cornerRadius + 1, canvas.height - 1);
    ctx.quadraticCurveTo(1, canvas.height - 1, 1, canvas.height - cornerRadius - 1);
    ctx.lineTo(1, cornerRadius + 1);
    ctx.quadraticCurveTo(1, 1, cornerRadius + 1, 1);
    ctx.closePath();
    ctx.stroke();
  
    // Draw photo (25% of the width)
    if (photo) {
      const img = new Image();
      img.onload = () => {
        const photoWidth = canvas.width * 0.35;
        const photoHeight = canvas.height * 0.7; // Adjust height if needed
        ctx.drawImage(img, 20, 50, photoWidth, photoHeight); // Adjust photo position and size
        drawText(name, dob, gender, voterID, photoWidth); // Draw text after the photo
      };
      img.src = URL.createObjectURL(photo);
    } else {
      drawText(name, dob, gender, voterID, 0); // Draw text directly if no photo
    }
  
    function drawText(name, dob, gender, voterID, photoWidth) {
      const textX = photoWidth + 40; // Start drawing text after the photo
  
      ctx.fillStyle = '#000000'; // Black text
      ctx.font = 'bold 22px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('Voter ID Card', canvas.width / 2, 40);
  
      ctx.font = '18px Arial';
      ctx.textAlign = 'left';
  
      // Adjust vertical positions to minimize extra space
      const lineHeight = 35; // Adjust as needed
      const startY = 80;
  
      ctx.fillText(`Name: ${name}`, textX, startY);
      ctx.fillText(`DOB: ${dob}`, textX, startY + lineHeight);
      ctx.fillText(`Gender: ${gender}`, textX, startY + 2 * lineHeight);
      ctx.fillText(`Voter ID: ${voterID}`, textX, startY + 3 * lineHeight);
    }
  };
    
  

  const downloadImage = () => {
    const canvas = canvasRef.current;
    const link = document.createElement('a');
    link.download = 'voter_id.png';
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
        <motion.h2
          className="text-3xl font-bold text-gray-800 mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Generate Document
        </motion.h2>
        <motion.p
          className="text-gray-700 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Please fill in the details below to generate your document.
        </motion.p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="block w-full mt-1 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="dob" className="block text-gray-700 text-sm font-semibold mb-2">
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="block w-full mt-1 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="gender" className="block text-gray-700 text-sm font-semibold mb-2">
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              defaultValue=""
              className="block w-full mt-1 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="" disabled>Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="aadhar" className="block text-gray-700 text-sm font-semibold mb-2">
              Aadhar Number
            </label>
            <input
              type="text"
              id="aadhar"
              name="aadhar"
              value={formData.aadhar}
              onChange={handleChange}
              placeholder="Enter your Aadhar number"
              className={`block w-full mt-1 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 ${errors.aadhar ? 'border-red-500' : ''}`}
              maxLength="12"
              required
            />
            {errors.aadhar && <p className="text-red-600 text-sm mt-1">{errors.aadhar}</p>}
          </div>

          <div>
            <label htmlFor="photo" className="block text-gray-700 text-sm font-semibold mb-2">
              Upload Photo
            {/* <FaFileUpload className="inline-block text-blue-500 mr-2" /> */}
            </label>
            <input
              type="file"
              id="photo"
              name="photo"
              accept="image/*"
              onChange={handleChange}
               className="block text-gray-700 text-sm font-semibold mb-2"
            />

          </div>

          <motion.button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-md shadow-lg hover:bg-blue-600 transition-transform transform-gpu"
            whileHover={{ scale: 1.05 }}
          >
            Generate
          </motion.button>
        </form>

        <canvas ref={canvasRef} width="400" height="250" className="mt-6"></canvas>
        <button onClick={downloadImage} className="mt-4 w-full bg-green-500 text-white py-3 rounded-md shadow-lg hover:bg-green-600 transition-transform transform-gpu">
          Download Voter ID
        </button>
      </div>
    </div>
  );
};

export default Generate;
