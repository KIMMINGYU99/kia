import { useState } from "react";
import { vehicleData } from "../compornent/viehicleStatusCard/data/vehicleData";
import { Tab } from "../selection/Tab";
import VehicleStatusCard from "../compornent/viehicleStatusCard/VehicleStatusCard";

export const Inspection = () => {
  const [isSelection, setIsSelection] = useState(false);
  return (
    <div style={{ width: "800px", margin: "0 auto" }}>
      <div style={{ display: "flex" }}>
        <Tab
          text="진행대기"
          ea={vehicleData.filter((v) => v.carStatus != "완료").length}
          isSelection={!isSelection}
          isClick={() => {
            setIsSelection(false);
          }}
        />
        <Tab
          text="완료"
          ea={vehicleData.filter((v) => v.carStatus == "완료").length}
          isSelection={isSelection}
          isClick={() => {
            setIsSelection(true);
          }}
        />
      </div>
      <>
        {vehicleData
          .filter((v) =>
            isSelection ? v.carStatus == "완료" : v.carStatus != "완료"
          )
          .map((v) => (
            <VehicleStatusCard {...v} />
          ))}
      </>
    </div>
  );
};
