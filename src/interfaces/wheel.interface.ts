import { WheelSegmentInterface } from "./wheelSegment.interface";

export interface WheelInterface {
  width: number;
  height: number;
  segments: Array<WheelSegmentInterface>;
  backgroundColor?: string;
  boxShadowColor1?: string;
  boxShadowColor2?: string;
  boxShadowColor3?: string;
  timingFunction: string;
  rotations: number;
  disabled: boolean;
}
