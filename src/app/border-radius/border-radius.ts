export interface BorderRadius {
  radius: {
    all: number,
    topLeft: number,
    topRight: number,
    bottomRight: number,
    bottomLeft: number
  };
  borderWidth: number;
  borderStyle: string;
  borderColor: {
    hex: string,
    opacity: number,
    css: string
  };
  width: number;
  height: number;
  backgroundColor: string;
}
