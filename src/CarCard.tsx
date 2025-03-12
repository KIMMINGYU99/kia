import { fontStyle } from "./types/font";

type Props = {
  name: string;
  number: string;
  status: string;
  backgroundColor: string;
  statusColor: string;
  nameColor?: string;
  numberColor?: string;
};
const CarCard = ({
  name,
  status,
  number,
  backgroundColor,
  statusColor,
  nameColor,
  numberColor,
}: Props) => {
  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        backgroundColor,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span
          style={{
            ...fontStyle.H2,
            fontWeight: "bolder",
            color: nameColor,
          }}
        >
          {name}
        </span>
        <span
          style={{
            ...fontStyle.B5,
            color: statusColor,
            fontWeight: "bolder",
          }}
        >
          {status}
        </span>
      </div>
      <span
        style={{
          ...fontStyle.H1,
          fontWeight: "bolder",
          color: numberColor,
        }}
      >
        {number}
      </span>
    </div>
  );
};

export default CarCard;
