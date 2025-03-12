import { ReactNode } from "react";

type SpaceBetweenProps = {
  children: ReactNode;
};

export const SpaceBetween = ({ children }: SpaceBetweenProps) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      {children}
    </div>
  );
};
