import { PrimaryColor } from "../../../types/color";
import { StepButtonProps } from "../types/viehicleStatusCardTypes";

export const StepButton = ({ display, text }: StepButtonProps) => {
  return (
    <button
      style={{
        display,
        width: "100%",
        height: "50px",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: PrimaryColor.Black,
        color: "white",
      }}
    >
      {text}
    </button>
  );
};
