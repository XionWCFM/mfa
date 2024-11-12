import { useInternalRouter } from "@internal/router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Button } from "@xionwcfm/xds/button";

import Hi from "remote/button";
import { useCount } from "remote/store";

const Index = () => {
  const { data } = useSuspenseQuery({ queryKey: ["test"], queryFn: () => Promise.resolve("test") });
  const { count, increment } = useCount();
  const router = useInternalRouter();

  return (
    <div className="container-box">
      <Hi />
      <button
        onClick={() => {
          router.push("/login");
        }}
      >
        로그인 클릭
      </button>
      <Button onClick={increment}>{count}</Button>
    </div>
  );
};

export default Index;
