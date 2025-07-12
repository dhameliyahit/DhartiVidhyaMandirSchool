import { useState, useEffect } from 'react'
import Layout from './../Layout/Layout';

const HomePage = () => {
  return (
    <Layout>
      <HeroSection />
     <MarqueeBanner/>
    </Layout>
  )
}

const HeroSection = () => {
  const messages = [
    "Nurturing Young Minds for a Brighter Tomorrow.",
    "Where Knowledge Meets Imagination.",
    "Empowering Every Student to Succeed.",
  ];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (index >= messages.length) return;

    const currentMessage = messages[index];
    const delay = deleting ? 50 : 100;

    const timeout = setTimeout(() => {
      setText(currentMessage.substring(0, subIndex));

      if (!deleting && subIndex === currentMessage.length) {
        setTimeout(() => setDeleting(true), 1500);
      } else if (deleting && subIndex === 0) {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % messages.length);
      } else {
        setSubIndex((prev) => prev + (deleting ? -1 : 1));
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index]);

  const SchoolIMG = "./asset/school.png"

  return (
    <section
      className="relative w-full h-[70vh] sm:h-[85vh] bg-center bg-no-repeat bg-cover flex items-center justify-center text-center"
      style={{
        backgroundImage: "url('/asset/school.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 bg-opacity-50 z-0"></div>
      {/* Text Content */}
      <div className="relative z-10 max-w-3xl px-4 sm:px-8 text-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold drop-shadow-lg">
          Welcome to <span className="text-white">Dharti Vidhya Mandir</span>
        </h1>
        <p className="mt-4 text-lg sm:text-xl md:text-2xl font-medium h-[3rem] sm:h-[3.5rem]">
          <span className="text-white">{text}</span>
          <span className="text-white  animate-pulse">|</span>
        </p>
      </div>
    </section>
  );
};

const MarqueeBanner = () => {
  return (
    <div className="w-full overflow-hidden bg-yellow-100 py-3">
      <div className="whitespace-nowrap animate-marquee text-lg sm:text-xl font-semibold text-yellow-900">
        <span className="mx-8">You deserve better — and we will prove it.</span>
        <span className="mx-8">Unlock your potential at Dharti Vidhya Mandir.</span>
        <span className="mx-8">We build futures, not just report cards.</span>
      </div>
    </div>
  );
};



export default HomePage