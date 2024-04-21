import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Select = ({ children }: Props): JSX.Element => {
  return <div>{children}</div>;
};
