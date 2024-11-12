import { Link } from "@modern-js/runtime/router";
import { useSuspenseQuery } from "@tanstack/react-query";
import Hi from "remote/button";
import { useCount } from "remote/store";

const Index = () => {
  const { data } = useSuspenseQuery({ queryKey: ["test"], queryFn: () => Promise.resolve("test") });
  const { count, increment } = useCount();

  return (
    <div className="container-box">
      <Hi Link={Link} />
      <button onClick={() => {}}>로그인 클릭</button>
    </div>
  );
};

export default Index;
