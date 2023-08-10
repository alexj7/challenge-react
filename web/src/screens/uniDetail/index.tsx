import { useCallback, useEffect, useState } from "react";

import { UniItem } from "../../componets/UniItem";
import { UniversitiesApi } from "../../api";
import { University } from "../../types/university";


export function UniDetail(): JSX.Element {
  const [data, setData] = useState<University[]>([]);


  const searchUniversitiesAutoComplete = useCallback(
    async (name?: string) => {
      try {
        const universitiesByNameAndCountry = await UniversitiesApi.searchUniversitiesAutoComplete(name);
        setData(universitiesByNameAndCountry)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    [],
  )

  useEffect(() => {
    searchUniversitiesAutoComplete()
  }, [])

  return (
    <section className="bg-gray-100 overflow-hidden w-full h-full py-14 flex">
      <div className="w-[1250px] overflow-auto flex justify-between mx-auto">

        <div className="w-[600px] mx-auto flex flex-col">
          <div className="font-open-sans font-bold text-3xl text-gray-700 mb-3 text-sky-500"> My favorites</div>


          {data.map((uni, index: number) => (<UniItem key={index} favorite={true} country={uni.country} name={UniDetail.name} />))}

        </div>

        <div className="w-[600px] mx-auto flex flex-col mb-3">
          <div className="font-open-sans font-bold text-3xl text-gray-700 mb-3 text-sky-500"> Selected university</div>

          <div className="w-full flex flex-grow mx-auto bg-white shadow-md rounded-md px-8 py-4">

            {data[0]?.name &&
              <div className="font-open-sans text-md text-gray-700">
                <h1 className="font-bold text-lg text-gray-700 mb-4">
                  {data[0]?.name}
                </h1>

                <p className="">
                  Malesuada purus nibh dictumst odio sed elit adipiscing. Turpis malesuada nulla molestie ac gravida magna. Imperdiet tempus, commodo non morbi nisi. Et sit dictum velit facilisi id. Sed augue eget metus non habitant. Donec praesent vel tellus consequat turpis venenatis quis.
                </p>

                <p className="mt-5">
                  Curabitur urna arcu et venenatis, aliquet turpis elit risus. Sapien, at vitae molestie purus nec quam fermentum adipiscing. Varius eget nibh mi, ut dui nisi, cursus nunc. Hendrerit faucibus amet vel nisl, integer. Odio sit pretium sed nascetur vitae in aliquam feugiat integer.
                </p>


                <p className="mt-5">Website:  <a className="text-sky-500 underline" href={data[0]?.web_pages[0]} target="_blank" >{data[0]?.web_pages[0]}</a> </p>
                <p className="mt-5">Location:  <span className="text-sky-500 underline" >{data[0]?.country}, city</span> </p>
                <p className="mt-5">Country’s capital:  <span className="text-sky-500 underline" >{data[0]?.country}, city</span> </p>
                <p className="mt-5">Country’s capital:  <span className="text-sky-500 underline" >{data[0]?.country}, city</span> </p>
                <p className="mt-5">Currency:  Name (Symbol) </p>
                <p className="mt-5">Language:  Name </p>
                <p className="mt-5">Population:  99999999 </p>

              </div>
            }



          </div>
        </div>
      </div>
    </section>
  );
}
