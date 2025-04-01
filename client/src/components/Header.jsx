import { assets } from "../assets/assets";

export default function Header() {
    return (
        <div className='flex flex-col justify-center items-center text-center my-20'>
            <div className="text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500">
                <p>Ultimate Tool for Generating Images from Text</p>
                <img src={assets.star_icon} alt="" />
            </div>
            <h1 className="text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center">Transform Words into <span className="text-pink-600">Pictures</span> in Seconds.</h1>
            <p className="text-center max-w-xl mx-auto mt-5">Create stunning images from text effortlessly with our AI-powered tool. Just type your words, choose a style, and generate high-quality visuals in seconds—perfect for social media, marketing, and creative projects!</p>
            <button className="flex items-center sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 gap-2 rounded-full ">
                Generate Images
                <img className="h-6" src={assets.star_group} alt="" />
            </button>

            <div className="flex items-center gap-3 py-4" >
                {Array(6).fill('').map((item,index)=>(
                    <img className="rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10" 
                    src={index%2==0?assets.sample_img_2:assets.sample_img_1} alt="" key={index} width={70} />
                ))}
            </div>
            <p className="mt-2  text-neutral-600">AI-Generated Images Instantly</p>
        </div>
    )
}