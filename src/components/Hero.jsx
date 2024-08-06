import hero from '../assets/hero.png';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="py-10 m-5 rounded-3xl bg-primaryColor">
      <div className="max-w-[1410px] mx-auto">
        <Navbar />
        {/* Hero Left */}
        <div className="flex flex-col items-center justify-center gap-10 md:flex-row md:gap-32">
          <div className="w-full px-6 space-y-10 text-center md:text-left md:px-0">
            <h3 className="font-medium text-white text-[36px] md:text-[48px]">
              Leading the Way in AML Search and Compliance Solutions
            </h3>
            <div className="h-[3px] bg-white w-[200px] md:w-[411px] mx-auto md:mx-0"></div>
            <p className="text-lg font-light text-white">
              Conduct anti-money laundering searches by uploading files or manually entering names to ensure compliance and security.
            </p>
            <div className="space-y-5 md:space-y-0 md:space-x-5">
              <Link to="/search-file" className="block px-10 py-3 bg-white rounded-full md:inline-block text-textPrimaryColor">
                File-Based Search
              </Link>
              <Link to="/search-manual" className="block px-10 py-3 text-white border border-white rounded-full md:inline-block">
                Manual Search
              </Link>
            </div>
          </div>

          {/* Hero Right */}
          <div className="w-full mt-10 md:mt-0">
            <img src={hero} alt="Hero" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
