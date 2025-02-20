"use client";

import React, { useRef, useEffect, useState } from "react";

const FlappyBirdGame = ({ skillIcon: Icon, skillColor }) => {
  const canvasRef = useRef(null);
  
  // Define constants for canvas and player.
  const canvasWidth = 600;
  const canvasHeight = 400;
  const playerSize = 30;
  const playerSpeed = 3; // Movement increment per frame from arrow keys.
  
  // Pipe and hole parameters.
  const pipeWidth = 60;
  const pipeGap = 150;
  const pipeSpeed = 2;
  const pipeInterval = 1500; // milliseconds between pipes
  const holeMinWidth = 50;
  const holeMaxWidth = 120;
  const holeSpacing = 300;

  // Game state: track player, pipes, and score.
  const [gameState, setGameState] = useState({
    player: { x: 50, y: 200 },
    pipes: [],
    score: 0,
  });
  const [keysPressed, setKeysPressed] = useState({});
  const [isDragging, setIsDragging] = useState(false);

  // Keyboard input: update keysPressed state (prevent defaults for arrow keys).
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (
        e.key === "ArrowUp" ||
        e.key === "ArrowDown" ||
        e.key === "ArrowLeft" ||
        e.key === "ArrowRight"
      ) {
        e.preventDefault();
      }
      setKeysPressed((prev) => ({ ...prev, [e.key]: true }));
    };

    const handleKeyUp = (e) => {
      if (
        e.key === "ArrowUp" ||
        e.key === "ArrowDown" ||
        e.key === "ArrowLeft" ||
        e.key === "ArrowRight"
      ) {
        setKeysPressed((prev) => ({ ...prev, [e.key]: false }));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  // Mouse dragging on the canvas.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleMouseDown = (e) => {
      setIsDragging(true);
    };

    const handleMouseUp = (e) => {
      setIsDragging(false);
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      setGameState((prev) => ({
        ...prev,
        player: {
          x: mouseX - playerSize / 2,
          y: mouseY - playerSize / 2,
        },
      }));
    };

    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mouseup", handleMouseUp);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseUp);

    return () => {
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("mouseup", handleMouseUp);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseUp);
    };
  }, [isDragging, playerSize]);

  // Preload initial pipes and continue generating new pipes.
  useEffect(() => {
    const initialPipes = [];
    let pos = canvasWidth + 100; // Start a bit off-screen.
    while (pos < canvasWidth + 2000) {
      const gapY = Math.floor(Math.random() * (canvasHeight - pipeGap - 40)) + 20;
      initialPipes.push({ x: pos, gapY, scored: false });
      // Increment pos based on a random width for the hole and fixed spacing.
      const width = Math.random() * (holeMaxWidth - holeMinWidth) + holeMinWidth;
      pos += width + holeSpacing;
    }
    setGameState((prev) => ({ ...prev, pipes: initialPipes }));
    
    const pipeTimer = setInterval(() => {
      const gapY = Math.floor(Math.random() * (canvasHeight - pipeGap - 40)) + 20;
      setGameState((prev) => ({
        ...prev,
        pipes: [...prev.pipes, { x: canvasWidth, gapY, scored: false }],
      }));
    }, pipeInterval);
    
    return () => clearInterval(pipeTimer);
  }, [canvasWidth, canvasHeight, pipeGap, holeMaxWidth, holeMinWidth, holeSpacing, pipeInterval]);

  // Main game loop.
  useEffect(() => {
    let animationFrameId;
    const context = canvasRef.current.getContext("2d");

    const updateGame = () => {
      setGameState((prev) => {
        let { player, pipes, score } = prev;
        // Update player position based on keysPressed.
        if (keysPressed["ArrowUp"]) {
          player.y -= playerSpeed;
        }
        if (keysPressed["ArrowDown"]) {
          player.y += playerSpeed;
        }
        if (keysPressed["ArrowLeft"]) {
          player.x -= playerSpeed;
        }
        if (keysPressed["ArrowRight"]) {
          player.x += playerSpeed;
        }
        // Constrain player position.
        player.x = Math.max(0, Math.min(canvasWidth - playerSize, player.x));
        player.y = Math.max(0, Math.min(canvasHeight - 20 - playerSize, player.y));

        // Move pipes leftward.
        pipes = pipes
          .map((pipe) => ({ ...pipe, x: pipe.x - pipeSpeed }))
          .filter((pipe) => pipe.x + pipeWidth > 0);

        // Collision detection.
        let collision = false;
        if (
          player.x < 0 ||
          player.x + playerSize > canvasWidth ||
          player.y < 0 ||
          player.y + playerSize > canvasHeight - 20
        ) {
          collision = true;
        }
        pipes.forEach((pipe) => {
          const playerRect = { x: player.x, y: player.y, width: playerSize, height: playerSize };
          const upperPipe = { x: pipe.x, y: 0, width: pipeWidth, height: pipe.gapY };
          const lowerPipe = { x: pipe.x, y: pipe.gapY + pipeGap, width: pipeWidth, height: canvasHeight - pipe.gapY - pipeGap - 20 };
          if (rectIntersect(playerRect, upperPipe) || rectIntersect(playerRect, lowerPipe)) {
            collision = true;
          }
        });

        if (collision) {
          // Reset the game.
          return {
            player: { x: 50, y: 200 },
            pipes: [],
            score: 0,
          };
        }

        // Increase score when a pipe passes the player's x position.
        pipes.forEach((pipe) => {
          if (!pipe.scored && pipe.x + pipeWidth < player.x) {
            pipe.scored = true;
            score += 1;
          }
        });

        return { player, pipes, score };
      });

      drawGame();
      animationFrameId = requestAnimationFrame(updateGame);
    };

    const drawGame = () => {
      const { player, pipes, score } = gameState;
      context.clearRect(0, 0, canvasWidth, canvasHeight);
      
      // Draw background.
      context.fillStyle = "#70c5ce"; // Sky blue.
      context.fillRect(0, 0, canvasWidth, canvasHeight);

      // Draw pipes.
      context.fillStyle = "#008000";
      pipes.forEach((pipe) => {
        context.fillRect(pipe.x, 0, pipeWidth, pipe.gapY);
        context.fillRect(pipe.x, pipe.gapY + pipeGap, pipeWidth, canvasHeight - pipe.gapY - pipeGap - 20);
      });

      // Draw ground.
      context.fillStyle = "#ded895";
      context.fillRect(0, canvasHeight - 20, canvasWidth, canvasHeight - canvasHeight + 20);

      // Draw score.
      context.fillStyle = "#fff";
      context.font = "24px sans-serif";
      context.fillText(`Score: ${score}`, 10, 30);
    };

    const rectIntersect = (r1, r2) => {
      return !(
        r2.x > r1.x + r1.width ||
        r2.x + r2.width < r1.x ||
        r2.y > r1.y + r1.height ||
        r2.y + r2.height < r1.y
      );
    };

    updateGame();
    return () => cancelAnimationFrame(animationFrameId);
  }, [gameState, keysPressed]);

  return (
    <div style={{ position: "relative", width: canvasWidth, height: canvasHeight }}>
      <canvas
        ref={canvasRef}
        width={canvasWidth}
        height={canvasHeight}
        style={{ border: "2px solid #fff", borderRadius: "8px" }}
      />
      <div
        style={{
          position: "absolute",
          left: gameState.player.x,
          top: gameState.player.y,
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

export default FlappyBirdGame;
