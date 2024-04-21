import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Where = ({ children }: Props): JSX.Element => {
  return <>{children}</>;
};
