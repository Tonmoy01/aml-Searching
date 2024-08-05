import React from 'react';
import uploadImage from '../assets/uploadImage.png';

import { FaRegFileAlt, FaSearch } from "react-icons/fa";
import Navbar from './Navbar';

const FileUpload = () => {
  const handleFileUpload = (event) => {
    const files = event.target.files;
    console.log(files);
  };

  return (
    <div className='max-w-[1240px] mx-auto mt-10'>
      <Navbar />
      <div className="flex justify-center mb-4">
        <button className="px-4 py-2 text-white bg-gray-800 rounded-full">Auto Input</button>
        <button className="px-4 py-2 text-gray-800 bg-gray-200 rounded-full">Manual Input</button>
      </div>
      <div className="flex items-center justify-center bg-gray-100">
        <div className="w-1/2 p-2 shadow-lg rounded-3xl bg-primaryColor">
          <div className="flex flex-col items-center p-8 border-2 border-gray-400 border-dashed rounded-3xl bg-primaryColor">
            <div className="p-5 mb-4 bg-white rounded-2xl">
              <img src={uploadImage} className="text-white" alt="Upload icon" />
            </div>
            <p className="mb-4 font-medium text-white">Click to Upload or Drop PDF/SPREADSHEET here</p>
            <p className="mb-4 text-gray-400 underline">Only (PDFs, spreadsheets, etc.) is accepted</p>
            <div className="flex">
              <input
                type="file"
                id="fileInput"
                className="hidden"
                multiple
                onChange={handleFileUpload}
              />
              <label
                htmlFor="fileInput"
                className="flex items-center gap-2 px-10 py-3 mr-2 bg-white rounded-full cursor-pointer text-textPrimaryColor"
              >
                <FaRegFileAlt />
                Upload Files
              </label>
              <button className="flex items-center gap-2 px-10 py-3 bg-white rounded-full text-textPrimaryColor">
                <FaSearch />
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
};

export default FileUpload;
