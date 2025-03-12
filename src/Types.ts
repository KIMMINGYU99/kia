type colorType = "Primary_Color" | "Secondary_Color" | "Cool_Grey";

type Base = "black" | "white";
type HexBase = "#05141F" | "#FFFFFF";

type Green =
  | "Green"
  | "Green_dark"
  | "Green_variant"
  | "Green_light_keyBox"
  | "Green_light_bg";
type HexGreen = "#5D7D2B" | "#4C5B35" | "#589000" | "#DAEDBD" | "#F5FDEB";

type Red = "Red" | "Red_dark" | "Red_light_keyBox" | "Red_light_bg";
type HexRed = "#EA0029" | "#7D4C55" | "#FEE9EC" | "#FFF5F6";

type Grey = 5 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90;
type HexGrey =
  | "#F2F4F6"
  | "#E6E7E9"
  | "#CDD0D2"
  | "#B4B9BC"
  | "#9BA1A5"
  | "#82898F"
  | "#697279"
  | "#505B62"
  | "#37434C"
  | "#1E2C35";

type Hex = HexBase | HexGreen | HexRed | HexGrey;

type KiaBase = `Kia_${Base}`;
type KiaGreen = `Kia_${Green}`;
type KiaRed = `Kia_${Red}`;
type KiaGrey = `Kia_CoolGrey_${Grey}`;

type a = {
  Primary_Color: Record<KiaBase, HexBase>;
  Cool_Grey: Record<KiaGrey, HexGrey>;
  Secondary_Color: Record<KiaGreen | KiaRed, HexGreen | HexRed>;
};

const kiaColors: a = {
  Primary_Color: {
    Kia_black: "#05141F",
    Kia_white: "#FFFFFF",
  },
  Cool_Grey: {
    Kia_CoolGrey_5: "#F2F4F6",
    Kia_CoolGrey_10: "#E6E7E9",
    Kia_CoolGrey_20: "#CDD0D2",
    Kia_CoolGrey_30: "#B4B9BC",
    Kia_CoolGrey_40: "#9BA1A5",
    Kia_CoolGrey_50: "#82898F",
    Kia_CoolGrey_60: "#697279",
    Kia_CoolGrey_70: "#505B62",
    Kia_CoolGrey_80: "#37434C",
    Kia_CoolGrey_90: "#1E2C35",
  },
  Secondary_Color: {
    Kia_Green: "#5D7D2B",
    Kia_Green_dark: "#4C5B35",
    Kia_Green_variant: "#589000",
    Kia_Green_light_keyBox: "#DAEDBD",
    Kia_Green_light_bg: "#F5FDEB",
    Kia_Red: "#EA0029",
    Kia_Red_dark: "#7D4C55",
    Kia_Red_light_keyBox: "#FEE9EC",
    Kia_Red_light_bg: "#FFF5F6",
  },
};
