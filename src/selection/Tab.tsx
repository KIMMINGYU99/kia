type TabText = "진행대기" | "완료";

type tabProps = {
  text: TabText;
  ea: number;
  isSelection: boolean;
  isClick: () => void;
};

export const Tab = ({ text, ea, isSelection, isClick }: tabProps) => {
  return (
    <div
      onClick={isClick}
      style={{
        width: "100%",
        height: "50px",
        borderBottom: isSelection ? "3px solid black" : "",
        color: isSelection ? "black" : "#efefef",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "bold",
        fontSize: "20px",
      }}
    >
      {text} {ea}
    </div>
  );
};
