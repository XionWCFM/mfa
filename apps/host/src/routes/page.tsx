import { Link } from "@modern-js/runtime/router";
import { Suspense } from "@suspensive/react";
import Hi from "remote/button";

const Index = () => {
  return (
    <div className="container-box">
      <Suspense fallback={<div>loading...</div>}>
        <Hi Link={Link} />
      </Suspense>
      <button onClick={() => {}}>로그인 클릭</button>
    </div>
  );
};

export default Index;
