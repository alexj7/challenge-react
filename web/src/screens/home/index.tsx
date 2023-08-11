import { useCallback, useState } from "react";

import { UniItem } from "../../componets/UniItem";
import { SearchBox } from "./searchBox";
import { Api } from "../../api";
import { University } from "../../types/university";

export function Home(): JSX.Element {

  const [data, setData] = useState<University[]>([])
  const [options, setOptions] = useState<University[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const searchUniversities = useCallback(
    async (name?: string) => {
      try {
        setIsLoading(true)
        const universitiesByName = await Api.searchByName({ name });
        setIsLoading(false)
        setData(universitiesByName)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    [],
  )

  const searchUniversitiesAutoComplete = useCallback(
    async (name?: string) => {
      try {
        setIsLoading(true)
        const universitiesByNameAndCountry = await Api.searchByName({ name, limit: 5 });
        setIsLoading(false)
        setOptions(universitiesByNameAndCountry)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    [],
  )

  return (
    <section className="bg-gray-100 h-full pt-14 overflow-hidden flex flex-col">
      <div className="lg:w-[600px] w-full lg:px-0 px-8 mx-auto">
        <SearchBox isLoading={isLoading} onSearch={searchUniversities} onAutoComplete={searchUniversitiesAutoComplete} options={options} />
      </div>
      <div className="overflow-auto lg:w-[600px] w-full lg:px-0 px-8 flex flex-col mx-auto">
        {data.map((uni: University) => (
          <UniItem
            {...uni}
          />
        ))}
      </div>
    </section >
  );
}
