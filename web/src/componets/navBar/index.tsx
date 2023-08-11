import { useNavigate } from "react-router-dom";

import { useDataContext } from "../../context/dataContext";

import logo from "../../assets/logo.png";


export const Navbar = () => {

  const { removeState, state: { logged }, setState } = useDataContext()
  const navigate = useNavigate();

  const navigateTo = (route) => {
    navigate(route);
  };

  const onLogout = (): void => {
    removeState()
    setState({ logged: false, favoritesUni: [] })
    navigateTo('/login')
  }

  return (
    <section className="shadow-md sticky top-0 bg-white z-50">
      <div className="container max-w-7xl mx-auto px-5 sm:px-10 py-4 flex items-center justify-between">
        <div>
          <img src={logo} className="w-12" alt="Logo" />
        </div>

        <div className="flex">
          <div
            className="cursor-pointer hover:bg-gray-100 py-1 px-3 rounded-full mx-2"
            onClick={() => navigateTo("/")}
          >
            <h1 className="font-open-sans font-bold text-lg text-zinc-500">
              Search
            </h1>
          </div>
          {logged &&
            <>
              <div
                className="cursor-pointer hover:bg-gray-100 py-1 px-3 rounded-full mx-2"
                onClick={() => navigateTo("/detail/universidad")}
              >
                <h1 className="font-open-sans font-bold text-lg text-zinc-500">
                  Profile
                </h1>
              </div>
              <div
                className="cursor-pointer hover:bg-gray-100 py-1 px-3 rounded-full mx-2"
                onClick={onLogout}
              >
                <h1 className="font-open-sans font-bold text-lg text-zinc-500">
                  Logout
                </h1>
              </div>
            </>
          }
        </div>
      </div>
    </section>
  );
};
