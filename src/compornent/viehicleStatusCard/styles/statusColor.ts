import { CoolGeryColors, SecondaryColors } from "../../../types/colors";
import { Status } from "../types/viehicleStatusCardTypes";

export const STATUS_TEXT_COLORS: Record<Status, string> = {
  대기: SecondaryColors.GreenDark,
  미완료: SecondaryColors.RedVariant,
  완료: CoolGeryColors.CoolGrey20,
};

export const STATUS_BG_COLORS: Record<Status, string> = {
  대기: SecondaryColors.GreenLight,
  미완료: SecondaryColors.RedLight,
  완료: CoolGeryColors.CoolGrey5,
};
export const statusButton: Record<
  Status,
  { display: "none" | "flex"; text?: "인증 검수 시작" | "이어서 진행" }
> = {
  대기: { display: "flex", text: "인증 검수 시작" },
  미완료: { display: "flex", text: "이어서 진행" },
  완료: { display: "none" },
};
