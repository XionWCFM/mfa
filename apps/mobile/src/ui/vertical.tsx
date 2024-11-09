import { ComponentProps } from "react";
import { cn } from "./cn";
import { Box } from "./box";

type Props = ComponentProps<typeof Box> & { scrollable?: boolean };

export const Vertical = (props: Props) => {
  const { children, className, ...rest } = props;
  return (
    <Box className={cn("flex flex-col", className)} {...rest}>
      {children}
    </Box>
  );
};
