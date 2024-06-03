import { Unit } from "../types/functions";

export const onKey = (key: string) => (action: Unit) => (e: React.KeyboardEvent) => {
  if (e.key === key) action();
}

export const onEnter = onKey("Enter");
