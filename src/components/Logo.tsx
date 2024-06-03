import { zip } from "remeda";
import SquidIcon from "/squid.svg";

export default function Logo() {
  return (
    <div className="flex flex-row bg-black rounded-lg p-1 px-3 pl-14 relative">
      <img src={SquidIcon} alt="Logo" className="size-20 absolute -left-6 -top-4" />
      <div className="flex self-start flex-row text-4xl tracking-wider text-white">
        {gradiant("monikr")}
      </div>
    </div>
  );
}

const gradiant = (word: string) => {
  const weights = [
    "thin",
    "extralight",
    "light",
    "normal",
    // "medium",
    "semibold",
    // "bold",
    // "extrabold",
    "black",
  ].map(w => "font-" + w).reverse();
  return zip(word.split(""), weights).map(([letter, weight]) =>
    <span className={weight}>{letter}</span>
  );
}
