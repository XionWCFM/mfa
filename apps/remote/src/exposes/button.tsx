import { LinkType, Router } from "@repo/router";
import { useCount } from "./store.js";

type Props = {
  router?: Router;
  Link?: LinkType;
};

export default function Button(props: Props) {
  const { count } = useCount();
  const { router, Link = () => null } = props;

  return (
    <div>
      <Link to={"/login"}>hello </Link>
      리모트앱 {count}
      <button onClick={() => router?.push("/login")}>라우팅</button>
    </div>
  );
}
