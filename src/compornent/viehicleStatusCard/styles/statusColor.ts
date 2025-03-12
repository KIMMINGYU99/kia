import { CoolColor, SecondaryColor } from "../../../types/color";
import { Status } from "../types/viehicleStatusCardTypes";

export const STATUS_TEXT_COLORS: Record<Status, string> = {
  대기: SecondaryColor.GreenDark,
  미완료: SecondaryColor.RedVariant,
  완료: CoolColor.CoolGrey20,
};

export const STATUS_BG_COLORS: Record<Status, string> = {
  대기: SecondaryColor.GreenLight,
  미완료: SecondaryColor.RedLight,
  완료: CoolColor.CoolGrey5,
};
export const statusButton: Record<
  Status,
  { display: "none" | "flex"; text?: "인증 검수 시작" | "이어서 진행" }
> = {
  대기: { display: "flex", text: "인증 검수 시작" },
  미완료: { display: "flex", text: "이어서 진행" },
  완료: { display: "none" },
};
