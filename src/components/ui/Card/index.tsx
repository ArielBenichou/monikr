import { cn } from "../../../utils/tailwind/cn";

export default function Card({ children, className }: Props) {
  return (
    <div className={cn("flexbox max-w-sm gap-4 p-4 border-3 rounded-lg", className)}>
      {children}
    </div>
  );
}

interface Props {
  children: React.ReactNode;
  className?: string;
}
