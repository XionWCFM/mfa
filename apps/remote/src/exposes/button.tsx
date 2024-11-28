import { LinkType, Router, useInternalRouter } from "@repo/router";
import { useCount } from "./store";

type Props = {
  router?: Router;
  Link?: LinkType;
};

export default function Button(props: Props) {
  const { count } = useCount();
  const router = useInternalRouter();
  return (
    <div>
      리모트앱 {count}
      <button
        onClick={() => {
          console.log("리모트 console");
          router?.push("/login");
        }}
      >
        라우팅
      </button>
    </div>
  );
}
