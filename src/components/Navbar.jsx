import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="pb-10 font-jakarta">
      <div className="flex items-center justify-between px-6 py-3 mx-auto bg-white rounded-full">
        <Link to="/" className="text-2xl font-bold">Logo Here</Link>
        <div className="space-x-5">
          <Link to='/' href="">Home</Link>
          <Link to='/' href="">What We Do</Link>
          <Link to='/' href="">What It Works</Link>
          <Link to='/about' href="">About Us</Link>
        </div>
        <div className="space-x-5">
          <button>Log In</button>
          <button className="px-5 py-3 text-white bg-black rounded-full">Sign Up</button>
        </div>
      </div>
    </div>
  );
};
export default Navbar;