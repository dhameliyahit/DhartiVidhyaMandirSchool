import React from "react";
import Layout from "../Layout/Layout";

const facultyMembers = [
  {
    name: "Mr. Ramesh Patel",
    position: "Principal",
    subject: "Administration",
    image: "https://api.dicebear.com/7.x/lorelei/svg?seed=Principal",
  },
  {
    name: "Ms. Nidhi Shah",
    position: "Vice Principal",
    subject: "English & Moral Science",
    image: "https://api.dicebear.com/7.x/lorelei/svg?seed=VicePrincipal",
  },
  {
    name: "Mr. Kunal Mehta",
    position: "Senior Teacher",
    subject: "Mathematics (Std. 9-10)",
    image: "https://api.dicebear.com/7.x/lorelei/svg?seed=Mathematics",
  },
  {
    name: "Ms. Ritu Parmar",
    position: "Science Teacher",
    subject: "Physics & Chemistry (Std. 8-10)",
    image: "https://api.dicebear.com/7.x/lorelei/svg?seed=Science",
  },
  {
    name: "Mr. Ajay Chauhan",
    position: "Sports Instructor",
    subject: "Physical Education",
    image: "https://api.dicebear.com/7.x/lorelei/svg?seed=Sports",
  },
  {
    name: "Ms. Komal Dave",
    position: "Computer Faculty",
    subject: "Computer Science (Std. 6-10)",
    image: "https://api.dicebear.com/7.x/lorelei/svg?seed=Computer",
  },
];

const Facility = () => {
  return (
    <Layout>

      <section className="bg-gradient-to-b from-[#e3edff] to-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-900">
              Meet Our Faculty
            </h2>
            <p className="text-gray-600 mt-4 text-lg">
              Passionate educators guiding the journey of learning and growth.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {facultyMembers.map((faculty, index) => (
              <div
                key={index}
                data-aos="zoom-out-right"
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 border border-blue-100"
              >
                <img
                  src={faculty.image}
                  alt={faculty.name}
                  className="w-24 h-24 mx-auto mb-4 rounded-full border-4 border-blue-200"
                />
                <h3 className="text-xl font-bold text-blue-800 mb-1">
                  {faculty.name}
                </h3>
                <p className="text-sm font-medium text-blue-600">
                  {faculty.position}
                </p>
                <p className="mt-2 text-gray-500">{faculty.subject}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Facility;
