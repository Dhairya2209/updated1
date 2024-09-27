// // // src/pages/Home.js

// // import React from 'react';
// // import { Link } from 'react-router-dom';

// // const Home = () => {
// //   return (
// //     <div className="container text-center mt-5">
// //       <div className="jumbotron">
// //         <h1 className="display-4"><i className="fas fa-file-alt"></i> Welcome to Sudarshan</h1>
// //         <p className="lead">Your one-stop solution for managing and verifying your important documents securely and efficiently.</p>
// //         <hr className="my-4" />
// //         <p>Get started by uploading your documents or checking your verification requests.</p>
// //         <Link className="btn btn-primary btn-lg me-2" to="/upload-document" role="button">
// //           <i className="fas fa-upload"></i> Upload Document
// //         </Link>
// //         <Link className="btn btn-secondary btn-lg" to="/verification-requests" role="button">
// //           <i className="fas fa-check-circle"></i> Verification Requests
// //         </Link>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Home;


// // import React from 'react';
// // import { Link } from 'react-router-dom';
// // import { FaFileAlt } from 'react-icons/fa';

// // function Home() {
// //   return (
// //     <div className="text-center">
// //       <FaFileAlt size={64} className="mb-4 text-muted" />
// //       <h1 className="display-4 mb-3">Welcome to Sudarshan</h1>
// //       <p className="lead mb-5">Your one-stop solution for managing and verifying your important documents securely and efficiently.</p>
// //       <p className="mb-4">Get started by uploading your documents or checking your verification requests.</p>
// //       <div>
// //         <Link to="/upload-document" className="btn btn-primary btn-lg me-3">Upload Document</Link>
// //         <Link to="/verification-requests" className="btn btn-secondary btn-lg">Verification Requests</Link>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Home;



// // src/pages/Home.js

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaFileAlt } from 'react-icons/fa';

// const Home = () => {
//   return (
//     <div className="container text-center mt-5">
//       <div className="jumbotron">
//         <FaFileAlt size={64} className="mb-4 text-muted" />
//         <h1 className="display-4 mb-3">Welcome to Sudarshan</h1>
//         <p className="lead mb-5">
//           Your one-stop solution for managing and verifying your important documents securely and efficiently.
//         </p>
//         <p className="mb-4">Get started by uploading your documents or checking your verification requests.</p>
//         <div className="btn-group">
//           <Link to="/upload-document" className="btn btn-primary btn-lg me-3">
//             <i className="fas fa-upload"></i> Upload Document
//           </Link>
//           <Link to="/verification-requests" className="btn btn-secondary btn-lg">
//             <i className="fas fa-check-circle"></i> Verification Requests
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaFileAlt } from 'react-icons/fa';
// import { motion } from 'framer-motion';

// const Home = () => {
//   return (
//     <div className="bg-gray-100 min-h-screen">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-r from-blue-500 to-green-500 py-16">
//         <div className="container mx-auto px-6 text-center">
//           <motion.h1 
//             className="text-5xl font-bold text-white"
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             Welcome to Document Verification System
//           </motion.h1>
//           <p className="text-white mt-4 text-lg">Upload and verify your documents with ease!</p>
//           <motion.button 
//             className="mt-6 bg-white text-blue-500 px-6 py-3 rounded-full font-semibold"
//             whileHover={{ scale: 1.1 }}
//           >
//             Get Started
//           </motion.button>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-16">
//         <div className="container mx-auto text-center">
//           <h2 className="text-3xl font-semibold mb-8">Our Features</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <motion.div className="bg-white shadow-lg p-6 rounded-lg"
//               whileHover={{ scale: 1.05 }}>
//               <i className="fas fa-upload fa-3x text-blue-500 mb-4"></i>
//               <h3 className="text-xl font-semibold">Easy Document Upload</h3>
//               <p className="text-gray-600">Upload your documents seamlessly with our user-friendly interface.</p>
//             </motion.div>
//             <motion.div className="bg-white shadow-lg p-6 rounded-lg"
//               whileHover={{ scale: 1.05 }}>
//               <i className="fas fa-check-circle fa-3x text-green-500 mb-4"></i>
//               <h3 className="text-xl font-semibold">Fast Verification</h3>
//               <p className="text-gray-600">Get your documents verified quickly using machine learning.</p>
//             </motion.div>
//             <motion.div className="bg-white shadow-lg p-6 rounded-lg"
//               whileHover={{ scale: 1.05 }}>
//               <i className="fas fa-lock fa-3x text-red-500 mb-4"></i>
//               <h3 className="text-xl font-semibold">Secure Storage</h3>
//               <p className="text-gray-600">Your documents are stored securely with state-of-the-art encryption.</p>
//             </motion.div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;




// src/pages/Home.js


// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaUpload, FaCheckCircle, FaLock } from 'react-icons/fa';
// import { motion } from 'framer-motion';

// const Home = () => {
//   return (
//     <div className="bg-gray-100 min-h-screen">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-r from-blue-500 to-green-500 py-16">
//         <div className="container mx-auto px-6 text-center">
//           <motion.h1
//             className="text-5xl font-bold text-white"
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             Welcome to Document Verification System
//           </motion.h1>
//           <p className="text-white mt-4 text-lg">
//             Upload and verify your documents with ease!
//           </p>

