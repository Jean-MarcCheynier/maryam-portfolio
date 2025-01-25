import Container from "@/src/components/Layout/Container";
import type { PropsWithChildren } from "react";

const BioLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default BioLayout;
