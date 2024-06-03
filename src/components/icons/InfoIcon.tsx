import { cn } from "../../utils/tailwind/cn";
import { IconProps } from "./types";

export default function InfoIcon({ className }: Props) {
  return (
    <svg className={cn("w-6 h-6 stroke-gray-400", className)} stroke="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  );
}

type Props = IconProps & {
}
