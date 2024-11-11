import { Providers } from "@/providers.jsx";
import { Outlet } from "@modern-js/runtime/router";
import "@xionwcfm/token/style";
import "@xionwcfm/xds/style";

export default function Layout() {
  return (
    <Providers>
      <div>
        <Outlet />
      </div>
    </Providers>
  );
}
