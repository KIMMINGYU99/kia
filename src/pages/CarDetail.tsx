import { useParams } from "react-router";
import { vehicleData } from "../compornent/viehicleStatusCard/data/vehicleData";
import { DetailCard } from "../compornent/viehicleStatusCard/subcomponents/DetailCard";

export const CarDetail = () => {
  const { id } = useParams(); // URL읽어주는친구\

  return vehicleData
    .filter((v) => v.id == id)
    .map((v) => {
      return <DetailCard {...v} />;
    });
};
