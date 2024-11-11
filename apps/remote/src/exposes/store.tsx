import { atom, useAtom } from "jotai";

const countAtom = atom(0);

export const useCount = () => {
  const [count, setCount] = useAtom(countAtom);
  const increment = () => setCount((c) => c + 1);
  return { count, increment };
};
