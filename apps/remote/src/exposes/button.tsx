import { useCount } from "./store.js";

export default function Button() {
  const { count } = useCount();

  return <div>리모트앱 {count}</div>;
}
