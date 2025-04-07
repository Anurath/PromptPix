
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';
import logoImage from '../assets/logo.png';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
export default function Navbar() {
    const {user,setShowLogin,logout,credit}=useContext(AppContext);
    return (
        <nav className='flex justify-between items-center px-12 py-4'>
            <div> <Link to="/"><img src={logoImage} alt="" height={50} width={50} className='rounded-full' /></Link> </div>
            {
                user ?
                    <div className='flex items-center gap-2 sm:gap-3 '>
                        <Link to='/buy'>
                        <button className='flex items-center gap-2 bg-blue-100 px-4 sm:px-6 py-15 sm:py-3 rounded-full hover:scale-105 transition-all duration-700'>
                            <img className='w-5' src={assets.credit_star} alt="" />
                            <p className='text-xs sm:text-sm font-medium text-gray-600'>Credit Left : {credit} </p>
                        </button>
                        </Link>
                        <p className='text-gray-600 max-sm:hidden pl-4'>Hi, {user.name} </p>
                        <div className='relative group'>
                            <img className='w-10 drop-shadow' src={assets.profile_icon} alt="" />
                            <div className='absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12'>
                                <ul className='list-none m-0 p-2 bg-white rounded-md border text-sm'>
                                    <li onClick={logout} className='py-4 px-2 cursor-pointer pr-10'>Logout</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    :
                    <div className='flex items-center gap-2 sm:gap-5'>
                        <Link to='/buy'><p className='cursor-pointer'>Priceing</p></Link>
                        <Link to='/' ><button onClick={()=>{setShowLogin(true)}} className='bg-zinc-800 text-white px-7 py-2 sm:py-2 text-sm rounded-full cursor-pointer'>Login</button></Link>
                    </div>
            }
        </nav>
    )
}