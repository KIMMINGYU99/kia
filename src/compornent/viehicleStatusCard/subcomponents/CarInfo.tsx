import { CarInfoProps } from "../types/viehicleStatusCardTypes";

export const CarInfo = ({ category, value }: CarInfoProps) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <span>{category}</span>
      <span>{value}</span>
    </div>
  );
};
