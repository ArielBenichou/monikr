export const onKey = (key: string) => (action: (e: React.KeyboardEvent) => void) => (e: React.KeyboardEvent) => {
  if (e.key === key) action(e);
}

export const onEnter = onKey("Enter");
