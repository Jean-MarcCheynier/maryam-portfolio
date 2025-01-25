import type { PropsWithChildren } from "react";

const Container: React.FC<PropsWithChildren> = ({ children }) => (
  <div className="relative z0 md:container md:mx-auto min-h-screen">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white to-10% opacity-40" />
    <div className="relative p-4">{children}</div>
  </div>
);

export default Container;
