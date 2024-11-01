import { Link } from "react-router-dom"
import Hero from "../components/shared/Hero"
import Testimonials from "../components/shared/Testimonials"
import ProductReviews from "../components/shared/ProductReviews"


const Home = () => {
    return (
        <>
            <Hero />

            {/* story */}
            <div className=" px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-[1109px] mx-auto ">
                    <div className="text-start flex flex-col gap-2">
                        <h2 className="text-sm text-primary mb-4">Our Amazing Story</h2>
                        <h3 className="text-4xl font-bold text-primary mb-4">10k+Happy Customers</h3>
                        <p className="text-lg text-gray-600">There's no secret sauce, no wizard behind the curtain. What makes Aerolab tick is an interdisciplinary team with a framework that fosters candid collaboration.</p>
                        <a href="#" className="inline-block mt-4 py-3 font-bold text-primary focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50">+ More Know About us</a>
                    </div>
                    <div className="p-6 bg-[#FBF9F2] rounded-lg shadow-[10px_80px_50px_3px_rgba(160,174,192,0.2)] max:w-[474px] ">
                        <blockquote className="my-8 ">
                            <p className="text-lg text-gray-700">I'm a very anxious person but use this and feel so relaxed and sleep way better now with the aid of sleepstiq.</p>
                        </blockquote>
                        <div className="flex items-center">
                            <img className="w-16 h-16 rounded-full mr-4" src="./assets/images/james-miller.png" alt="James Miller" />
                            <div>
                                <h4 className="font-bold text-gray-800">James Miller</h4>
                                <p className="text-gray-60 ">Happy Customer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Testimonials />

            <div className="h-[2px] border-b border-gray-200 lg:max-w-[915px] mx-auto py-10" />

            {/* Diffuser */}
            <div className="py-16 lg:py-24 lg:max-w-[1268px] w-full lg:mr-[10%] lg:w-[90%]">
                <div className="flex flex-col lg:flex-row gap-10 w-full ">

                    <div className="relative w-full rounded p-5 lg:p-0 lg:w-[829px] lg:h-[550px] flex flex-col lg:flex-row items-center gap-5">
                        <img src="./assets/images/diffuser.png" alt="diffuser" className="w-full h-full rounded pointer-events-none object-cover object-center" />
                        <div className="w-full lg:max-w-[453px] p-5 rounded-md lg:absolute  lg:bottom-10 lg:-right-5 bg-white shadow-[30px_30px_30px_10px_rgba(160,174,192,0.2)] z-20">
                            <ul className="space-y-2 text-gray-700">
                                <li className="">😊 <span className="italic text-gray-700">Promotes calm and relaxation.</span> </li>
                                <li className="text-blue-700">💤 <span className="italic text-gray-700"> Inhalation allows for a rapid effect.</span></li>
                                <li className="">✅ <span className="italic text-gray-700">100% drug-free, plant-based ingredients</span></li>
                                <li className="text-gray-700">‍⚕️<span className="italic text-gray-700"> 3rd-party lab tested</span>.</li>
                            </ul>
                        </div>
                    </div>

                    <div className=" lg:w-[40%] p-5">
                        <h2 className="text-4xl font-bold tracking-tight text-primary text-center lg:text-start">Shop Now</h2>
                        <p className="mt-4 text-lg leading-relaxed text-gray-500 text-center lg:text-start">
                            Our Personal Diffuser is an aromatherapy device that contains a blend of melatonin, lavender, and chamomile. A few breaths of our plant-based essential oil mist will mellow you out, quiet the mind, and lull you to bed.
                        </p>
                        <div className="mt-10 text-center lg:text-start">
                            <Link to={"/shop"} className="bg-red-500 px-20 hover:bg-red-700 text-white font-bold py-2 rounded focus:outline-none focus:shadow-outline duration-300">
                                Visit Shop
                            </Link>
                        </div>
                    </div>

                </div>
            </div>

            {/* Our mission */}
            <div className="py-16 lg:py-24 lg:max-w-[1268px] w-full lg:ml-[10%] lg:w-[90%]">
                <div className="flex flex-col lg:flex-row gap-10 w-full ">

                    <div className=" lg:w-[40%] p-5 ">
                        <h2 className="text-4xl font-bold tracking-tight text-primary text-center lg:text-start">Our Mission</h2>
                        <p className="mt-4 text-lg leading-relaxed text-gray-500 text-center lg:text-start">
                            We started Sleepstiq with 1 simple goal: to be your best friend at bedtime. We, just like you, deal with stress, unease, and trouble sleeping from a number of silly things like school, work, screens, numbers, and people. That's why we created products that aim to -
                        </p>
                        <div className="mt-10">
                            <ul className="space-y-4 text-gray-500">
                                <li>✓ Promote Calm </li>
                                <li>✓ Support Sleep</li>
                                <li>✓ Reduce Stress</li>
                                <li>✓ Aid Relaxation</li>
                            </ul>
                        </div>
                    </div>

                    <div className="w-full rounded p-5 lg:p-0 lg:w-[829px] lg:h-[550px] flex items-center overflow-hidden">
                        <img src="./assets/images/sleeping-woman.png" alt="sleeping-woman" className="w-full h-full rounded pointer-events-none object-cover object-center " />
                    </div>

                </div>
            </div>

            {/* Our shop */}
            <div className="w-full mx-auto px-4 py-16 text-center max-w-[915px] mb-20 border-b border-gray-200 ">
                <h2 className="text-4xl font-bold text-primary mb-4">Visit Our Shop</h2>
                <p className="text-gray-600 mb-8">
                    Our Personal Diffuser is an aromatherapy device that contains a blend of melatonin, lavender, and chamomile. A few breaths of our plant-based essential oil mist will mellow you out, quiet the mind, and lull you to bed.
                </p>
                <Link to={"/shop"} className="bg-red-500 hover:bg-red-700  px-20 text-white font-bold py-2 rounded focus:outline-none focus:shadow-outline duration-300">
                    Visit Shop
                </Link>
            </div>

            {/* PRODUCT REVIEWS */}
            <ProductReviews />

        </>
    )
}

export default Home