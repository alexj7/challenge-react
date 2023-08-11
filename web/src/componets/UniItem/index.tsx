import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

import { useDataContext } from "../../context/dataContext";
import { FavoriteIcon, LinkIcon } from "../icons";

import type { University } from "../../types/university";
import { Api } from "../../api";


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

  const navigate = useNavigate();
  const { updateFavs, state: { favoritesUni, user }, selectUni } = useDataContext()

  const isFavorite = useMemo(() => favoritesUni.some(u => u.name === name), [favoritesUni])

  const onSelectUni = async (): Promise<void> => {
    await selectUni({
      name,
      country,
      ...res
    })
    navigate(`/detail/${name}`)
  }

  const onFavorite = async () => {
    if (!isFavorite) {
      await Api.postFavorite({ name, country, ...res, userId: user.id })
    } else {
      const id = favoritesUni.find(u => u.name === name)['id']
      await Api.deleteFavorite(id)
    }
    updateFavs()
  }

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
          <FavoriteIcon favorite={isFavorite} onClick={onFavorite} />
          <LinkIcon onClick={onSelectUni} />
        </div>
      </div>
    </div>
  );
};
