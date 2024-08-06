// import chooseUs from '../assets/choose-us.png';

// const WhyChoseUs = () => {
//   return (
//     <div className="max-w-[1390px] mx-auto">
//       <div className="flex items-center gap-10 py-44">
//         {/* Left */}
//         <div className="w-full space-y-9">
//           <h3 className="text-black text-[48px] font-medium">Why Choose Us</h3>
//           <ul className='space-y-5 list-disc font-jakarta'>
//             <li>Doing Anti Money Laundering services is now a simple process, where you just upload a file with all the personnel to search then you are good to go.</li>
//             <li>Manual Input also ensures a quick search for individuals or an small amount of potential customers</li>
//           </ul>
//         </div>

//         {/* Right */}
//         <div className="flex justify-center w-full">
//           <img src={chooseUs} alt="" />
//         </div>
//       </div>
//     </div>
//   );
// };
// export default WhyChoseUs;

import chooseUs from '../assets/choose-us.png';

const WhyChoseUs = () => {
  return (
    <div className="max-w-[1390px] mx-auto px-4 md:px-8">
      <div className="flex flex-col-reverse items-center gap-10 py-20 md:flex-row md:py-44">
        {/* Left */}
        <div className="w-full px-4 space-y-5 md:px-0 md:w-1/2 md:space-y-9">
          <h3 className="text-black text-center md:text-start text-2xl md:text-4xl lg:text-[48px] font-medium">Why Choose Us</h3>
          <ul className="space-y-4 text-base list-disc font-jakarta md:text-lg">
            <li>Doing Anti Money Laundering services is now a simple process, where you just upload a file with all the personnel to search then you are good to go.</li>
            <li>Manual Input also ensures a quick search for individuals or a small amount of potential customers.</li>
          </ul>
        </div>

        {/* Right */}
        <div className="flex justify-center w-full md:w-1/2">
          <img src={chooseUs} alt="Why Choose Us" className="w-full max-w-xs md:max-w-md lg:max-w-lg" />
        </div>
      </div>
    </div>
  );
};

export default WhyChoseUs;
