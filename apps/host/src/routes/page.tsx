import { useNavigate } from "@modern-js/runtime/router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Button } from "@xionwcfm/xds/button";
import { ConfirmDialog } from "@xionwcfm/xds/confirm-dialog";
import { overlay } from "overlay-kit";
import Bridge from "remote/bridge";
import Hi from "remote/button";
import { useCount } from "remote/store";

const Index = () => {
  const { data } = useSuspenseQuery({ queryKey: ["test"], queryFn: () => Promise.resolve("test") });
  const navigate = useNavigate();
  const { count, increment } = useCount();
  return (
    <div className="container-box">
      <Hi />
      <Button onClick={increment}>{count}</Button>
      <hr />
      <Bridge />
    </div>
  );
};

export default Index;
