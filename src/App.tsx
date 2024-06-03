import Logo from "./components/Logo";
import Card from "./components/ui/Card";
import TagListInput, { useTagListInput } from "./components/ui/tags/TagListInput";
import { produce } from "immer";
import AlgorithmsSection from "./features/AlgorithmsSection";
import useAlgorithms from "./features/AlgorithmsSection/useAlgorithms";
import { isNot, isTruthy, join, keys, omitBy, pipe } from "remeda";

export default function App() {
  const [include, setInclude] = useTagListInput();
  const [exclude, setExclude] = useTagListInput();
  const [words, setWords] = useTagListInput();
  const { algorithms, setAlgorithms } = useAlgorithms();

  const crossUpdateLetters = (from: "include" | "exclude") => (v: string[]) => {
    (from === "exclude" ? setInclude : setExclude)(produce(draft => {
      v.forEach((value) =>
        draft.delete(value)
      );
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
          <TagListInput
            label="Include"
            size="sm"
            value={include}
            setValue={setInclude}
            splitter=""
            onSync={crossUpdateLetters("include")}
          />
          <TagListInput
            label="Exclude"
            size="sm"
            color="danger"
            value={exclude}
            setValue={setExclude}
            splitter=""
            onSync={crossUpdateLetters("exclude")}
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
          <b>State Reflect:</b>
          <div>letters inc: {[...include.values()].join(", ")}</div>
          <div>letters ex: {[...exclude.values()].join(", ")}</div>
          <div>words: {[...words.values()].join(", ")}</div>
          <div>algorithms: {pipe(
            algorithms,
            omitBy(isNot(isTruthy)),
            keys,
            join(", ")
          )}
          </div>
        </div>

        {/* FLAGS */}
        <Card>
          <div className="font-semibold text-xl">Algorithms</div>
          <AlgorithmsSection value={algorithms} setValue={setAlgorithms} />
        </Card>
      </div>
    </main>
  )
}
