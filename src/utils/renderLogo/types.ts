interface IPosition {
  x: number;
  y: number;
} 

export interface ITriangle {
  color: string;
  positions: {
    initial: IPosition,
    final: IPosition
  }
  invert: boolean;
}
