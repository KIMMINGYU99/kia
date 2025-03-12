import { fontStyle } from "../../../types/font";
import { CarNumberProps } from "../types/viehicleStatusCardTypes";

const CarNumber = ({ carNumber = "데이터없음" }: CarNumberProps) => {
  return <span style={fontStyle.H1}>{carNumber}</span>;
};

export default CarNumber;
