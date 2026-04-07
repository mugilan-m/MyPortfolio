import React from "react";
import HappyClients from "../components/Tech";

function page() {
  return (
    <div>
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-4">About Me</h1>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          I am a passionate Front End Developer with a strong foundation in C, Java, HTML5, CSS3, JavaScript, Node.js, MySQL, MongoDB, and various development tools. I have a keen eye for design and a commitment to creating seamless user experiences. With a background in both programming and design, I bring a unique perspective to my projects, ensuring that they are not only functional but also visually appealing. I am dedicated to continuous learning and growth in the ever-evolving field of web development.
        </p>
      </section>

        <section className="max-w-4xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-semibold mb-4">Hobbies</h2>

          <div className="bg-white/80 dark:bg-gray-900/60 p-6 rounded">
            <div>
              <h3 className="text-xl font-medium">Guitar ♫⋆｡♪ ₊˚♬</h3>
              <p className="text-gray-700 dark:text-gray-300">
                In my free time, I enjoy playing guitar
              </p>
            </div>
          </div>

          <div className="mt-6">
            <img
              src="/guitar.jpg"
              alt="Guitar"
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>
        </section>

      <HappyClients />
    </div>
  );
}

export default page;
