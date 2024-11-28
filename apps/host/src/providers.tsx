import { useLocation, useNavigate, useParams, useRouteError } from "@modern-js/runtime/router";
import { Providers as DefaultProviders } from "@repo/providers";
import { LocationContext, ParamsContext, RouteErrorContext, Router, RouterContext } from "@repo/router";
import { PropsWithChildren, useMemo } from "react";

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <DefaultProviders>
      <RouterProvider>
        <RouteErrorProvider>
          <ParamsProvider>
            <LocationProvider>{children}</LocationProvider>
          </ParamsProvider>
        </RouteErrorProvider>
      </RouterProvider>
    </DefaultProviders>
  );
};

const RouterProvider = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate();
  const router: Router = useMemo(() => {
    return {
      push: (to, options) => {
        console.log("push");
        navigate(to, { ...options });
      },
      replace: (to, options) => {
        navigate(to, { ...options, replace: true });
      },
      back: (delta) => {
        navigate(delta ?? -1);
      },
    };
  }, [navigate]);
  return <RouterContext.Provider value={router}>{children}</RouterContext.Provider>;
};

const RouteErrorProvider = ({ children }: PropsWithChildren) => {
  const error = useRouteError();
  return <RouteErrorContext.Provider value={error}>{children}</RouteErrorContext.Provider>;
};

const ParamsProvider = ({ children }: PropsWithChildren) => {
  const params = useParams();
  return <ParamsContext.Provider value={params}>{children}</ParamsContext.Provider>;
};

const LocationProvider = ({ children }: PropsWithChildren) => {
  const location = useLocation();
  return <LocationContext.Provider value={location}>{children}</LocationContext.Provider>;
};
