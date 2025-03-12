export type Status = "완료" | "대기" | "미완료";

export type CarStatusProps = {
  carStatus: Status;
};

export type VehicleStatusCardProps = {
  carName: string;
  carStatus: Status;
  carNumber: string;
  carImg: string;
  id: string;
  purchaseID: string;
  modelYear: string;
  engine: string;
  modelCode: string;
  outColor: string;
  innerColor: string;
  mileage: `${string}km`;
};

export type CarNameProps = {
  carName: string;
};

export type CarNumberProps = {
  carNumber: string;
};

export type CarImgProps = {
  carImg: string;
};

type Category =
  | "차량번호"
  | "차량명"
  | "연식"
  | "트림"
  | "모델코드"
  | "외장색상"
  | "내장색상"
  | "주행거리";

export type CarInfoProps = {
  category: Category;
  value: string;
};

export type StepButtonProps = {
  display: string;
  text?: string;
};
