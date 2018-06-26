export interface GradientColorStop {
  color: {
    hex: string,
    opacity: number,
    css: string
  };
  location: number;
  pointerPosition: number;
}
