import { fontStyle } from "../../../types/font";

import { STATUS_TEXT_COLORS } from "../styles/statusColor";
import { CarStatusProps } from "../types/viehicleStatusCardTypes";

const CarStatus = ({ carStatus = "미완료" }: CarStatusProps) => {
  return (
    <span style={{ ...fontStyle.B2, color: STATUS_TEXT_COLORS[carStatus] }}>
      {carStatus}
    </span>
  );
};

export default CarStatus;
