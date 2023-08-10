import { useSearchBox } from "./useSearchBox";

import { Button } from "../../../componets/button";
import { SearchIcon } from "../../../componets/icons";
import { Input } from "../../../componets/input";

import type { University } from "../../../types/university";

type SearchBoxProps = {
  options: University[];
  isLoading: boolean;
  onSearch: (event: string) => void;
  onAutoComplete: (event: string) => void;
};

export const SearchBox: React.FC<SearchBoxProps> = ({
  options,
  isLoading,
  onSearch,
  onAutoComplete,
}: SearchBoxProps): JSX.Element => {

  const { isOpen, isTyping, searchText, handleOnChange, handleSearch, menuRef } = useSearchBox({
    onSearch,
    onAutoComplete,
  });

  return (
    <div className="flex mb-14">
      <div className="flex flex-col w-full relative">
        <Input isLoading={isLoading || isTyping} placeholder={"University name"} value={""} onChange={(event) => handleOnChange(event.target.value)} />
        {searchText && options.length === 0 && !isLoading && !isTyping && (
          <span className="text-orange-600 text-sm ml-3 top-16 absolute">No hay resultados para: {searchText}</span>
        )}

        {/* Options menu */}
        {isOpen && (
          <div className="absolute top-14 bg-white mt-2 shadow-md w-full min-h-12" ref={menuRef}>
            {options.map((uni: University) => (
              <div className="font-open-sans text-lg font-bold text-gray-700 pl-4 py-2 hover:bg-gray-100 cursor-pointer">
                {uni.name}
              </div>
            ))}
          </div>
        )}
      </div>

      <Button className="w-14 ml-4" text={""} icon={<SearchIcon />} onClick={handleSearch} />
    </div>
  );
};
