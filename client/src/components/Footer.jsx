import { assets } from "../assets/assets";
import logo from '../assets/sIcon.png';
export default function Footer()
{
    return(
        <div className="flex items-center justify-between gap-4 py-3 mt-20">
            <img src={logo} width={30} alt="" />
            <p className="flex-1 border-l border-gray-500 pl-4 text-sm text-gray-500 max-sm:hidden">Copyright © Anurath | All rights reserved</p>
            <div className="flex gap-2.5 ">
                <img className="cursor-pointer hover:scale-105" src={assets.facebook_icon} width={35} alt="" />
                <img className="cursor-pointer hover:scale-105" src={assets.twitter_icon} width={35} alt="" />
                <img className="cursor-pointer hover:scale-105" src={assets.instagram_icon} width={35} alt="" />
            </div>
        </div>
    )
}