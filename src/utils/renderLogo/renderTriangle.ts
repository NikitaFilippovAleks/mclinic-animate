import { logoData } from "./data";
import { ITriangle, ITriangleRandomized } from "./types";

const renderTriangle = (
  canvas: HTMLCanvasElement,
  {
    color,
    positions: {
      initial,
      final
    },
    invert,
    scale: elementInitialScale,
    additionalOffset
  }: ITriangleRandomized,
  progress: number
) => {
  const {
    width: logoWidth,
    height: logoHeight,
    elementHeight,
    elementWidth,
    // elementInitialScale,
    marginBottom
  } = logoData;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // const elementInitialScale = invert ? 3 : 2;

  const canvasWidth = canvas.width;
  const canvasHeight = canvas.height;
  const logoX = (canvasWidth / 2) - (logoWidth / 2);
  const logoY = (canvasHeight / 2) - (logoHeight / 2) - marginBottom;
  const triangleX = final.x * elementWidth;
  const triangleY = final.y * elementHeight;

  const finalX = logoX + triangleX;
  const finalY = logoY + triangleY;

  const isLeftPart = initial.x <= 0.5;
  const isUpPart = initial.y <= 0.5;

  const initialOffsetX = isLeftPart ? -(elementWidth * elementInitialScale + additionalOffset) : additionalOffset;
  const initialOffsetY = isUpPart ? -(elementHeight * elementInitialScale + additionalOffset) : additionalOffset;

  const initialX = canvasWidth * initial.x + initialOffsetX;
  const initialY = canvasHeight * initial.y + initialOffsetY;

  const deltaX = Math.abs(finalX - initialX);
  const deltaY = Math.abs(finalY - initialY);

  const isPositiveDirectionX = initialX < finalX;
  const isPositiveDirectionY = initialY < finalY;

  let currentX = isPositiveDirectionX ? (initialX + (deltaX * progress)) : (finalX + (deltaX * (1 - progress)));
  let currentY = isPositiveDirectionY ? (initialY + (deltaY * progress)) : (finalY + (deltaY * (1 - progress)));

  // console.log('currentY:', currentY)
  // console.log('deltaY:', deltaY)
  // console.log('initialY:', initialY)
  // console.log('finalY:', finalY)

  ctx.save();
  
  ctx.translate(currentX, currentY);

  const scaleDelta = elementInitialScale - 1;
  ctx.scale(1 + (scaleDelta * (1 - progress)), 1 + (scaleDelta * (1 - progress)));
  
  if (invert) {
    ctx.rotate(Math.PI)
    ctx.translate(-elementWidth, -elementHeight)
  }

  ctx.beginPath();
  ctx.moveTo(0, 0)
  ctx.lineTo(elementWidth, elementHeight / 2);
  ctx.lineTo(0, elementHeight);
  ctx.closePath();
  
  ctx.fillStyle = color;
  ctx.fill();

  ctx.restore();
}

export default renderTriangle;
