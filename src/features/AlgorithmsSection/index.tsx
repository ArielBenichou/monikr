import { Input } from "@nextui-org/input";
import { onEnter } from "../../utils/keyboard/on-key";
import { useState } from "react";
import useAlgorithms from "./useAlgorithms";
import AlgoToggle from "./AlgoToggle";
import fuzzysort from "fuzzysort";
import { produce } from "immer";


export default function AlgorithmsSection({ value, setValue }: Props) {
  const [search, setSearch] = useState("");
  const cleanSearch = () => setSearch("");
  const algorithms = [
    { key: "droppr", label: "droppr", description: "Drop vowels to sound cool" },
    { key: "xFactor", label: "X FACTOR", description: "overusing 'x'" },
    { key: "particleSmash", label: "Particles Smash", description: "Default Engine", disabled: true },
  ] satisfies { key: AlgoKey; label: string; description: string; disabled?: boolean }[];

  const toggle = (key: AlgoKey, v: boolean) => {
    setValue(produce(draft => {
      draft[key] = v;
    }));
  }

  return (
    <div className="flexbox gap-4">
      <Input
        value={search}
        onValueChange={setSearch}
        variant="underlined"
        placeholder="search..."
        size="sm"
        onKeyDown={onEnter(cleanSearch)}
      />
      <div className="flexbox items-start gap-2 max-h-72 overflow-auto">
        {search
          ? fuzzysort.go(
            search,
            algorithms,
            { key: 'label', }
          ).map((res) => <AlgoToggle
            key={res.obj.key}
            tooltip={res.obj.description}
            isDisabled={res.obj.disabled}
            isSelected={value[res.obj.key]}
            onValueChange={(v) => toggle(res.obj.key, v)}
          >
            {res.highlight((m, i) => <b className="underline" key={i}>{m}</b>)}
          </AlgoToggle>
          )
          : algorithms
            .map((algo) =>
              <AlgoToggle
                key={algo.key}
                tooltip={algo.description}
                isDisabled={algo.disabled}
                isSelected={value[algo.key]}
                onValueChange={(v) => toggle(algo.key, v)}
              >
                {algo.label}
              </AlgoToggle>
            )}
      </div>
    </div>
  );
}

type AlgoKey = keyof Props['value'];
interface Props {
  value: ReturnType<typeof useAlgorithms>['algorithms'];
  setValue: ReturnType<typeof useAlgorithms>['setAlgorithms'];
}
