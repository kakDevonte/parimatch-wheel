import React from "react";
import { Img, WheelCanvasStyle } from "./styles";
import wheel from "../../assets/wheel.png";

const colors = ["#00C7B1", "#753BBD"];

export const clamp = (min, max, val) => Math.min(Math.max(min, +val), max);

const drawWheel = (canvasRef, data) => {
  const QUANTITY = data.length;

  const canvas = canvasRef.current;
  if (canvas?.getContext("2d")) {
    const ctx = canvas.getContext("2d");
    // ctx.clearRect(0, 0, 500, 500);
    ctx.strokeStyle = "transparent";
    ctx.lineWidth = 0;

    const arc = Math.PI / (QUANTITY / 2);
    const startAngle = 0;
    const outsideRadius = canvas.width / 2 - 10;
    const fontSize = canvas.width / 20;

    const clampedTextDistance = clamp(0, 100, 60);
    const textRadius = (outsideRadius * clampedTextDistance) / 100;

    const clampedInsideRadius = clamp(0, 100, 1);
    const insideRadius = (outsideRadius * clampedInsideRadius) / 100;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    ctx.beginPath();
    // ctx.font = `bold ${fontSize}px Helvetica, Arial`;
    //ctx.arc(centerX , centerY, outsideRadius + 5,startAngle,Math.PI*2,false);
    ctx.fill();
    ctx.save();

    //ctx.drawImage(wheel,centerX,centerY);

    const img = new Image();
    img.onload = function () {
      ctx.drawImage(
        img,
        centerX / 2,
        centerY / 2,
        canvas.width / 2,
        canvas.width / 2
      );

      ctx.beginPath();
      ctx.lineWidth = 5;
      ctx.strokeStyle = "#000000";
      ctx.moveTo(centerX, centerX);
      ctx.lineTo(centerX, centerY - outsideRadius / 2);
      ctx.stroke();
      ctx.save();
    };
    img.src = wheel;

    // for (let i = 0; i < data.length; i++) {
    //   const angle = startAngle + i * arc;
    //   ctx.fillStyle = colors[i % 2];
    //
    //   ctx.beginPath();
    //   ctx.arc(centerX, centerY, outsideRadius, angle, angle + arc, false);
    //   ctx.arc(centerX, centerY, insideRadius, angle + arc, angle, true);
    //   ctx.stroke();
    //   ctx.fill();
    //
    //
    //   let g = ctx.createRadialGradient(centerX, centerX, 0, outsideRadius, outsideRadius, outsideRadius);
    //   g.addColorStop(1, "#753BBD");
    //   g.addColorStop(0, "rgba(117, 59, 189, 0)");
    //
    //   ctx.fillStyle = g;
    //   ctx.fill();
    //
    //   ctx.save();
    //
    //   ctx.strokeStyle = 1 <= 0 ? 'transparent' : 1;
    //   ctx.lineWidth = 1;
    //   for (let j = 0; j < data.length; j++) {
    //     const radiusAngle = startAngle + j * arc;
    //     ctx.beginPath();
    //     ctx.moveTo(
    //       centerX + (insideRadius + 1) * Math.cos(radiusAngle),
    //       centerY + (insideRadius + 1) * Math.sin(radiusAngle)
    //     );
    //     ctx.lineTo(
    //       centerX + (outsideRadius - 1) * Math.cos(radiusAngle),
    //       centerY + (outsideRadius - 1) * Math.sin(radiusAngle)
    //     );
    //     ctx.closePath();
    //     ctx.stroke();
    //
    //   }
    //
    //
    //   ctx.fillStyle = '#fff';
    //
    //   // const text = data[i].label;
    //   //
    //   // if (typeof text !== 'string') {
    //   //   ctx.translate(
    //   //     centerX + Math.cos(angle + arc / 2) * textRadius * 1.5,
    //   //     centerY + Math.sin(angle + arc / 2) * textRadius * 1.5
    //   //   );
    //   // } else {
    //   //   ctx.translate(
    //   //     centerX + Math.cos(angle + arc / 2) * textRadius,
    //   //     centerY + Math.sin(angle + arc / 2) * textRadius
    //   //   );
    //   // }
    //   //
    //   // const textRotationAngle =
    //   //   typeof text !== 'string'
    //   //     ? angle + arc / 2 + Math.PI / 2
    //   //     : angle + arc / 2;
    //   // ctx.rotate(textRotationAngle);
    //   // ctx.fillText(text, -ctx.measureText(text).width / 2, fontSize / 2.7);
    //   // ctx.restore();
    // }

    const triangle = {
      //the first vertex is on the circumscribed circle at 0 radians where R is the radius of the circle ( R)
      //you may decide to change this.
      x1: centerX + insideRadius,
      y1: centerY,
      //the second vertex is on the circumscribed circle at 2*Math.PI/3 radians
      //you may decide to change this.
      x2: centerX + insideRadius * Math.cos((12 * Math.PI) / 3),
      y2: centerY + insideRadius * Math.sin((12 * Math.PI) / 3),
      //calculate the 3-rd vertex
      x3: centerX + insideRadius * Math.cos((14 * Math.PI) / 3),
      y3: centerY + insideRadius * Math.sin((14 * Math.PI) / 3),

      x4: centerX + insideRadius + 10,
      y4: centerY + 10,
      //the second vertex is on the circumscribed circle at 2*Math.PI/3 radians
      //you may decide to change this.
      x5: centerX + insideRadius * Math.cos((12 * Math.PI) / 3) + 10,
      y5: centerY + insideRadius * Math.sin((12 * Math.PI) / 3) + 10,
      //calculate the 3-rd vertex
      x6: centerX + insideRadius * Math.cos((14 * Math.PI) / 3) + 10,
      y6: centerY + insideRadius * Math.sin((14 * Math.PI) / 3) + 10,
    };

    // ctx.beginPath();
    // ctx.moveTo(triangle.x1, triangle.y1); // первая внешняя точка
    // ctx.lineTo(triangle.x2, triangle.y2); //вторая внешняя точка
    // ctx.lineTo(triangle.x3, triangle.y2); //третья внешняя точка
    // ctx.lineTo(triangle.x4, triangle.y4); //первая внутренняя точка
    // ctx.lineTo(triangle.x5, triangle.y5); //вторая внутренняя точка
    // ctx.lineTo(triangle.x6, triangle.y6); //третья внутренняя точка
    // ctx.closePath();
    // ctx.fillStyle ='#ff0000';
    // ctx.fill();
    // ctx.save();
  }
};

export const WheelCanvas = () => {
  return <Img src={wheel} />;
};
