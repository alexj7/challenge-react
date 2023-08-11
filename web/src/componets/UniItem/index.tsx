import { useContext, useMemo } from "react";

import { DataContext } from "../../context/dataContext";
import { FavoriteIcon, LinkIcon } from "../icons";

import type { University } from "../../types/university";


/**
 * UniItem component.
 *
 * @param {UniItemProps}
 * @returns {JSX.Element}
 */
export const UniItem: React.FC<University> = ({
  name,
  country,
  ...res
}) => {

  const { updateFavs, state: { favoritesUni } } = useContext(DataContext)

  const isFavorite = useMemo(() => favoritesUni.some(u => u.name === name), [favoritesUni])

  return (
    <div className={`shadow-md bg-white py-4 px-8 mb-3`}>
      <div className="flex">
        <span className="font-open-sans text-lg font-bold text-gray-700">
          {name}
        </span>
        <span className="font-open-sans  text-lg text-zinc-500 ml-4 mr-6">
          {country}
        </span>

        <div className="flex ml-auto items-start w-14 justify-between">
          <FavoriteIcon favorite={isFavorite} onClick={() => updateFavs({ name, country, ...res })} />
          <LinkIcon onClick={() => console.log('link click', name)} />
        </div>
      </div>
    </div>
  );
};
