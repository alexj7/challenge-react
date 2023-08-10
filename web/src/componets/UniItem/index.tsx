import type { University } from "../../types/university";

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
  favorite,
  name,
  country,
}) => {
  return (
    <div className={`shadow-md bg-white py-4 px-8 mb-3`}>
      <div className="flex">
        <span className="font-open-sans text-lg font-bold text-gray-700">{name}</span>
        <span className="font-open-sans  text-lg text-zinc-500 ml-4">
          {country}
        </span>
      </div>
    </div>
  );
};
