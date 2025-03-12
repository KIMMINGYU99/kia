import { VehicleStatusCardProps } from "../types/viehicleStatusCardTypes";

export const vehicleData: VehicleStatusCardProps[] = [
  {
    id: "1",
    carName: "니로 EV",
    carNumber: "48로5682",
    carStatus: "미완료",
    carImg:
      "https://www.kia.com/content/dam/kwp/kr/ko/vehicles/represent/krmq206/sorento_q_bn4.png",
    purchaseID: "KU019472184",
    modelYear: "2019년형",
    engine: "2.5 가솔린 터보 2WD 트렌디",
    modelCode: "MQJJ5ADG4A5C",
    outColor: "스노우 화이트 펄",
    innerColor: "블랙",
    mileage: "34567km",
  },
  {
    id: "2",
    carName: "쏘렌토",
    carNumber: "123가0987",
    carStatus: "대기",
    carImg:
      "https://www.kia.com/content/dam/kwp/kr/ko/vehicles/represent/krmq206/sorento_q_bn4.png",
    purchaseID: "KU019472184",
    modelYear: "2019년형",
    engine: "2.5 가솔린 터보 2WD 트렌디",
    modelCode: "MQJJ5ADG4A5C",
    outColor: "스노우 화이트 펄",
    innerColor: "블랙",
    mileage: "34567km",
  },
  {
    id: "3",
    carName: "카니발",
    carNumber: "45가7854",
    carStatus: "대기",
    carImg:
      "https://www.kia.com/content/dam/kwp/kr/ko/vehicles/represent/krmq206/sorento_q_bn4.png",
    purchaseID: "KU019472184",
    modelYear: "2019년형",
    engine: "2.5 가솔린 터보 2WD 트렌디",
    modelCode: "MQJJ5ADG4A5C",
    outColor: "스노우 화이트 펄",
    innerColor: "블랙",
    mileage: "34567km",
  },
  {
    id: "4",
    carName: "쏘렌토",
    carNumber: "67가5421",
    carStatus: "대기",
    carImg:
      "https://www.kia.com/content/dam/kwp/kr/ko/vehicles/represent/krmq206/sorento_q_bn4.png",
    purchaseID: "KU019472184",
    modelYear: "2019년형",
    engine: "2.5 가솔린 터보 2WD 트렌디",
    modelCode: "MQJJ5ADG4A5C",
    outColor: "스노우 화이트 펄",
    innerColor: "블랙",
    mileage: "34567km",
  },
  {
    id: "5",
    carName: "카니발",
    carNumber: "45가7854",
    carStatus: "완료",
    carImg:
      "https://www.kia.com/content/dam/kwp/kr/ko/vehicles/represent/krmq206/sorento_q_bn4.png",
    purchaseID: "KU019472184",
    modelYear: "2019년형",
    engine: "2.5 가솔린 터보 2WD 트렌디",
    modelCode: "MQJJ5ADG4A5C",
    outColor: "스노우 화이트 펄",
    innerColor: "블랙",
    mileage: "34567km",
  },
  {
    id: "6",
    carName: "쏘렌토",
    carNumber: "67가5421",
    carStatus: "완료",
    carImg:
      "https://www.kia.com/content/dam/kwp/kr/ko/vehicles/represent/krmq206/sorento_q_bn4.png",
    purchaseID: "KU019472184",
    modelYear: "2019년형",
    engine: "2.5 가솔린 터보 2WD 트렌디",
    modelCode: "MQJJ5ADG4A5C",
    outColor: "스노우 화이트 펄",
    innerColor: "블랙",
    mileage: "34567km",
  },
];

const statusOrder = ["미완료", "대기", "완료"];
vehicleData.sort(
  (a, b) =>
    statusOrder.indexOf(a.carStatus) - statusOrder.indexOf(b.carStatus) ||
    a.carNumber.localeCompare(b.carNumber)
);
