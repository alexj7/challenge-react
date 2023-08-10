import logo from "../../assets/logo.png";

export const Navbar = () => {
  return (
    <section className="shadow-md sticky top-0 bg-white z-50">
      <div className="container max-w-8xl mx-auto px-5 sm:px-10 py-4 flex items-center justify-between	">
        <div>
          <img src={logo} className="w-12" />
        </div>

        <div className="cursor-pointer hover:bg-gray-100 py-1 px-2 rounded-pill">
          <h1 className="font-open-sans font-bold text-lg text-zinc-500">
            Search
          </h1>
        </div>
      </div>
    </section>
  );
};
