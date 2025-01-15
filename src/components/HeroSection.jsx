import headImg from "../assets/transpbgpic.png";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="flex flex-row w-full justify-between">
      <div className="flex flex-col justify-center w-3/6 pl-5">
        <h2 className="text-5xl text-[#24285b] my-8 font-bold text-center">Hi! My name is Nandini.</h2>
        <h3 className="text-xl text-[#24285b] mb-14 text-center">I am a Computer Science Engineering Student</h3>
        <div className="flex flex-row items-center justify-center">
        <a href="#" className="bg-white border-2 text-[#24285b] border-[#24285b] py-3 text-lg px-4 mx-3 rounded-full">
          Know More 
        </a>
        <a href="mailto:ng9575@srmist.edu.in" className="py-3 px-4 mx-3 text-lg border bg-[#ff6b6b] rounded-full">
          Contact Me
        </a></div>
      </div>      
      <div className="w-3/6 rounded-tl-full rounded-tr-3xl bg-[#ebe7e2]">
      <img className="float-right w-9/12" src={headImg} alt="Hero Image" /> 
      </div>
    </div>
  );
};

export default HeroSection;
