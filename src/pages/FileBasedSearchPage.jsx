// import FileUpload from "../components/FileUpload";
// import Navbar from "../components/Navbar";
// import ManualUpload from './../components/ManualUpload';

// const FileBasedSearchPage = () => {
//   return (
//     <div>
//       <div className='max-w-[1240px] mx-auto mt-10'>
//         <Navbar />
//       </div>
//       <FileUpload />
//       <ManualUpload />
//     </div>
//   );
// };
// export default FileBasedSearchPage;

import FileUpload from "../components/FileUpload";
import Navbar from "../components/Navbar";
import ManualUpload from './../components/ManualUpload';

const FileBasedSearchPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className='max-w-[1240px] mx-auto mt-10 px-4'>
        <Navbar />
      </div>
      <main className="flex-grow">
        <section className="px-4 my-10 sm:px-6 lg:px-8">
          <FileUpload />
        </section>
        <section className="px-4 my-10 sm:px-6 lg:px-8">
          <ManualUpload />
        </section>
      </main>
    </div>
  );
};

export default FileBasedSearchPage;
