export interface BoxShadow {
  hOffset: number;
  vOffset: number;
  blur: number;
  spread: number;
  shadowColor: {
    hex: string,
    opacity: number,
    css: string
  };
  inset: boolean;
  boxColor: {
    hex: string,
    opacity: number,
    css: string
  };
  width: number;
  height: number;
}
