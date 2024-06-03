import { cn } from "../../utils/tailwind/cn";
import { IconProps } from "./types";

export default function CloseIcon({ className }: Props) {
  return (
    <svg className={cn("w-6 h-6 text-gray-500", className)} stroke="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M6 18 17.94 6M18 18 6.06 6" />
    </svg>
  );
}

type Props = IconProps & {
}
