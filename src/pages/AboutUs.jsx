import { useContext } from "react";
import Layout from "../Layout/Layout";
import ThemeContext from "../context/ThemeContext";

const AboutUs = () => {
    return (
        <div className="bg-gray-50 text-gray-800">
            <Layout>
                <HeroSection />
                <VisionSection />
                <MissionSection />
                <FounderSection />
                <GallerySection />
            </Layout>
        </div>
    );
};

const HeroSection = () => {
    const { theme } = useContext(ThemeContext);
    const isDark = theme === "dark";

    return (
        <section
            className={`text-center py-16 ${isDark ? "bg-gray-900 text-gray-100" : "bg-blue-900 text-white"
                }`}
        >
            <div className="max-w-4xl mx-auto px-4">
                <h1
                    className={`text-4xl sm:text-5xl font-bold mb-4 ${isDark ? "text-white" : "text-white"
                        }`}
                >
                    About Dharti Vidhya Mandir
                </h1>
                <p
                    className={`text-lg sm:text-xl ${isDark ? "text-gray-300" : "text-white/90"
                        }`}
                >
                    A place where education is not just a goal but a journey of transformation.
                </p>
            </div>
        </section>
    );
};



const VisionSection = () => {
    const { theme } = useContext(ThemeContext);
    const isDark = theme === "dark";

    return (
        <section className={`py-16 px-6 md:px-12 ${isDark ? "bg-gray-900" : "bg-white"}`}>
            <div
                data-aos="fade-left"
                className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center"
            >
                <img
                    src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Vision"
                    className="rounded-2xl shadow-lg"
                />
                <div data-aos="fade-right">
                    <h2
                        className={`text-3xl font-bold mb-4 ${isDark ? "text-white" : "text-blue-900"
                            }`}
                    >
                        Our Vision
                    </h2>
                    <p
                        className={`text-lg leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"
                            }`}
                    >
                        At Dharti Vidhya Mandir, our vision is to foster a generation of learners who are
                        not only academically accomplished but are also emotionally intelligent, socially
                        responsible, and future-ready.
                    </p>
                </div>
            </div>
        </section>
    );
};



const MissionSection = () => {
    const { theme } = useContext(ThemeContext);
    const isDark = theme === "dark";

    return (
        <section
            data-aos="fade-down"
            className={`py-16 px-6 md:px-12 ${isDark ? "bg-gray-900" : "bg-white"}`}
        >
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                <div>
                    <h2
                        className={`text-3xl font-bold mb-4 ${isDark ? "text-white" : "text-blue-900"
                            }`}
                    >
                        Our Mission
                    </h2>
                    <p
                        className={`text-lg leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"
                            }`}
                    >
                        To provide a nurturing environment where students are encouraged to explore their
                        full potential. We aim to integrate values with academics to create holistic
                        development that prepares students for life and leadership.
                    </p>
                </div>
                <img
                    src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80"
                    alt="Mission"
                    className="rounded-2xl shadow-lg"
                />
            </div>
        </section>
    );
};


const FounderSection = () => {
    const { theme } = useContext(ThemeContext);
    const isDark = theme === "dark";

    const founders = [
        {
            name: "Hemil S. Gajera",
            image: "./asset/hemil.jpeg",
            message: `We don't settle for mediocrity – we aim for excellence. And that starts with building a world-class team and culture that's second to none. Embracing our strong values, commitment to transparency and bias for action, we strive to make the impossible a reality. It's not always easy, but it's worth it.

So if you're someone who's looking to push the boundaries and do the best work of your career, we'd love to get in touch!`,
        },
        {
            name: "Snehal S. Alagiya",
            image: "./asset/shenal.jpeg",
            message: `Innovation is not just a goal – it's our culture. We encourage everyone to bring fresh ideas and take ownership. This spirit of growth, learning, and leadership drives our journey forward.

If you share this passion, we welcome you to be part of our mission!`,
        },
    ];

    return (
        <div
            className={`py-10 px-4 md:px-16 transition duration-500 ease-in-out ${isDark ? "bg-gray-900 text-white" : "bg-white text-gray-900"
                }`}
        >
            <h1 className="text-center pb-5 text-3xl font-semibold">
                Founder's Of{" "}
                <span className="font-extrabold">
                    Dharti Vidya Mandir
                </span>
            </h1>

            <div className="grid md:grid-cols-2 gap-8">
                {founders.map((founder, index) => (
                    <div
                        key={index}
                        className={`rounded-lg p-6 shadow-lg flex flex-col md:flex-row items-center gap-6 transition duration-500 ${isDark ? "bg-blue-800 text-white" : "bg-blue-900 text-white"
                            }`}
                    >
                        <div className="w-60 border h-70 rounded overflow-hidden flex-shrink-0 transition duration-500">
                            <img
                                src={founder.image}
                                alt={founder.name}
                                className="w-full h-full object-cover"
                            />
                            <div className="text-center mt-2">
                                <h3 className="text-lg font-semibold">{founder.name}</h3>
                            </div>
                        </div>

                        <div className="flex-1 text-sm mt-4 md:mt-0">
                            <p className="text-3xl text-cyan-300 leading-tight mb-2">“</p>
                            <h2 className="text-xl font-bold">{founder.name}</h2>
                            <p className="whitespace-pre-line">{founder.message}</p>
                            <p className="text-3xl text-cyan-300 leading-tight mt-2 text-right">”</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};







const GallerySection = () => {
    const { theme } = useContext(ThemeContext);
    const isDark = theme === "dark";

    const images = [
        "https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1686688643200-761ccef9c545?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ];

    return (
        <section
            className={`py-16 px-6 md:px-12 transition duration-500 ${isDark ? "bg-gray-900 text-white" : "bg-white text-gray-900"
                }`}
        >
            <div className="max-w-6xl mx-auto text-center">
                <h2
                    className={`text-3xl font-bold mb-6 ${isDark ? "text-white" : "text-blue-900"
                        }`}
                >
                    Campus Gallery
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {images.map((src, i) => (
                        <img
                            key={i}
                            src={src}
                            alt={`Campus ${i + 1}`}
                            loading="lazy"
                            className="rounded-lg shadow-md hover:scale-105 transition duration-300 ease-in-out"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};




export default AboutUs;