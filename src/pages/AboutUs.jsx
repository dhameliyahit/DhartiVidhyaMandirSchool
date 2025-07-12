import Layout from "../Layout/Layout";

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
    return (
        <section className="text-center py-16 bg-blue-900 text-white">
            <div className="max-w-4xl mx-auto px-4">
                <h1 className="text-4xl sm:text-5xl font-bold mb-4">About Dharti Vidhya Mandir</h1>
                <p className="text-lg sm:text-xl">
                    A place where education is not just a goal but a journey of transformation.
                </p>
            </div>
        </section>
    );
};


const VisionSection = () => {
    return (
        <section className="py-16 px-6 md:px-12">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                <img
                    src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Vision"
                    className="rounded-2xl shadow-lg"
                />
                <div>
                    <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Vision</h2>
                    <p className="text-gray-700 text-lg leading-relaxed">
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
    return (
        <section className="py-16 px-6 md:px-12 bg-white">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                <div>
                    <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Mission</h2>
                    <p className="text-gray-700 text-lg leading-relaxed">
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
    return (
        <section className="py-16 px-6 md:px-12 bg-blue-50">
            <div className="max-w-4xl mx-auto text-center">
                <img
                    src="https://randomuser.me/api/portraits/men/75.jpg"
                    alt="Founder Hemil"
                    className="mx-auto rounded-full w-32 h-32 mb-6 shadow-lg object-cover"
                />
                <h2 className="text-3xl font-bold text-blue-900 mb-2">Hemil</h2>
                <p className="text-gray-600 italic mb-6">Founder of Dharti Vidhya Mandir</p>
                <p className="text-gray-700 leading-relaxed text-lg">
                    With a dream of creating an inclusive and value-driven education system, Hemil founded
                    Dharti Vidhya Mandir to empower students with knowledge, confidence, and compassion.
                    His vision continues to inspire every aspect of our institution.
                </p>
            </div>
        </section>
    );
};

const images = [
    "https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // 1
    "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // 2
    "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // 3
    "https://images.unsplash.com/photo-1686688643200-761ccef9c545?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];




const GallerySection = () => {
    return (
        <section className="py-16 px-6 md:px-12">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-blue-900 mb-6">Campus Gallery</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {images.map((src, i) => (
                        <img
                            key={i}
                            src={src}
                            alt={`Campus ${i + 1}`}
                            loading="lazy"
                            className="rounded-lg shadow-md hover:scale-105 transition"
                        />

                    ))}
                </div>
            </div>
        </section>
    );
};



export default AboutUs;