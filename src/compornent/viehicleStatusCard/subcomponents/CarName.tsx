import { fontStyle } from "../../../types/font";
import { CarNameProps } from "../types/viehicleStatusCardTypes";

const CarName = ({ carName = "데이터 없음" }: CarNameProps) => {
  return <span style={fontStyle.B1}>{carName}</span>;
};

export default CarName;
