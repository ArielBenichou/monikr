import { tv, type VariantProps } from "tailwind-variants";
import { Unit } from "../../../../utils/types/functions";
import CloseIcon from "../../../icons/CloseIcon";
import { SlotsToClasses } from "@nextui-org/theme";

export default function Tag({ children, onClick, classNames, ...tvProps }: Props) {
  const { base, icon } = tag(tvProps);
  return (
    <div
      className={base({ className: classNames?.base })}
      onClick={onClick}
    >
      {children}
      <CloseIcon className={icon({ className: classNames?.icon })} />
    </div>
  );
}

const tag = tv({
  slots: {
    base: "flex items-center rounded-lg gap-1 font-black cursor-pointer py-0.5 px-1",
    icon: "size-full",
  },
  variants: {
    size: {
      sm: { base: "pl-2 gap-0.5", icon: "size-4" },
      md: { base: "pl-3" },
    },
    color: {
      default: { base: "bg-black text-white", icon: "stroke-gray-400" },
      primary: { base: "bg-blue-500 text-white", icon: "stroke-white" },
      danger: { base: "bg-red-500 text-white", icon: "stroke-white" },
    },
  },
  defaultVariants: {
    color: 'default',
    size: 'md'
  }
});

export type TagProps = VariantProps<typeof tag>;

interface Props extends TagProps {
  children?: React.ReactNode;
  onClick?: Unit;
  classNames?: SlotsToClasses<keyof ReturnType<typeof tag>>;
}
