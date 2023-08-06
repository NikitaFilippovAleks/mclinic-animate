import { ITriangle, ITriangleRandomized } from "./types";
import { random } from 'lodash';

const randomizeTriangleRender = (triangles: ITriangle[]): ITriangleRandomized[] => {
  return triangles.map(triangle => ({
    ...triangle,
    scale: random(1.5, 3),
    additionalOffset: random(0, 60)
  }))
}

export default randomizeTriangleRender;
