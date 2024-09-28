// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaHome, FaFolder, FaUpload, FaCheckCircle, FaUser } from 'react-icons/fa';

// function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-success">
//       <div className="container">
//         <Link className="navbar-brand" to="/">Sudarshan</Link>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
//           <ul className="navbar-nav">
//             <li className="nav-item">
//               <Link className="nav-link" to="/"><FaHome className="me-1" /> Home</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/my-documents"><FaFolder className="me-1" /> My Documents</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/upload-document"><FaUpload className="me-1" /> Upload Document</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/verification-requests"><FaCheckCircle className="me-1" /> Verification Requests</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/profile"><FaUser className="me-1" /> Profile</Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaHome, FaUpload, FaFolder, FaUserCircle, FaFileAlt } from 'react-icons/fa';

// const Navbar = () => {
//   return (
//     <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Brand Logo */}
//         <Link to="/" className="text-3xl font-bold flex items-center space-x-2">
//           <FaFileAlt className="text-4xl text-yellow-300" />
//           <span className="text-white drop-shadow-lg">Sudarshan</span>
//         </Link>

//         {/* Links */}
//         <div className="space-x-8 flex items-center">
//           {/* Home */}
//           <Link
//             to="/"
//             className="flex items-center space-x-2 text-white text-lg hover:text-yellow-300 transition-colors duration-300"
//           >
//             <FaHome className="text-2xl" />
//             <span className="hidden sm:inline">Home</span>
//           </Link>
//           <Link
//             to="/generate"
//             className="flex items-center space-x-2 text-white text-lg hover:text-yellow-300 transition-colors duration-300"
//           >
//             <FaFileAlt className="text-2xl" />
//             <span className="hidden sm:inline">Generate</span>
//           </Link>

//           {/* Upload Document */}
//           <Link
//             to="/upload"
//             className="flex items-center space-x-2 text-white text-lg hover:text-yellow-300 transition-colors duration-300"
//           >
//             <FaUpload className="text-2xl" />
//             <span className="hidden sm:inline">Verify</span>
//           </Link>

//           {/* My Documents */}
//           {/* <Link
//             to="/my-documents"
//             className="flex items-center space-x-2 text-white text-lg hover:text-yellow-300 transition-colors duration-300"
//           >
//             <FaFolder className="text-2xl" />
//             <span className="hidden sm:inline">My Documents</span>
//           </Link> */}

         

//           {/* Profile */}
//           <Link
//             to="/profile"
//             className="flex items-center space-x-2 text-white text-lg hover:text-yellow-300 transition-colors duration-300"
//           >
//             <FaUserCircle className="text-2xl" />
//             <span className="hidden sm:inline">Profile</span>
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



// src/components/Navbar.js





// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { FaHome, FaUpload, FaFileAlt, FaUserCircle } from 'react-icons/fa';

// const Navbar = () => {
//   const location = useLocation();
//   const path = location.pathname;

//   const getLinkClass = (linkPath) => 
//     `flex items-center space-x-2 text-lg hover:text-yellow-300 transition-colors duration-300 ${path === linkPath ? 'text-yellow-300 font-bold' : 'text-white'}`;

//   return (
//     <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Brand Logo */}
//         <Link to="/" className="text-3xl font-bold flex items-center space-x-2">
//           <FaFileAlt className="text-4xl text-yellow-300" />
//           <span className="text-white drop-shadow-lg">Sudarshan</span>
//         </Link>

//         {/* Links */}
//         <div className="space-x-8 flex items-center">
//           {/* Home */}
//           <Link
//             to="/"
//             className={getLinkClass('/')}
//           >
//             <FaHome className="text-2xl" />
//             <span className="hidden sm:inline">Home</span>
//           </Link>

//           {/* Generate */}
//           <Link
//             to="/generate"
//             className={getLinkClass('/generate')}
//           >
//             <FaFileAlt className="text-2xl" />
//             <span className="hidden sm:inline">Generate</span>
//           </Link>

//           {/* Upload Document */}
//           <Link
//             to="/upload"
//             className={getLinkClass('/upload')}
//           >
//             <FaUpload className="text-2xl" />
//             <span className="hidden sm:inline">Verify</span>
//           </Link>

//           {/* Profile */}
//           <Link
//             to="/profile"
//             className={getLinkClass('/profile')}
//           >
//             <FaUserCircle className="text-2xl" />
//             <span className="hidden sm:inline">Profile</span>
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo.svg'; // Import the first logo
import AadhaarLogo from './aadhaar_english_logo.svg'; // Import the Aadhaar logo

const Navbar = () => {
  const location = useLocation();
  const path = location.pathname;

  const getLinkClass = (linkPath) =>
    `flex items-center justify-center h-full space-x-2 text-sm no-underline transition-all duration-300 ${
      path === linkPath
        ? 'border-b-2 border-white text-white' // Active state: white underline for current page
        : 'text-white hover:border-b-2 hover:border-white' // Hover state: white underline on hover
    }`;

  return (
    <div>
      {/* Container for both logos */}
      <div className="flex items-center justify-between pt-4 pl-4 pr-4 pb-4"> {/* Keep bottom padding consistent */} 
        {/* Original Logo (Left Side) */}
        <img
          src={Logo}
          alt="Logo"
          className="w-49 h-49 pb-1" // Adjust width and height, keep bottom padding
        />

        {/* Aadhaar Logo (Right Side) */}
        <img
          src={AadhaarLogo}
          alt="Aadhaar Logo"
          className="w-13 h-13 ml-auto pb-1" // Adjust width and height, keep bottom padding
        />
      </div>

      {/* Navbar below the logos */}
      <nav
        className="text-white shadow-lg h-10" // Make the navbar thinner by reducing height to h-10
        style={{ background: 'linear-gradient(119.54deg, #1cb5e0 0%, #000046 100%)' }} // Reversed gradient
      >
        <div className="flex justify-between items-center w-full h-full"> {/* Flexbox to align logo left and links right */}
          {/* Left Aligned Logo */}
          <Link
            to="/"
            className="text-1xl font-bold flex items-center space-x-2 no-underline pl-2" // Reduced the size of Sudarshan text
          >
            <span className="text-white drop-shadow-lg">Sudarshan</span>
          </Link>

          {/* Right Aligned Links */}
          <div className="ml-auto space-x-6 flex items-center h-full pr-5"> {/* ml-auto to push the links to the right-most edge */}
            {/* Home */}
            <Link to="/" className={getLinkClass('/')}>
              <span>Home</span> {/* Removed icon */}
            </Link>

            {/* Generate */}
            <Link to="/generate" className={getLinkClass('/generate')}>
              <span>Generate</span> {/* Removed icon */}
            </Link>

            {/* Upload Document */}
            <Link to="/upload" className={getLinkClass('/upload')}>
              <span>Verify</span> {/* Removed icon */}
            </Link>

            {/* Profile */}
            <Link to="/profile" className={getLinkClass('/profile')}>
              <span>Profile</span> {/* Removed icon */}
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
