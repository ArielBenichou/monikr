import { useState } from "react";

const INITIAL_VALUE = {
  xFactor: false,
  droppr: false,
  particleSmash: true,
};

export default function useAlgorithms() {
  const [algorithms, setAlgorithms] = useState(INITIAL_VALUE);

  const resetAlgorithms = () => {
    setAlgorithms(INITIAL_VALUE);
  }

  return { algorithms, setAlgorithms, resetAlgorithms };
}
