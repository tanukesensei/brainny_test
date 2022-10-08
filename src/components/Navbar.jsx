import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav
      className="
        flex flex-col 
        md:flex-row 
        justify-between
        items-center pt-11"
    >
      <Logo />

      <div className="space-x-5">
        <button className="text-white">
          <a href="#">Inicio</a>
        </button>
        <button className="text-white">
          <a className="plans">Planos</a>
        </button>
        <button
          className="
                  h-12 w-32 
                  bg-white
                  text-purple-900
                  rounded"
        >
          <a href="#">Fazer Login</a>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
