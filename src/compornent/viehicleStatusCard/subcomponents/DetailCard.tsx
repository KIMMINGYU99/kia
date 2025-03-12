import { STATUS_BG_COLORS, statusButton } from "../styles/statusColor";
import { VehicleStatusCardProps } from "../types/viehicleStatusCardTypes";
import { BackButton } from "./BackButton";
import { CarImg } from "./CarImg";
import { CarInfo } from "./CarInfo";
import CarStatus from "./CarStatus";
import { StepButton } from "./StepButton";

export const DetailCard = ({
  carImg,
  carName,
  carNumber,
  carStatus,
  engine,
  innerColor,
  mileage,
  modelCode,
  modelYear,
  outColor,
  purchaseID,
}: VehicleStatusCardProps) => {
  return (
    <article style={{ width: "800px", margin: "0 auto", padding: "10px" }}>
      <div
        style={{
          backgroundColor: STATUS_BG_COLORS[carStatus],
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          padding: "10px",
        }}
      >
        <BackButton />
        <CarStatus carStatus={carStatus} />
        <span>인증 검수</span>
        <span>매입ID | {purchaseID}</span>
      </div>
      <CarImg carImg={carImg} />
      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <CarInfo category="차량번호" value={carNumber} />
        <CarInfo category="차량명" value={carName} />
        <CarInfo category="연식" value={modelYear} />
        <CarInfo category="트림" value={engine} />
        <CarInfo category="모델코드" value={modelCode} />
        <CarInfo category="외장색상" value={outColor} />
        <CarInfo category="내장색상" value={innerColor} />
        <CarInfo category="주행거리" value={mileage} />
      </div>
      <StepButton
        display={statusButton[carStatus].display}
        text={statusButton[carStatus].text}
      />
    </article>
  );
};
