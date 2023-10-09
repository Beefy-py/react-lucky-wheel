import { WheelSegmentInterface } from "./wheelSegment.interface";

export interface WheelInterface{
    width: number;
    height: number;
    segments: Array<WheelSegmentInterface>;
    backgroundColor: string;
    timingFunction: string;
    rotations: number;
    disabled: boolean;
}