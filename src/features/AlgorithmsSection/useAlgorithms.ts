import { useState } from "react";

export default function useAlgorithms() {
  const [algorithms, setAlgorithms] = useState({
    xFactor: false,
    droppr: false,
    particleSmash: true,
  });
  return { algorithms, setAlgorithms };
}
