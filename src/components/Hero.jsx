import hero from '../assets/hero.png';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="py-10 m-5 rounded-3xl bg-primaryColor">
      <div className="max-w-[1410px] mx-auto">
        <Navbar />
        {/* Hero Left */}
        <div className='flex items-center justify-center gap-32'>
          <div className='w-full space-y-10'>
            <h3 className='font-medium text-white text-[48px]'>Leading the Way in AML Search and Compliance Solutions</h3>
            <div className='h-[3px] bg-white w-[411px]'></div>
            <p className='text-lg font-light text-white'>conduct anti-money laundering searches by uploading files or manually entering names to ensure compliance and security.</p>
            <div className='space-x-5'>
              <Link to='/search-file' className='px-10 py-3 bg-white rounded-full text-textPrimaryColor'>File-Based Search</Link>
              <Link to='/search-manual' className='px-10 py-3 text-white border rounded-full'>Manual Search</Link>
            </div>
          </div>

          {/* Hero Right */}
          <div className='w-full'>
            <img src={hero} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;