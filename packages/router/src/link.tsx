interface Path {
  pathname: string;

  search: string;

  hash: string;
}
type To = string | Partial<Path>;
type RelativeRoutingType = "route" | "path";

export interface LinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  reloadDocument?: boolean;
  replace?: boolean;
  state?: any;
  preventScrollReset?: boolean;
  relative?: RelativeRoutingType;
  to: To;
  viewTransition?: boolean;
}

export type LinkType = React.ForwardRefExoticComponent<LinkProps & React.RefAttributes<HTMLAnchorElement>>;

type NavLinkRenderProps = {
  isActive: boolean;
  isPending: boolean;
  isTransitioning: boolean;
};
export interface NavLinkProps extends Omit<LinkProps, "className" | "style" | "children"> {
  children?: React.ReactNode | ((props: NavLinkRenderProps) => React.ReactNode);
  caseSensitive?: boolean;
  className?: string | ((props: NavLinkRenderProps) => string | undefined);
  end?: boolean;
  style?: React.CSSProperties | ((props: NavLinkRenderProps) => React.CSSProperties | undefined);
}

export type NavLinkType = React.ForwardRefExoticComponent<NavLinkProps & React.RefAttributes<HTMLAnchorElement>>;
