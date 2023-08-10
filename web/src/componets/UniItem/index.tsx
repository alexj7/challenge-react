import type { University } from "../../types/university";
import { FavoriteIcon, LinkIcon } from "../icons";

type UniItemProps = {
  /**
   * Identify if item is marked as favorite
   */
  favorite: boolean;
} & Pick<University, "country" | "name">;

/**
 * UniItem component.
 *
 * @param {UniItemProps}
 * @returns {JSX.Element}
 */
export const UniItem: React.FC<UniItemProps> = ({
  name,
  country,
  favorite,
}) => {
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
          <FavoriteIcon />
          <LinkIcon />
        </div>
      </div>
    </div>
  );
};
