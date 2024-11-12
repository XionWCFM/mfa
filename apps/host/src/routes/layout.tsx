import { Providers } from "@/providers";
import { Outlet } from "@modern-js/runtime/router";
import "@xionwcfm/token/style";
import "@xionwcfm/xds/style";

export default function Layout() {
  return (
    <Providers>
      <Outlet />
    </Providers>
  );
}
