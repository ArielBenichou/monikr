import { Input } from "@nextui-org/input";
import Logo from "./components/Logo";
import { useState } from "react";
import ToggleList from "./components/ui/ToggleList";
import TagList from "./components/ui/tags/TagList";
import { onEnter } from "./utils/keyboard/on-key";
import { produce } from "immer";
import Card from "./components/ui/Card";
import TagListInput, { useTagListInput } from "./components/ui/tags/TagListInput";

export default function App() {
  const [include, setInclude] = useTagListInput();
  const [exclude, setExclude] = useTagListInput();
  const [words, setWords] = useTagListInput();

  return (
    <main className="h-dvh w-dvw flexbox gap-2">
      <div className="self-start p-4">
        <Logo />
      </div>
      <div className="flexbox flex-row p-4 items-start">
        {/* FILTERS */}
        <Card>
          <div className="font-semibold text-xl">Filters</div>
          <TagListInput
            label="Include"
            size="sm"
            value={include}
            setValue={setInclude}
            splitter=""
          />
          <TagListInput
            label="Exclude"
            size="sm"
            color="danger"
            value={exclude}
            setValue={setExclude}
            splitter=""
          />
          <TagListInput
            label="Words"
            size="sm"
            color="primary"
            value={words}
            setValue={setWords}
            splitter=" "
          />
        </Card>

        {/* MAIN */}
        <div className="flexbox grow-[2]">
          main
        </div>

        {/* FLAGS */}
        <Card>
          <div className="font-semibold text-xl">Algorithms</div>
          <ToggleList />
        </Card>
      </div>
    </main>
  )
}
