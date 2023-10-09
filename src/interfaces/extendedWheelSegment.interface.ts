import { WheelSegmentInterface } from "./wheelSegment.interface";

export interface ExtendedWheelSegmentInterface extends WheelSegmentInterface{
    segmentRotation: number, clipPathValue:number, degreeSpan:Array<number>, rotation:number
}