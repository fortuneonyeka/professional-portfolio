import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full lg:px-[10vw] h-screen bg-gradient-to-b from-gray-800 to-black text-gray-200">
      <div className="mx-auto p-4 max-w-screen-lg flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-green-200 font-signature capitalize">About</p>
        </div>
        <p className="text-xl mt-10">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
          minima officia, voluptate reiciendis dolore animi, earum nemo aut
          aliquam fugiat ex, et quae maxime quod veritatis? Quaerat labore
          voluptate accusantium architecto non iure aliquid minima deleniti vel
          fugit a laudantium voluptas quod incidunt soluta perferendis aperiam
          quidem dicta, rem temporibus?
        </p>
        <br />

      </div>
    </div>
  );
};

export default About;
