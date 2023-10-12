export interface SpinButtonInterface {
  text: string;
  backgroundColor?: string;
  borderWidth?: number;
  borderColor?: string;
  textColor?: string;
  alignButton: "left" | "middle" | "right";
  size: "xs" | "sm" | "md" | "lg" | "xl";
  buttonTopOffset: "-xs" | "-sm" | "-md" | "xs" | "sm" | "md" | "lg" | "xl";
  rounded: "xs" | "sm" | "md" | "lg" | "xl" | "full";
}
