import { CarImgProps } from "../types/viehicleStatusCardTypes";

export const CarImg = ({ carImg }: CarImgProps) => {
  return (
    <img
      style={{ width: "100%", height: "300px", objectFit: "cover" }}
      src={carImg}
      alt=""
    />
  );
};
