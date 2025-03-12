import { useNavigate } from "react-router";
import CarName from "./subcomponents/CarName";
import CarStatus from "./subcomponents/CarStatus";
import CarNumber from "./subcomponents/CatNumber";
import { VehicleStatusCardProps } from "./types/viehicleStatusCardTypes";
import { STATUS_BG_COLORS } from "./styles/statusColor";

const VehicleStatusCard = ({
  carStatus,
  carName,
  carNumber,
  id,
}: VehicleStatusCardProps) => {
  const navi = useNavigate();
  const gotoDetail = (v: string) => {
    navi(`/detail/${v}`);
  };
  return (
    <article
      onClick={() => gotoDetail(id)}
      style={{
        backgroundColor: STATUS_BG_COLORS[carStatus],
        display: "flex",
        flexDirection: "column",
        gap: "4px",
        padding: "24px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <CarName carName={carName} />
        <CarStatus carStatus={carStatus} />
      </div>
      <CarNumber carNumber={carNumber} />
    </article>
  );
};

export default VehicleStatusCard;
