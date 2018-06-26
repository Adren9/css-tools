export interface Triangle {
  lineSegmentA: number;
  lineSegmentB: number;
  lineSegmentH: number;
  borderOfLineSegmentA: string;
  borderOfLineSegmentB: string;
  borderOfLineSegmentH: string;
  rotation: number;
  color: {
    hex: string,
    opacity: number,
    css: string
  };
}
