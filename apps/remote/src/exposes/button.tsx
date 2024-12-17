import { type LinkType, type Router, useInternalRouter } from "@repo/router";
import { useCount } from "./store";

type Props = {
  router?: Router;
  Link?: LinkType;
};

export default function Button(_props: Props) {
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
