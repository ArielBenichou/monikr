
import { Input } from "@nextui-org/input";
import Logo from "./components/Logo";
import { useState } from "react";
import ToggleList from "./components/ToggleList";
import TagList from "./components/TagList";
import { onEnter } from "./utils/keyboard/on-key";
import { produce } from "immer";
import Card from "./components/Card";

export default function App() {
  const [include, setInclude] = useState<string>("");
  const [exclude, setExclude] = useState<string>("");
  const [letters, setLetters] = useState<{ include: Set<string>; exclude: Set<string> }>(
    { include: new Set(), exclude: new Set() }
  );

  const syncExclude = () => {
    setLetters(produce(draft => {
      exclude.split("").forEach(letter => {
        draft.exclude.add(letter.toLowerCase())
        draft.include.delete(letter.toLowerCase())
      })
    }));
    setExclude("");
  }

  const syncInclude = () => {
    setLetters(produce(draft => {
      include.split("").forEach(letter => {
        draft.include.add(letter.toLowerCase())
        draft.exclude.delete(letter.toLowerCase())
      })
    }));
    setInclude("");
  }

  const removeLetter = (key: "include" | "exclude") => (v: string) => {
    setLetters(produce(draft => {
      draft[key].delete(v)
    }));
  }

  return (
    <main className="h-dvh w-dvw flexbox gap-2">
      <div className="self-start p-4">
        <Logo />
      </div>
      <div className="flexbox flex-row p-4 items-start">
        {/* FILTERS */}
        <Card>
          <div className="font-semibold text-xl">Filters</div>
          <div className="flexbox gap-2">
            <Input
              value={include}
              onKeyDown={onEnter(syncInclude)}
              label="Include"
              size="sm"
              onValueChange={setInclude}
            />
            <TagList
              onTagClick={removeLetter("include")}
              size="sm"
              items={[...letters.include.values()].sort()}
            />
          </div>

          <div className="flexbox gap-2">
            <Input
              value={exclude}
              onKeyDown={onEnter(syncExclude)}
              label="Exclude"
              size="sm"
              onValueChange={setExclude}
            />
            <TagList
              onTagClick={removeLetter("exclude")}
              color="danger"
              size="sm"
              items={[...letters.exclude.values()].sort()}
            />
          </div>
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
