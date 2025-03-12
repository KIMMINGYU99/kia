import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router";
export const BackButton = () => {
  const back = useNavigate();
  const gotoHone = () => {
    back("/");
  };
  return (
    <button
      onClick={() => gotoHone()}
      style={{
        border: "none",
        backgroundColor: "transparent",
        textAlign: "start",
      }}
    >
      <FaArrowLeft />
    </button>
  );
};
