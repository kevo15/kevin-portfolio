"use client";

import React, { useRef, useEffect, useState } from "react";

const SpaceInvaderGame = ({ skillIcon: Icon, skillColor }) => {
  const canvasWidth = 600;
  const canvasHeight = 400;

  const playerSize = 30;
  const playerY = canvasHeight - 50;
  const [playerX, setPlayerX] = useState(canvasWidth / 2 - playerSize / 2);
  const playerSpeed = 10;

  const bulletWidth = 4;
  const bulletHeight = 10;
  const bulletSpeed = 5;
  const [bullets, setBullets] = useState([]);

  const enemyCount = 10;
  const enemyWidth = 40;
  const enemyHeight = 20;
  const [enemies, setEnemies] = useState([]);

  const [score, setScore] = useState(0);

  const canvasRef = useRef(null);

  const initEnemies = () => {
    let enemyArr = [];
    for (let i = 0; i < enemyCount; i++) {
      const x = Math.random() * (canvasWidth - enemyWidth);
      const y = Math.random() * (canvasHeight / 2 - enemyHeight);
      enemyArr.push({ x, y, alive: true });
    }
    setEnemies(enemyArr);
  };

  const resetGame = () => {
    setPlayerX(canvasWidth / 2 - playerSize / 2);
    setBullets([]);
    initEnemies();
    setScore(0);
  };

  useEffect(() => {
    resetGame();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        setPlayerX((prev) => Math.max(0, prev - playerSpeed));
      } else if (e.key === "ArrowRight") {
        setPlayerX((prev) =>
          Math.min(canvasWidth - playerSize, prev + playerSpeed),
        );
      } else if (e.key === " ") {
        e.preventDefault();
        setBullets((prev) => [
          ...prev,
          { x: playerX + playerSize / 2 - bulletWidth / 2, y: playerY },
        ]);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [playerX]);

  useEffect(() => {
    let animationFrameId;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const updateGame = () => {
      setBullets((prevBullets) =>
        prevBullets
          .map((b) => ({ ...b, y: b.y - bulletSpeed }))
          .filter((b) => b.y + bulletHeight > 0),
      );

      setEnemies((prevEnemies) => {
        let newEnemies = prevEnemies.map((enemy) => {
          if (!enemy.alive) return enemy;
          bullets.forEach((bullet) => {
            if (
              bullet.x < enemy.x + enemyWidth &&
              bullet.x + bulletWidth > enemy.x &&
              bullet.y < enemy.y + enemyHeight &&
              bullet.y + bulletHeight > enemy.y
            ) {
              enemy.alive = false;
              setScore((prevScore) => prevScore + 1);
            }
          });
          return enemy;
        });
        return newEnemies;
      });

      const allEnemiesDead =
        enemies.length > 0 && enemies.every((enemy) => !enemy.alive);
      if (allEnemiesDead) {
        resetGame();
      }

      drawGame();
      animationFrameId = requestAnimationFrame(updateGame);
    };

    const drawGame = () => {
      context.clearRect(0, 0, canvasWidth, canvasHeight);

      context.fillStyle = "#000";
      context.fillRect(0, 0, canvasWidth, canvasHeight);

      context.fillStyle = "#ff0";
      bullets.forEach((bullet) => {
        context.fillRect(bullet.x, bullet.y, bulletWidth, bulletHeight);
      });

      context.fillStyle = "#f00";
      enemies.forEach((enemy) => {
        if (enemy.alive) {
          context.fillRect(enemy.x, enemy.y, enemyWidth, enemyHeight);
        }
      });

      context.fillStyle = "#fff";
      context.font = "20px sans-serif";
      context.fillText(`Score: ${score}`, 10, 20);

      context.fillStyle = "#fff";
      context.fillRect(playerX, playerY, playerSize, playerSize);
    };

    updateGame();
    return () => cancelAnimationFrame(animationFrameId);
  }, [bullets, enemies, playerX, score]);

  return (
    <div
      style={{ position: "relative", width: canvasWidth, height: canvasHeight }}
    >
      <canvas
        ref={canvasRef}
        width={canvasWidth}
        height={canvasHeight}
        style={{ border: "2px solid #fff" }}
      />
      <div
        style={{
          position: "absolute",
          left: playerX,
          top: playerY,
          width: playerSize,
          height: playerSize,
          pointerEvents: "none",
        }}
      >
        <Icon size={playerSize} color={skillColor} />
      </div>
    </div>
  );
};

export default SpaceInvaderGame;
