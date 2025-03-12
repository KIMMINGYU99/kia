type Size = "11" | "12" | "13" | "14" | "16" | "18" | "20" | "28";
type HeaderFontSize = Extract<Size, "28" | "20" | "18">;
type BodyFontSize = Exclude<Size, HeaderFontSize>;

type LineHeight = "168" | "164" | "156" | "150" | "144";
type BodyLineHeight = Extract<LineHeight, "168" | "164">;
type HeaderLineHeight = Exclude<LineHeight, BodyLineHeight>;

type Level = "1" | "2" | "3" | "4" | "5";
type letterSpacing = "-3";

type Hseries = `H${Exclude<Level, "4" | "5">}`;
type Bseries = `B${Level}`;

type HeaderFont = {
  fontSize: `${HeaderFontSize}px`;
  letterSpacing: letterSpacing;
  lineHeight: `${HeaderLineHeight}%`;
};

type BodyFont = {
  fontSize: `${BodyFontSize}px`;
  letterSpacing: letterSpacing;
  lineHeight: `${BodyLineHeight}%`;
};

type Font<
  T extends Hseries | Bseries,
  U extends HeaderFont | BodyFont
> = Record<T, U>;

const Bfont: Font<Bseries, BodyFont> = {
  B1: { fontSize: "11px", letterSpacing: "-3", lineHeight: "168%" },
  B2: { fontSize: "12px", letterSpacing: "-3", lineHeight: "168%" },
  B3: { fontSize: "13px", letterSpacing: "-3", lineHeight: "168%" },
  B4: { fontSize: "14px", letterSpacing: "-3", lineHeight: "168%" },
  B5: { fontSize: "16px", letterSpacing: "-3", lineHeight: "164%" },
};
const Hfont: Font<Hseries, HeaderFont> = {
  H1: { fontSize: "28px", letterSpacing: "-3", lineHeight: "144%" },
  H2: { fontSize: "20px", letterSpacing: "-3", lineHeight: "150%" },
  H3: { fontSize: "18px", letterSpacing: "-3", lineHeight: "156%" },
};

export const fontStyle = {
  ...Bfont,
  ...Hfont,
};
