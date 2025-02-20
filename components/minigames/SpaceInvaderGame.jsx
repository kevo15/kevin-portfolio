"use client";

import React, { useRef, useEffect, useState } from "react";

const SpaceInvaderGame = ({ skillIcon: Icon, skillColor }) => {
  // Canvas dimensions.
  const canvasWidth = 600;
  const canvasHeight = 400;
  
  // Player properties.
  const playerSize = 30;
  const playerY = canvasHeight - 50; // fixed vertical position near bottom
  const [playerX, setPlayerX] = useState(canvasWidth / 2 - playerSize / 2);
  const playerSpeed = 10;
  
  // Bullet properties.
  const bulletWidth = 4;
  const bulletHeight = 10;
  const bulletSpeed = 5;
  const [bullets, setBullets] = useState([]);
  
  // Enemy properties.
  const enemyCount = 10; // number of enemies
  const enemyWidth = 40;
  const enemyHeight = 20;
  const [enemies, setEnemies] = useState([]);
  
  // Score.
  const [score, setScore] = useState(0);
  
  const canvasRef = useRef(null);
  
  // Initialize enemies in random positions.
  const initEnemies = () => {
    let enemyArr = [];
    for (let i = 0; i < enemyCount; i++) {
      // Random x position within canvas bounds.
      const x = Math.random() * (canvasWidth - enemyWidth);
      // Random y position in the top half of the canvas.
      const y = Math.random() * (canvasHeight / 2 - enemyHeight);
      enemyArr.push({ x, y, alive: true });
    }
    setEnemies(enemyArr);
  };
  
  // Reset the game.
  const resetGame = () => {
    setPlayerX(canvasWidth / 2 - playerSize / 2);
    setBullets([]);
    initEnemies();
    setScore(0);
  };
  
  useEffect(() => {
    resetGame();
  }, []);
  
  // Handle keyboard input for moving the player and firing bullets.
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        setPlayerX((prev) => Math.max(0, prev - playerSpeed));
      } else if (e.key === "ArrowRight") {
        setPlayerX((prev) =>
          Math.min(canvasWidth - playerSize, prev + playerSpeed)
        );
      } else if (e.key === " ") {
        e.preventDefault();
        // Fire a bullet from the center-top of the player.
        setBullets((prev) => [
          ...prev,
          { x: playerX + playerSize / 2 - bulletWidth / 2, y: playerY },
        ]);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [playerX]);
  
  // Main game loop: update bullet positions, detect collisions, and redraw.
  useEffect(() => {
    let animationFrameId;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
  
    const updateGame = () => {
      // Update bullet positions: move upward.
      setBullets((prevBullets) =>
        prevBullets
          .map((b) => ({ ...b, y: b.y - bulletSpeed }))
          .filter((b) => b.y + bulletHeight > 0)
      );
  
      // Check bullet-enemy collisions.
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
  
      // If there are enemies and all are destroyed, reset the game.
      const allEnemiesDead =
        enemies.length > 0 && enemies.every((enemy) => !enemy.alive);
      if (allEnemiesDead) {
        resetGame();
      }
  
      drawGame();
      animationFrameId = requestAnimationFrame(updateGame);
    };
  
    const drawGame = () => {
      // Clear the canvas.
      context.clearRect(0, 0, canvasWidth, canvasHeight);
  
      // Draw background.
      context.fillStyle = "#000";
      context.fillRect(0, 0, canvasWidth, canvasHeight);
  
      // Draw bullets.
      context.fillStyle = "#ff0";
      bullets.forEach((bullet) => {
        context.fillRect(bullet.x, bullet.y, bulletWidth, bulletHeight);
      });
  
      // Draw enemies.
      context.fillStyle = "#f00";
      enemies.forEach((enemy) => {
        if (enemy.alive) {
          context.fillRect(enemy.x, enemy.y, enemyWidth, enemyHeight);
        }
      });
  
      // Draw score.
      context.fillStyle = "#fff";
      context.font = "20px sans-serif";
      context.fillText(`Score: ${score}`, 10, 20);
  
      // Draw player's ship as a placeholder.
      context.fillStyle = "#fff";
      context.fillRect(playerX, playerY, playerSize, playerSize);
    };
  
    updateGame();
    return () => cancelAnimationFrame(animationFrameId);
  }, [bullets, enemies, playerX, score]);
  
  return (
    <div style={{ position: "relative", width: canvasWidth, height: canvasHeight }}>
      <canvas
        ref={canvasRef}
        width={canvasWidth}
        height={canvasHeight}
        style={{ border: "2px solid #fff" }}
      />
      {/* Overlay the player's icon using the skill icon. */}
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
