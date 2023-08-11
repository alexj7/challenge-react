import { useEffect, useCallback } from "react";
import { useDataContext } from "../../context/dataContext";
import { UniItem } from "../../componets/UniItem";
import { CurrencyNames } from "../../types/country";

export function UniDetail(): JSX.Element {
  const {
    state: { selectedUni, favoritesUni, selectedCountry },
    selectUni,
    updateFavs,
  } = useDataContext();

  const getFavs = useCallback(async () => {
    try {
      await updateFavs();
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [updateFavs]);

  useEffect(() => {
    if (!selectedUni && favoritesUni.length > 0) {
      selectUni(favoritesUni[0]);
    }
  }, [favoritesUni]);

  useEffect(() => {
    getFavs();
  }, []);

  const [currencyKey] = Object.keys(selectedCountry?.currencies);
  const [langKey] = Object.keys(selectedCountry?.languages);

  console.log(currencyKey, langKey)

  return (
    <section className="bg-gray-100 overflow-hidden w-full h-full py-14 flex">
      <div className="w-[1250px] overflow-auto flex justify-between mx-auto">

        <div className="w-[600px] mx-auto flex flex-col">
          <div className="font-open-sans font-bold text-3xl text-gray-700 mb-3 text-sky-500"> My favorites</div>


          {favoritesUni.map((uni, index: number) => (<UniItem key={index} {...uni} />))}

          {
            favoritesUni.length == 0 &&
            <span className="font-open-sans font-bold text-xl text-gray-300 mt-32"> No hay universidades marcadas como favoritas</span>
          }

        </div>

        <div className="w-[600px] mx-auto flex flex-col mb-3">
          <div className="font-open-sans font-bold text-3xl text-gray-700 mb-3 text-sky-500"> Selected university</div>

          <div className="w-full flex flex-grow mx-auto bg-white shadow-md rounded-md px-8 py-4">

            {selectedUni?.name
              ?
              <div className="font-open-sans text-md text-gray-700">
                <h1 className="font-bold text-lg text-gray-700 mb-4">
                  {selectedUni?.name}
                </h1>

                <p className="">
                  Malesuada purus nibh dictumst odio sed elit adipiscing. Turpis malesuada nulla molestie ac gravida magna. Imperdiet tempus, commodo non morbi nisi. Et sit dictum velit facilisi id. Sed augue eget metus non habitant. Donec praesent vel tellus consequat turpis venenatis quis.
                </p>

                <p className="mt-5">
                  Curabitur urna arcu et venenatis, aliquet turpis elit risus. Sapien, at vitae molestie purus nec quam fermentum adipiscing. Varius eget nibh mi, ut dui nisi, cursus nunc. Hendrerit faucibus amet vel nisl, integer. Odio sit pretium sed nascetur vitae in aliquam feugiat integer.
                </p>


                <p className="mt-5">Website:  <a className="text-sky-500 underline" href={selectedUni?.web_pages[0]} target="_blank" >{selectedUni?.web_pages[0]}</a> </p>
                <p className="mt-5">Location:  <span className="text-sky-500 underline" >{selectedUni?.country}, {selectedCountry?.capital[0]}</span> </p>
                <p className="mt-5">Country’s capital:  <span className="text-sky-500 underline" >{selectedUni?.country}, {selectedCountry?.capital[0]}</span> </p>
                <p className="mt-5">Currency:  {selectedCountry?.currencies[currencyKey]?.name} ({selectedCountry?.currencies[currencyKey]?.symbol}) </p>
                <p className="mt-5">Language:  {selectedCountry?.languages[langKey]} </p>
                <p className="mt-5">Population:  {selectedCountry?.population} </p>

              </div>
              :
              <span className="font-open-sans font-bold text-xl text-gray-300 mt-28 text-center"> Selecciona alguna universidad para ver detalles</span>
            }


          </div>
        </div>
      </div>
    </section>
  );
}
