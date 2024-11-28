import { Link } from "@modern-js/runtime/router";
import { Suspense } from "@suspensive/react";
import { useSuspenseQuery } from "@tanstack/react-query";
import Hi from "remote/button";
import { useCount } from "remote/store";

const Index = () => {
  const { data } = useSuspenseQuery({
    queryKey: ["test"],
    queryFn: () => Promise.resolve("test"),
  });
  const { count, increment } = useCount();
  return (
    <div className="container-box">
      <Suspense>
        <Hi Link={Link} />
      </Suspense>
      <button onClick={() => {}}>로그인 클릭</button>
    </div>
  );
};

export default Index;
