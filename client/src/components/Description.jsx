import { assets } from "../assets/assets";

export default function Description()
{
    return(
        <div className="flex flex-col items-center justify-center my-24 p-6 md:px-28">
            <h1 className=" text-3xl sm:text-4xl font-semibold mb-2">Create AI Images</h1>
            <p className="text-gray-500 mb-8">Convert your creativity into visuals</p>
            <div className="flex flex-col gap-5 md:gap-14 md:flex-row items-center">
                <img className="w-80 xl:w-96 rounded-lg" src={assets.sample_img_1} alt="" />
                <div className="" >
                    <h2 className="text-3xl font-medium max-w-lg mb-4">INtroducing the AI-Powered Text to Image Generator</h2>
                    <p className="text-gray-600 mb-4">Easily bring your ideas to life with our free AI image generator. Whether you need stunning visuals or unique imagery, our tool transforms your text into eye-catching images effortlessly. Create, customize, and download high-quality images in seconds!</p>
                    <p className="text-gray-600">Simply type in a text prompt, and our cutting-edge AI will generate high-quality images in seconds. Customize your visuals effortlessly with different styles and effects. Download and share your creations instantly!</p>
                </div>
            </div>
        </div>
    )
}