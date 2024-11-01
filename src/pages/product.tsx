import Testimonials from "../components/shared/Testimonials"

const Product = () => {
    return (
        <>
            <div className="relative w-full rounded-lg h-[596px] px-5 ">
                <div className=" text-start mt-36 relative z-10 max-w-[1109px] mx-auto flex flex-col gap-4 ">
                    <p className="text-gray-600 w-full max-w-[581px]">
                        We're here to help you
                    </p>
                    <h1 className="text-4xl font-bold text-primary mb-2">Relax & Rest</h1>
                </div>


                <div className="absolute inset-0 flex justify-center items-center -z-10 w-full">
                    <img
                        src="./assets/images/man-sleeping.png"
                        alt="man-sleeping"
                        className="w-full h-full object-cover rounded-lg opacity-90"
                    />
                </div>
            </div>

            <div className="w-full max-w-[1101px] mx-auto my-20 p-5 lg:p-0 ">
                <div className="flex flex-col md:flex-row items-center gap-20">
                    <div className="flex-1">
                        <img src="./assets/images/diffuser.png" alt="diffuser-image" />
                    </div>
                    <div className="flex-1 flex flex-col gap-3">
                        <h2 className="text-4xl font-bold tracking-tight text-primary text-center lg:text-start">About Product</h2>
                        <p className="mt-4 text-lg leading-relaxed text-gray-500 text-center lg:text-start">
                            Our Personal Diffuser is an aromatherapy device that contains a blend of melatonin, lavender, and chamomile. A few breaths of our plant-based essential oil mist will mellow you out, quiet the mind, and lull you to bed.
                        </p>
                        <div className="w-full rounded-md  bg-white">
                            <ul className="space-y-2 text-gray-700">
                                <li className="">😊 <span className="italic text-gray-700">Promotes calm and relaxation.</span> </li>
                                <li className="text-blue-700">💤 <span className="italic text-gray-700"> Inhalation allows for a rapid effect.</span></li>
                                <li className="">✅ <span className="italic text-gray-700">100% drug-free, plant-based ingredients</span></li>
                                <li className="text-gray-700">‍⚕️<span className="italic text-gray-700"> 3rd-party lab tested</span>.</li>
                            </ul>
                        </div>
                        <div className="flex items-center gap-8">
                            <div className="text-lg flex flex-col gap-3">
                                <span>Price</span>
                                <span className="font-bold">USD 50</span>
                            </div>

                            <div className="text-lg flex flex-col gap-3">
                                <span>Unit</span>
                                <input
                                    type="number"
                                    min={1}
                                    placeholder="2"
                                    className="text-center w-[63px] py-[2px] placeholder:text-black text-lg font-bold rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                            </div>
                        </div>

                        <button className="bg-red-500 w-[225px] px-8 duration-300 hover:bg-red-600 text-white font-bold py-2  rounded mt-6 ">
                            Buy
                        </button>
                    </div>
                </div>
            </div>

            <Testimonials />
        </>
    )
}

export default Product