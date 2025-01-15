import { Link } from "react-router-dom";

const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="sticky shadow-md top-0 z-50 py-1 bg-white">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
        <Link to="/">
          <div className="flex items-center flex-shrink-0">            
            <h1 className="py-2 text-5xl font-bold">Portfolio</h1>           
          </div>
          </Link>
          <ul className="hidden lg:flex ml-14 space-x-12 text-xl">            
          <li>
            <Link to="about" onClick={() => scrollToSection("about")}>
              About
            </Link>
          </li>
                
          <li>
          <Link to="highlights" onClick={() => scrollToSection("highlights")}>
              Highlights
            </Link>
          </li> 
          
          </ul>
          
          
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
