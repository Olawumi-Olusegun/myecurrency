import TabPanel from "../components/shared/TabPanel"

const Faqs = () => {
    return (
        <>
            <div className="bg-[#fbf9f2] rounded-md w-full px-4 py-36 ">
                <div className="p-5 lg:max-w-[1109px] lg:px-0 mx-auto">
                    <p className="text-sm text-gray-500">We're here to help you</p>
                    <h2 className="font-bold text-2xl mt-2 text-primary">How can we assist?</h2>
                    <div className="flex items-center mt-6 relative ">
                        <span className="text-primary absolute top-1/2 left-5 -translate-y-1/2 ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </span>
                        <input type="text" className="w-full max-w-[859px] pl-12 px-4 py-2 rounded-md border border-gray-300 duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary placeholder:text-primary" placeholder="Search FAQs here" />
                    </div>
                </div>
            </div>
            <TabPanel />
        </>
    )
}

export default Faqs