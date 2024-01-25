export type BtnVariant = "solid" | "outline" | "ghost";
export type BtnShape = "sharp" | "rounded" | "pill";
export type BtnColor =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger";
export type BtnSize = "sm" | "md" | "lg";

export interface BtnProps {
  variant: BtnVariant;
  shape: BtnShape;
  color: BtnColor;
  size: BtnSize;
}
