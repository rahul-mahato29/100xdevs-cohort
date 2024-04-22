import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="border-2 border-black flex justify-between item-center p-5 bg-gray-200">
            <div className="logo">
                Logo
            </div>
            <div className="page-link flex gap-8">
               <Link to='/'>Home</Link>
               <Link to='/about'>About</Link>
               <Link to='/contact'>Contact</Link>
            </div>
            <div className="login">
                <Link to='/login'>Login</Link>
            </div>
        </nav>
    );
}

export default Navbar;