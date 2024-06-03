import { Input } from "@nextui-org/input";
import Logo from "./components/Logo";
import { useState } from "react";

export default function App() {
  const [include, setInclude] = useState<string>("");
  return (
    <main className="h-dvh w-dvw flexbox p-4 gap-2">
      <Logo />
      <div className="flexbox bg-slate-200">
        <div className="flexbox max-w-sm gap-2 p-2">
          <Input label="Include" size="lg" onValueChange={setInclude} />
          {include}
        </div>
      </div>
    </main>
  )
}

