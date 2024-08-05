import { useState } from "react";
import { FaPlus } from "react-icons/fa";

const ManualUpload = () => {
  const [userInput, setUserInput] = useState({ firstName: '', sureName: '' });

  return (
    <div className="max-w-[1240px] mx-auto mt-10">
      <Navbar />
      <div className="flex justify-center mb-4">
        <button className="px-4 py-2 text-white bg-gray-800 rounded-full">Auto Input</button>
        <button className="px-4 py-2 text-gray-800 bg-gray-200 rounded-full">Manual Input</button>
      </div>
      <div className="flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-2xl p-2 shadow-lg rounded-3xl bg-primaryColor">
          <div className="flex flex-col items-center p-8 border-2 border-gray-400 border-dashed rounded-3xl bg-primaryColor">
            <div className="w-full mb-6">
              <div className="flex justify-between">
                <input
                  type="text"
                  placeholder="First Name"
                  value={userInput.firstName}
                  className="w-1/2 p-2 m-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-primaryColor"
                  onChange={(e) => setUserInput(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Surname"
                  value={userInput.sureName}
                  className="w-1/2 p-2 m-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-primaryColor"
                  onChange={(e) => setUserInput(e.target.value)}
                />
              </div>
              <div className="flex justify-center">
                <button className="flex items-center gap-2 px-10 py-2 m-2 bg-white rounded-full text-textPrimaryColor">
                  <FaSearch />
                  Search
                </button>
                <button className="flex items-center gap-2 px-10 py-2 m-2 text-white border rounded-full bg-primaryColor"><span><FaPlus /></span>Add New Target</button>
              </div>
            </div>
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
export default ManualUpload;