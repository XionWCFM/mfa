import { useInternalRouter } from "@repo/router";
import { useCount } from "./store";

export default function Button() {
  const { count } = useCount();
  const router = useInternalRouter();
  return (
    <div>
      리모트앱 {count}
      <button
        onClick={() => {
          router?.push("/login");
        }}
      >
        라우팅
      </button>
    </div>
  );
}
