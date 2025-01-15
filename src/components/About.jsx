import { about } from "../constants";
import headImg from "../assets/question-79.png";

const About = () => {
  return (
    <div className="relative pt-2 bg-[#ebe7e2]">
      <div className="text-center col">
        <h2 className="text-3xl text-[#24285b] sm:text-5xl font-bold lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          About Me
        </h2>
      </div>
      <img className="float-left w-2/6" src={headImg} alt="Hero Image" /> 
      <div className="flex flex-wrap mt-10 lg:mt-20">
        
        {about.map((about, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/2">
            <div className="flex p-10">              
              <div>
                <h5 className="mt-1 mb-6 text-3xl text-[#ff6b6b] font-semibold">{about.text}</h5>
                <p className="text-lg mb-20 text-normal text-gray-800">
                  {about.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
