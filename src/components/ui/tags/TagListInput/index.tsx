import { Input } from "@nextui-org/input";
import { useState } from "react";
import TagList from "../TagList";
import { onEnter } from "../../../../utils/keyboard/on-key";
import { produce } from "immer";
import { TagProps } from "../Tag";
import useTagListInput from "./useTagListInput";

export default function TagListInput({ label, value, setValue, onSync, splitter, ...tagProps }: Props) {
  const [inputValue, setInputValue] = useState<string>("");

  const sync = () => {
    setValue(produce(draft => {
      const newTags = splitter !== undefined ? inputValue.split(splitter) : [inputValue];
      newTags.forEach(letter => {
        draft.add(letter.toLowerCase())
      });
      onSync?.(newTags);
    }));
    setInputValue("");
  }

  const remove = (tag: string) => {
    setValue(produce(draft => {
      draft.delete(tag);
    }));
  }

  return (
    <div className="flexbox gap-2">
      <Input
        value={inputValue}
        onValueChange={setInputValue}
        onKeyDown={onEnter(sync)}
        label={label}
        size="sm"
      />
      <TagList
        onTagClick={remove}
        {...tagProps}
        items={[...value.values()].sort()}
      />
    </div>

  )
}

export { useTagListInput };

interface Props extends TagProps {
  label?: string;
  value: ReturnType<typeof useTagListInput>[0];
  setValue: ReturnType<typeof useTagListInput>[1];
  splitter?: string;
  onSync?: (value: string[]) => void;
}