//           {/* Updated Get Started Button with Link */}
//           <Link to="/upload">
//             <motion.button
//               className="mt-6 bg-white text-blue-500 px-6 py-3 rounded-full font-semibold hover:bg-yellow-400"
//               whileHover={{ scale: 1.1 }}
//             >
//               Get Started
//             </motion.button>
//           </Link>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-16">
//         <div className="container mx-auto text-center">
//           <h2 className="text-3xl font-semibold mb-8">Our Features</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {/* Feature 1 */}
//             <motion.div
//               className="bg-white shadow-lg p-6 rounded-lg"
//               whileHover={{ scale: 1.05 }}
//             >
//               <FaUpload className="text-blue-500 mb-4 text-5xl mx-auto" />
//               <h3 className="text-xl font-semibold">Easy Document Upload</h3>
//               <p className="text-gray-600">
//                 Upload your documents seamlessly with our user-friendly interface.
//               </p>
//             </motion.div>

//             {/* Feature 2 */}
//             <motion.div
//               className="bg-white shadow-lg p-6 rounded-lg"
//               whileHover={{ scale: 1.05 }}
//             >
//               <FaCheckCircle className="text-green-500 mb-4 text-5xl mx-auto" />
//               <h3 className="text-xl font-semibold">Fast Verification</h3>
//               <p className="text-gray-600">
//                 Get your documents verified quickly using machine learning.
//               </p>
//             </motion.div>

//             {/* Feature 3 */}
//             <motion.div
//               className="bg-white shadow-lg p-6 rounded-lg"
//               whileHover={{ scale: 1.05 }}
//             >
//               <FaLock className="text-red-500 mb-4 text-5xl mx-auto" />
//               <h3 className="text-xl font-semibold">Secure Storage</h3>
//               <p className="text-gray-600">
//                 Your documents are stored securely with state-of-the-art encryption.
//               </p>
//             </motion.div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;

import React from 'react';
import { Link } from 'react-router-dom';
import { FaUpload, FaCheckCircle, FaLock } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Swiper Image Slider */}
      <section className="my-8">
        <div className="container mx-auto px-6">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            className="mySwiper"
          >
            {/* Welcome Text Slide */}
            <SwiperSlide>
              <div className="flex flex-col items-center justify-center h-80 bg-gradient-to-r from-blue-500 to-green-500 text-white">
                <motion.h1
                  className="text-6xl font-bold"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  Welcome to Document Verification System
                </motion.h1>
                <p className="mt-4 text-lg">
                  Upload and verify your documents with ease!
                </p>
                <Link to="/upload">
                  <motion.button
                    className="mt-6 bg-white text-blue-500 px-6 py-3 rounded-full font-semibold hover:bg-yellow-400"
                    whileHover={{ scale: 1.1 }}
                  >
                    Get Started
                  </motion.button>
                </Link>
              </div>
            </SwiperSlide>

            {/* Image Slide 1 */}
            <SwiperSlide>
              <img
                src="https://images.unsplash.com/photo-1707157281599-d155d1da5b4c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG9mZmljaWFsJTIwZG9jdW1lbnRzfGVufDB8fDB8fHww"
                alt="Document Image 1"
                className="rounded-lg w-full h-80 object-cover mx-auto"
              />
            </SwiperSlide>

            {/* Image Slide 2 */}
            <SwiperSlide>
              <img
                src="https://images.unsplash.com/photo-1454496406107-dc34337da8d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b2ZmaWNpYWwlMjBkb2N1bWVudHN8ZW58MHx8MHx8fDA%3D"
                alt="Document Image 2"
                className="rounded-lg w-full h-80 object-cover mx-auto"
              />
            </SwiperSlide>

            {/* Image Slide 3 */}
            <SwiperSlide>
              <img
                src="https://images.unsplash.com/photo-1659353684749-94297eedd492?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fG9mZmljaWFsJTIwZG9jdW1lbnRzfGVufDB8fDB8fHww"
                alt="Document Image 3"
                className="rounded-lg w-full h-80 object-cover mx-auto"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <motion.div
              className="bg-white shadow-lg p-6 rounded-lg"
              whileHover={{ scale: 1.05 }}
            >
              <FaUpload className="text-blue-500 mb-4 text-5xl mx-auto" />
              <h3 className="text-xl font-semibold">Easy Document Upload</h3>
              <p className="text-gray-600">
                Upload your documents seamlessly with our user-friendly interface.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              className="bg-white shadow-lg p-6 rounded-lg"
              whileHover={{ scale: 1.05 }}
            >
              <FaCheckCircle className="text-green-500 mb-4 text-5xl mx-auto" />
              <h3 className="text-xl font-semibold">Fast Verification</h3>
              <p className="text-gray-600">
                Get your documents verified quickly using machine learning.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              className="bg-white shadow-lg p-6 rounded-lg"
              whileHover={{ scale: 1.05 }}
            >
              <FaLock className="text-red-500 mb-4 text-5xl mx-auto" />
              <h3 className="text-xl font-semibold">Secure Storage</h3>
              <p className="text-gray-600">
                Your documents are stored securely with state-of-the-art encryption.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
