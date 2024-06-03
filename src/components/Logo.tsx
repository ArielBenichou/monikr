import { zip } from "remeda";
import SquidIcon from "/squid.svg";
import { Unit } from "../utils/types/functions";

export default function Logo({ onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className="flex flex-row bg-black rounded-lg p-1 px-3 pl-14 relative cursor-pointer">
      <img src={SquidIcon} alt="Logo" className="size-20 absolute -left-6 -top-4" />
      <div className="flex self-start flex-row text-4xl tracking-wider text-white">
        {gradiant("monikr")}
      </div>
    </div>
  );
}

interface Props {
  onClick?: Unit;
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
  return zip(word.split(""), weights).map(([letter, weight], idx) =>
    <span key={idx} className={weight}>{letter}</span>
  );
}
