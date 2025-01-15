import { experienceItems } from "../constants";
import { achievementItems } from "../constants";

const Highlights = () => {
  return (
    <div className="pt-20">
      <h2 className="text-3xl text-[#ff6b6b] sm:text-5xl font-bold lg:text-6xl text-center mt-6 tracking-wide">
        Highlights
      </h2>
      <div className="flex justify-evenly px-10">
        <div className="mt-10 w-1/2">
        <h5 className="mt-1 mb-6 text-3xl text-[#24285b]  font-semibold">Experience</h5>
        {experienceItems.map((item, index) => (
            <div key={index} className="flex mb-5">
              
              <div>
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                <p className="text-md text-gray-800">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 ml-5 w-1/2">
        <h5 className="mt-1 mb-6 text-3xl text-[#24285b]  font-semibold">Achievements</h5>
          {achievementItems.map((item, index) => (
            <div key={index} className="flex mb-5">
              
              <div>
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                <p className="text-md w-11/12 text-gray-800">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Highlights;
