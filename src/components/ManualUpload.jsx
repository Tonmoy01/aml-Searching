import { useState } from "react";
import { FaPlus, FaSearch, FaRegFileAlt } from "react-icons/fa";
import uploadImage from '../assets/uploadImage.png';

const ManualUpload = () => {
  const [userInput, setUserInput] = useState({ firstName: '', sureName: '' });

  const handleFileUpload = (event) => {
    const files = event.target.files;
    console.log(files);
  };

  return (
    <>
      <div className="flex flex-col justify-center mb-4 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
        <button className="px-4 py-2 text-sm text-white bg-gray-800 rounded-full sm:text-base">Auto Input</button>
        <button className="px-4 py-2 text-sm text-gray-800 bg-gray-200 rounded-full sm:text-base">Manual Input</button>
      </div>
      <div className="flex items-center justify-center p-4 bg-gray-100">
        <div className="w-full max-w-xl p-4 shadow-lg rounded-3xl bg-primaryColor">
          <div className="flex flex-col items-center p-6 border-2 border-gray-400 border-dashed rounded-3xl bg-primaryColor">
            <div className="w-full mb-6">
              <div className="flex flex-col mb-4 sm:flex-row sm:justify-between">
                <input
                  type="text"
                  placeholder="First Name"
                  value={userInput.firstName}
                  className="w-full p-2 m-2 border border-gray-300 rounded-lg sm:w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-primaryColor"
                  onChange={(e) => setUserInput({ ...userInput, firstName: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Surname"
                  value={userInput.sureName}
                  className="w-full p-2 m-2 border border-gray-300 rounded-lg sm:w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-primaryColor"
                  onChange={(e) => setUserInput({ ...userInput, sureName: e.target.value })}
                />
              </div>
              <div className="flex flex-col gap-2 sm:flex-row sm:justify-center">
                <button className="flex items-center gap-2 px-6 py-2 text-xs bg-white rounded-full text-textPrimaryColor sm:text-sm">
                  <FaSearch className="w-4 h-4 sm:w-5 sm:h-5" />
                  Search
                </button>
                <button className="flex items-center gap-2 px-6 py-2 text-xs text-white border rounded-full bg-primaryColor sm:text-sm">
                  <FaPlus className="w-4 h-4 sm:w-5 sm:h-5" />
                  Add New Target
                </button>
              </div>
            </div>
            <div className="p-4 mb-4 bg-white rounded-2xl">
              <img src={uploadImage} className="w-16 h-16 mx-auto" alt="Upload icon" />
            </div>
            <p className="mb-2 text-sm font-medium text-center text-white sm:text-base">Click to Upload or Drop PDF/SPREADSHEET here</p>
            <p className="mb-4 text-xs text-center text-gray-400 underline sm:text-sm">Only (PDFs, spreadsheets, etc.) is accepted</p>
            <div className="flex flex-col items-center sm:flex-row">
              <input
                type="file"
                id="fileInput"
                className="hidden"
                multiple
                onChange={handleFileUpload}
              />
              <label
                htmlFor="fileInput"
                className="flex items-center gap-2 px-6 py-2 mb-2 text-xs bg-white rounded-full cursor-pointer sm:mb-0 sm:mr-2 text-textPrimaryColor sm:text-sm"
              >
                <FaRegFileAlt className="w-4 h-4 sm:w-5 sm:h-5" />
                Upload Files
              </label>
              <button className="flex items-center gap-2 px-6 py-2 text-xs bg-white rounded-full text-textPrimaryColor sm:text-sm">
                <FaSearch className="w-4 h-4 sm:w-5 sm:h-5" />
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManualUpload;
