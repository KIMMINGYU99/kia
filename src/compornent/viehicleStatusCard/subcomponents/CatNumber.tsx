import { HEADERFONT } from "../../../types/fonts";
import { CarNumberProps } from "../types/viehicleStatusCardTypes";

const CarNumber = ({ carNumber = "데이터없음" }: CarNumberProps) => {
  return <span style={HEADERFONT.H1}>{carNumber}</span>;
};

export default CarNumber;
