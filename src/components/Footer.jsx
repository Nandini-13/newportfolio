import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="border-t border-gray-300 mt-8 py-4">
    <div className="container mx-auto flex flex-row justify-center items-center">
      <p className="text-gray-600 mx-10">Crafted by Nandini Gangadharan</p>
      <a className="text-2xl" href="https://www.linkedin.com/in/nandini-gangadharan/">
      <FaLinkedin />
      </a>
      <a className="text-2xl ml-2" href="https://github.com/Nandini-13/">
      <FaGithub />
      </a>
    </div>
  </footer>
  );
};

export default Footer;
