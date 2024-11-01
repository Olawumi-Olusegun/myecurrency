import StarIcon from "./StarIcon";

const ProductReviews = () => {
    const reviews = [
        {
            id: 1,
            image: "./assets/images/sleepstiq-mockup.png",
            text: "Works great! Just use it and then relax, I fall asleep with no problem every time I use it.",
            name: "Rachel Dill",
            rating: 5
        },
        {
            id: 2,
            image: "./assets/images/sleepstiq-mockup.png",
            text: "It really helps me fall right to sleep compared to melatonin pills.",
            name: "Javier Mendez",
            rating: 5
        },
        {
            id: 3,
            image: "./assets/images/sleepstiq-mockup.png",
            text: "I've tried a lot of things to sleep but none of those worked, so I tried Cloudy and wow! I sleep like a baby now.",
            name: "Naomi Nwazurike",
            rating: 5
        },
        {
            id: 4,
            image: "./assets/images/sleepstiq-mockup.png",
            text: "I have been falling asleep faster and sleeping thru the night.",
            name: "Nate Jacobs",
            rating: 5
        }
    ];

    return (
        <div className="mb-32">
            <h2 className="w-full lg:max-w-[1109px] mx-auto font-bold p-5 lg:p-0 my-8 text-2xl text-black/70">
                Product Reviews
            </h2>
            <div className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {reviews.map((review) => (
                    <div key={review.id} className="w-full flex flex-col gap-8 p-8 shadow-2xl">
                        <div className="w-full lg:max-w-[306px] h-[210px] overflow-hidden">
                            <img src={review.image} alt="product-review" className="w-full h-full object-cover object-center pointer-events-none" />
                        </div>
                        <p className="text-black/80 italic">{review.text}</p>
                        <div className="flex flex-col gap-2 mt-auto">
                            <h2 className="font-bold text-black/70">{review.name}</h2>
                            <div className="flex items-center gap-3">
                                {Array.from({ length: review.rating }).map((_, index) => (
                                    <StarIcon key={index} />
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductReviews;
