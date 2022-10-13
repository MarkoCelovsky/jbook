import { ReactElement, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const CellList = ({ children }: Props): ReactElement => {
  return <div>{children}</div>;
};

export default CellList;
