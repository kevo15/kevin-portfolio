"use client";

import React, { useRef, useEffect, useState } from "react";

const PingPongGame = ({ skillIcon: Icon, skillColor }) => {
  const containerRef = useRef(null);
  const containerWidth = 600;
  const containerHeight = 400;
  const ballSize = 40;
  const paddleWidth = 20;
  const paddleHeight = 100;

  const [ball, setBall] = useState({
    x: containerWidth / 2,
    y: containerHeight / 2,
    dx: 3,
    dy: 3,
  });
  const [paddleY, setPaddleY] = useState((containerHeight - paddleHeight) / 2);
  const [score, setScore] = useState(0);

  useEffect(() => {
    let animationFrameId;

    const update = () => {
      setBall((prevBall) => {
        let { x, y, dx, dy } = prevBall;
        x += dx;
        y += dy;

        if (y <= 0 || y + ballSize >= containerHeight) {
          dy = -dy;
        }
        if (x + ballSize >= containerWidth) {
          dx = -dx;
        }
        if (x <= paddleWidth) {
          if (
            y + ballSize / 2 >= paddleY &&
            y + ballSize / 2 <= paddleY + paddleHeight
          ) {
            dx = -dx;
            setScore((prevScore) => prevScore + 1);
          } else {
            x = containerWidth / 2;
            y = containerHeight / 2;
            dx = 3;
            dy = 3;
            setScore(0);
          }
        }
        return { x, y, dx, dy };
      });

      animationFrameId = requestAnimationFrame(update);
    };

    animationFrameId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animationFrameId);
  }, [paddleY]);

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const offsetY = e.clientY - rect.top;
    setPaddleY(offsetY - paddleHeight / 2);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      style={{
        position: "relative",
        width: containerWidth,
        height: containerHeight,
        background: "#111",
        overflow: "hidden",
        border: "2px solid #fff",
        borderRadius: "8px",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: 0,
          top: paddleY,
          width: paddleWidth,
          height: paddleHeight,
          background: "red",
        }}
      />

      <div
        style={{
          position: "absolute",
          left: ball.x,
          top: ball.y,
          width: ballSize,
          height: ballSize,
          pointerEvents: "none",
        }}
      >
        <Icon size={ballSize} color={skillColor} />
      </div>

      <div
        style={{
          position: "absolute",
          top: 10,
          right: 10,
          color: "#fff",
          fontSize: 24,
          fontWeight: "bold",
        }}
      >
        Score: {score}
      </div>
    </div>
  );
};

export default PingPongGame;
