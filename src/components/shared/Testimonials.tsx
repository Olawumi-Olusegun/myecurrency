import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import StarIcon from './StarIcon';

const responsive = {
    desktop: {
        breakpoint: {
            max: 3000,
            min: 1024
        },
        items: 4,
        partialVisibilityGutter: 40
    },
    mobile: {
        breakpoint: {
            max: 464,
            min: 0
        },
        items: 1,
        partialVisibilityGutter: 30
    },
    tablet: {
        breakpoint: {
            max: 1024,
            min: 464
        },
        items: 2,
        partialVisibilityGutter: 30
    }
}

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            text: "Love it! I have trouble falling asleep and this knocked me right out. Will be buying more.",
            name: "John Matthews",
            rating: 5,
        },
        {
            id: 2,
            text: "I work shift work. Swinging from days to nights is sometimes brutal for sleep. Thank you Sleepstiq.",
            name: "Eunice Oliver",
            rating: 5,
        },
        {
            id: 3,
            text: "It's a really good product and helps me sleep better at night!",
            name: "Laura Davies",
            rating: 5,
        },
        {
            id: 4,
            text: "Helps me relax and remember to breathe. Stress level definitely goes down.",
            name: "Jane Bocks",
            rating: 5,
        },
        {
            id: 5,
            text: "This product changed my life. Highly recommend!",
            name: "Sam Taylor",
            rating: 5,
        },
    ];

    return (
        <>
            <Carousel
                infinite
                autoPlaySpeed={3000}
                autoPlay
                responsive={responsive}
            >
                {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="flex flex-col mx-3 gap-5 bg-accent rounded-md p-5 h-[202px]">
                        <p className="italic">{testimonial.text}</p>
                        <h3 className="text-xl font-bold text-gray-800 mt-auto">{testimonial.name}</h3>
                        <div className="flex items-center gap-2">
                            {Array.from({ length: testimonial.rating }).map((_, index) => (
                                <StarIcon key={index} />
                            ))}
                        </div>
                    </div>
                ))}
            </Carousel>
        </>
    );
};

export default Testimonials;
