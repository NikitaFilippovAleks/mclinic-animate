import renderTriangle from "./renderTriangle";
import { logoData, triangles } from "./data";
import renderIcon from "./renderIcon";
import ImageMetaclinic from './ImageMetaclinic.png';
import randomizeTriangleRender from "./randomizeTriangleRender";

function easeInOut(timeFraction: number) {
  return Math.pow(timeFraction, 2) * (3 - 2 * timeFraction);
}

const renderLogo = (canvas: HTMLCanvasElement) => {
  const { renderDuration } = logoData;
  const imgMetaclinic = new Image()
  imgMetaclinic.src = ImageMetaclinic

  const randomisedTriangles = randomizeTriangleRender(triangles);

  imgMetaclinic.onload = () => {
    const startTime = performance.now();
  
    function animate(currentTime: number) {
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Определение прогресса анимации
      const timeDelta = currentTime - startTime;
      const fraction = Math.min(timeDelta / renderDuration, 1);
      const progress = easeInOut(fraction)
  
      // Очистка холста перед новой отрисовкой
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Отрисовка элементов логотипа
      randomisedTriangles.forEach(rect => renderTriangle(canvas, rect, progress));
      // Отрисовка картинки логотипа
      renderIcon(canvas, imgMetaclinic, progress);
  
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }
  
    requestAnimationFrame(animate);
  }

}

export default renderLogo;
