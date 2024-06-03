import { useState } from "react";

export default function useTagListInput() {
  const [tags, setTags] = useState<Set<string>>(new Set());
  return [tags, setTags] as const;
}

