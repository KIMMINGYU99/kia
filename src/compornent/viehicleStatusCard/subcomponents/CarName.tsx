import { BODYFONT } from "../../../types/fonts";
import { CarNameProps } from "../types/viehicleStatusCardTypes";

const CarName = ({ carName = "데이터 없음" }: CarNameProps) => {
  return <span style={BODYFONT.B1}>{carName}</span>;
};

export default CarName;
