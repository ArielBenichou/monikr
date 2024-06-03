import { Switch, SwitchProps } from "@nextui-org/switch";
import { Tooltip } from "@nextui-org/tooltip";
import InfoIcon from "../../components/icons/InfoIcon";

export default function AlgoToggle({ tooltip, children, ...switchProps }: Props) {
  return (
    <Switch {...switchProps}>
      <div className="flex items-baseline gap-1">
        <span className="font-semibold">{children}</span>
        <Tooltip content={tooltip}>
          <div>
            <InfoIcon className="size-3" />
          </div>
        </Tooltip>
      </div>

    </Switch>
  );
}

interface Props extends Omit<SwitchProps, ""> {
  children: React.ReactNode;
  tooltip: string;
}

