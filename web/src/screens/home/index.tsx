import { UniItem } from "../../componets/UniItem";
import { SearchBox } from "./searchBox";

export function Home(): JSX.Element {
  return (
    <section className="bg-gray-100 h-full pt-14">
      <div className="w-[600px] mx-auto">
        <SearchBox />

        <UniItem favorite={false} country={"country"} name={"University name"} />
        <UniItem favorite={false} country={"country"} name={"University name"} />
        <UniItem favorite={false} country={"country"} name={"University name"} />
        <UniItem favorite={false} country={"country"} name={"University name"} />
        <UniItem favorite={false} country={"country"} name={"University name"} />
      </div>
    </section>
  );
}
