import React, { useContext, useState } from "react";
import Layout from "../Layout/Layout";
import ThemeContext from "../context/ThemeContext";

const images = [
    { id: 1, url: "https://images.unsplash.com/photo-1472691681358-fdf00a4bfcfe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2Nob29sJTIwZXZlbnR8ZW58MHx8MHx8fDA%3D" },
    { id: 2, url: "https://images.unsplash.com/photo-1643321444939-ce662d82051e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNjaG9vbCUyMGV2ZW50fGVufDB8fDB8fHww" },
    { id: 4, url: "https://images.unsplash.com/photo-1559223607-a43c990c692c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 3, url: "https://images.unsplash.com/photo-1694879509529-669d8a9c7b5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNjaG9vbCUyMGV2ZW50fGVufDB8fDB8fHww" },
    { id: 5, url: "https://images.unsplash.com/photo-1594256347468-5cd43df8fbaf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRlYWNoZXInc3xlbnwwfHwwfHx8MA%3D%3D" },
    { id: 6, url: "https://images.unsplash.com/photo-1511629091441-ee46146481b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVhY2hlcidzfGVufDB8fDB8fHww" },
    { id: 7, url: "https://images.unsplash.com/photo-1591219233007-4ac041f8c2be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3R1ZGVudCUyMHRyaXB8ZW58MHx8MHx8fDA%3D" },
    { id: 8, url: "https://plus.unsplash.com/premium_photo-1683319786513-d70a11c638c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHN0dWRlbnQlMjB0cmlwfGVufDB8fDB8fHww%3D" },
    { id: 9, url: "https://plus.unsplash.com/premium_photo-1679515470684-1f6af2858b67?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3R1ZGVudCUyMHRyaXB8ZW58MHx8MHx8fDA%3D" },
    { id: 10, url: "https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 11, url: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZXZlbnR8ZW58MHx8MHx8fDA%3D" },
    { id: 12, url: "https://plus.unsplash.com/premium_photo-1663089174939-5870e2e8d62e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZXZlbnR8ZW58MHx8MHx8fDA%3D" },
    // Add more images as needed
];

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const { theme } = useContext(ThemeContext);
    const isDark = theme === "dark";

    return (
        <Layout>
            <section className={`${isDark ? "bg-[#0D1B2A] text-white" : "bg-[#173a94] text-white"} py-16 border-b-2 border-white`}>
                <div className="text-center max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-2">
                        Gallery
                    </h2>
                    <p className="text-lg">
                        Explore glimpses of activities, achievements, and moments that define the spirit of Dharti Vidhya Mandir.
                    </p>
                </div>
            </section>

            <div className={`p-4 ${isDark ? "bg-[#0a182f]" : "bg-white"} transition`}>
                <style jsx>{`
          .masonry-grid {
              column-count: 1;
              column-gap: 1rem;
          }
          @media (min-width: 640px) {
              .masonry-grid {
                  column-count: 2;
              }
          }
          @media (min-width: 768px) {
              .masonry-grid {
                  column-count: 3;
              }
          }
          @media (min-width: 1024px) {
              .masonry-grid {
                  column-count: 4;
              }
          }
          .masonry-item {
              break-inside: avoid;
              margin-bottom: 1rem;
          }
          .masonry-item img {
              width: 100%;
              height: auto;
              display: block;
          }
        `}</style>

                <div className="masonry-grid">
                    {images.map((img) => (
                        <div
                            key={img.id}
                            data-aos="zoom-in-down"
                            data-aos-delay="300"
                            data-aos-easing="ease-out-cubic"
                            className={`masonry-item w-full overflow-hidden cursor-pointer rounded-lg 
              ${isDark ? "hover:brightness-110" : "hover:scale-[1.02]"} 
              transition-transform duration-200`}
                            onClick={() => setSelectedImage(img.url)}
                        >
                            <img
                                src={img.url}
                                alt={`Gallery ${img.id}`}
                                className="w-full h-auto object-cover rounded-lg"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>

                {/* Modal */}
                {selectedImage && (
                    <div
                        className={`fixed inset-0 ${isDark ? "bg-black/90" : "bg-black/70"} flex justify-center items-center z-50 p-4`}
                        onClick={() => setSelectedImage(null)}
                    >
                        <img
                            src={selectedImage}
                            alt="Zoomed"
                            className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg object-contain"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                )}
            </div>
        </Layout>
    );
};



export default Gallery;
