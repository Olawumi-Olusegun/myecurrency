import { Link } from "react-router-dom"

const Hero = () => {
    return (
        <div className="relative w-full rounded-lg h-[811px] px-5 ">
            <div className=" text-start mt-36 relative z-10 max-w-[1109px] mx-auto flex flex-col gap-4 ">
                <p className="text-gray-600 w-full max-w-[581px]">
                    We're here to help you
                </p>
                <h1 className="text-5xl lg:text-6xl font-bold text-primary mb-2">Relax & Rest</h1>
                <p className="text-gray-600 w-full max-w-[581px]">
                    With the aid of our Melatonin Sleepstiq, we can assure you that you can get quality sleep.
                </p>
            </div>

            <div className="max-w-[1109px] mx-auto text-start my-6 relative z-10">
                <Link to={"/shop"} className="bg-red-500  hover:bg-red-700 text-white font-bold py-2 px-20 rounded focus:outline-none focus:shadow-outline">
                    Visit Shop
                </Link>
            </div>

            <div className="absolute inset-0 flex justify-center items-center -z-10 w-full">
                <img
                    src="./assets/images/woman.png"
                    alt="Sleeping Woman"
                    className="w-full h-full object-contain lg:object-cover rounded-lg opacity-90"
                />
            </div>

            <div className="absolute p-5 rounded bg-white shadow-[30px_60px_30px_10px_rgba(160,174,192,0.2)]  bottom-0 right-0  w-fit lg:w-[70%] lg:ml-[20%] flex  z-10">
                <div className=" flex items-center flex-wrap gap-8 self-end ml-auto px-10">
                    <img src="./assets/images/Google.png" alt="Google Logo" className="h-full object-cover object-center max-h-[32px]" />
                    <img src="./assets/images/Forbes.png" alt="Forbes Logo" className="h-full object-cover object-center max-h-[32px]" />
                    <img src="./assets/images/Bloomberg.png" alt="Bloomberg Logo" className="h-full object-cover object-center max-h-[32px]" />
                    <img src="./assets/images/influencive.png" alt="influencive Logo" className="h-full object-cover object-center max-h-[32px]" />
                    <img src="./assets/images/Sleep-Review-Magazine.png" alt="Sleep-Review-Magazine Logo" className="h-full object-cover object-center max-h-[32px]" />
                </div>
            </div>
        </div>
    )
}

export default Hero