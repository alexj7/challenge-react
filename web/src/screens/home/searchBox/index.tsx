import { Button } from "../../../componets/button";
import { Input } from "../../../componets/input";
import { University } from "../../../types/university";

export const SearchBox = (): JSX.Element => {
  return (
    <div className="flex mb-14">
      <div className="flex flex-col w-full relative">
        <Input placeholder={"University name"} value={""} onChange={() => {}} />

        {/* Options menu */}
        <div className="absolute top-14 bg-white mt-2 shadow-md w-full">
          <div className="font-open-sans text-lg font-bold text-gray-700 pl-4 py-2 hover:bg-gray-100 cursor-pointer">
            University name
          </div>
          <div className="font-open-sans text-lg font-bold text-gray-700 pl-4 py-2 hover:bg-gray-100 cursor-pointer">
            University name
          </div>
          <div className="font-open-sans text-lg font-bold text-gray-700 pl-4 py-2 hover:bg-gray-100 cursor-pointer">
            University name
          </div>
          <div className="font-open-sans text-lg font-bold text-gray-700 pl-4 py-2 hover:bg-gray-100 cursor-pointer">
            University name
          </div>
        </div>
      </div>

      <Button
        className="w-14 ml-4"
        text={""}
        icon={undefined}
        onClick={() => {}}
      />
    </div>
  );
};
