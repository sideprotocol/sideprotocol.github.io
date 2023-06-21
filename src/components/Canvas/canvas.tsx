import React, { useEffect } from "react";

export const Canvas = () => {
  let canvas: HTMLCanvasElement | null;
  let context: CanvasRenderingContext2D | null;
  let stars_count: number;
  let stars: {
    x: number;
    y: number;
    radius: number;
    color: string;
    speed: number;
  }[];

  let interval: NodeJS.Timeout;

  useEffect(() => {
    canvas = document.getElementById("starfield") as HTMLCanvasElement;
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      context = canvas.getContext("2d");
      stars = [];
      stars_count = 300;

      makeStars();
      interval = setInterval(drawStars, 50); // 控制绘制间隔，调整速度
    }

    return () => {
      clearInterval(interval);
    };
  }, []);

  function makeStars() {
    if (canvas && context) {
      for (let i = 0; i < stars_count; i++) {
        const x = Math.random() * canvas.offsetWidth;
        const y = Math.random() * canvas.offsetHeight;
        const radius = Math.random() * 1.2 + 0.5; // 控制星星大小范围
        const color = "rgba(255, 255, 255, 0.7)"; // 设置星星的透明度
        const speed = Math.random() * 0.7 + 0.2; // 控制星星移动速度
        const star = { x, y, radius, color, speed };
        stars.push(star);
      }
    }
  }

  function drawStars() {
    if (canvas && context) {
      context.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < stars.length; i++) {
        stars[i].x -= stars[i].speed;
        if (stars[i].x < -2 * stars[i].radius) stars[i].x = canvas.width;

        const x = stars[i].x;
        const y = stars[i].y;
        const radius = stars[i].radius;
        const color = stars[i].color;

        context.beginPath();
        context.arc(x, y, radius, 0, 2 * Math.PI);
        context.fillStyle = color;
        context.fill();
      }
    }
  }

  return <canvas id="starfield"></canvas>;
};
