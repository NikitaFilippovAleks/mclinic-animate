import { logoData } from "./data";

const renderIcon = (canvas: HTMLCanvasElement, img: HTMLImageElement, progress: number) => {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const { 
    height: logoHeight
  } = logoData;

  // Определение нижний центральной точки логотипа
  const logoBottomCenterX = (canvas.width / 2);
  const logoBottomCenterY = (canvas.height / 2) + (logoHeight / 2);

  // Определение точки для отрисовки картинки
  const imageX = logoBottomCenterX - (img.width / 2);
  const imageY = logoBottomCenterY;

  ctx.save()

  // Отрисовка картинки с прозрачностью равной прогрессу анимации
  ctx.globalAlpha = progress
  ctx.drawImage(img, imageX, imageY)

  ctx.restore()
}

export default renderIcon;
