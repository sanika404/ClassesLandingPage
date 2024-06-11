import { features } from "../constants";

const FeatureSection = () => {
  return (
    <div id="aboutUs" className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
      <h2 className="text-2xl sm:text-5xl lg:text-3xl text-center my-8 tracking-wide">
        About Us
      </h2>


        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Why we are{""}
          <span className="bg-gradient-to-r from-[#09790c] via-[#4ab816] to-[#8aff00] text-transparent bg-clip-text py-3 px-4 mx-3 rounded-md">
          Better?
          </span>
        </h2>
        <div className="flex items-center justify-center">
          <p className="mt-2 text-lg text-center text-neutral-500 max-w-4xl">
            At My Coaching, we believe that everyone has the potential to achieve greatness. Our mission is to empower individuals through personalized coaching that focuses on their unique strengths and goals. With years of experience and a passion for helping others, our team of certified coaches is dedicated to guiding you on your journey to success.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex">
              <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-green-700 justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                <p className="text-md p-2 mb-20 text-neutral-500">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
