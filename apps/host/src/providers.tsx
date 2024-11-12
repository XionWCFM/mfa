import { Providers as DefaultProviders } from "@internal/providers";
import { LocationContext, ParamsContext, RouteErrorContext, Router, RouterContext } from "@internal/router";
import { useLocation, useNavigate, useParams, useRouteError } from "@modern-js/runtime/router";
import { PropsWithChildren, useMemo } from "react";

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <DefaultProviders>
      <RouterProviders>{children}</RouterProviders>
    </DefaultProviders>
  );
};

const RouterProviders = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const error = useRouteError();

  const router: Router = useMemo(() => {
    return {
      push: (to, options) => {
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
  return (
    <RouterContext.Provider value={router}>
      <LocationContext.Provider value={location}>
        <ParamsContext.Provider value={params}>
          <RouteErrorContext.Provider value={error}>{children}</RouteErrorContext.Provider>
        </ParamsContext.Provider>
      </LocationContext.Provider>
    </RouterContext.Provider>
  );
};
