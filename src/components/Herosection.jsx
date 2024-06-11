
import class1 from "../assets/class1.jpg";
import class2 from "../assets/class2.jpg";


const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
      Achieve Your Full Potential with 
        <span className="bg-gradient-to-r from-[#09790c] via-[#4ab816] to-[#8aff00] text-transparent bg-clip-text py-3 px-4 mx-3 rounded-md">
          {" "}
          Expert Coaching
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
      Personalized coaching to help you reach your goals and transform your life.
      </p>
      <div className="flex justify-center  my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-[#09790c] via-[#4ab816] to-[#8aff00] py-3 px-4 mx-3 rounded-md text-white "
        >
          Join us now 
        </a>
      </div>

      <div className="flex mt-10 justify-center">

      <img className="rounded-lg w-1/2 border border-green-700 shadow-sm shadow-white-400 mx-2 my-4 h-500 w-500 mr-2" src={class1} alt="class" />
      <img className="rounded-lg w-1/2 border border-green-700 shadow-sm shadow-white-400 mx-2 my-4 h-500 w-500 mr-2" src={class2} alt="class" />

        
       
      </div>
    </div>
  );
};

export default HeroSection;