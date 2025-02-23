"use client";

import React, { useEffect, useRef, useState } from "react";

const MazeGame = ({ skillIcon: Icon, skillColor }) => {
  const rows = 15;
  const cols = 15;
  const cellSize = 25;
  const canvasWidth = cols * cellSize;
  const canvasHeight = rows * cellSize;

  const [maze, setMaze] = useState([]);
  const [playerPos, setPlayerPos] = useState({ row: 1, col: 1 });
  const [exitPos, setExitPos] = useState({ row: rows - 2, col: cols - 2 });
  const canvasRef = useRef(null);

  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [dragDelta, setDragDelta] = useState({ x: 0, y: 0 });

  const generateMaze = () => {
    let grid = Array.from({ length: rows }, () => Array(cols).fill(1));
    const directions = [
      { dr: -2, dc: 0 },
      { dr: 2, dc: 0 },
      { dr: 0, dc: -2 },
      { dr: 0, dc: 2 },
    ];

    grid[1][1] = 0;
    let stack = [{ row: 1, col: 1 }];

    while (stack.length > 0) {
      const current = stack[stack.length - 1];
      const { row, col } = current;
      let neighbors = [];

      directions.forEach(({ dr, dc }) => {
        const newRow = row + dr;
        const newCol = col + dc;
        if (
          newRow > 0 &&
          newRow < rows - 1 &&
          newCol > 0 &&
          newCol < cols - 1 &&
          grid[newRow][newCol] === 1
        ) {
          neighbors.push({ row: newRow, col: newCol, dr, dc });
        }
      });

      if (neighbors.length > 0) {
        const { row: nRow, col: nCol, dr, dc } =
          neighbors[Math.floor(Math.random() * neighbors.length)];
        grid[row + dr / 2][col + dc / 2] = 0;
        grid[nRow][nCol] = 0;
        stack.push({ row: nRow, col: nCol });
      } else {
        stack.pop();
      }
    }
    return grid;
  };

  useEffect(() => {
    const newMaze = generateMaze();
    setMaze(newMaze);
    setPlayerPos({ row: 1, col: 1 });
    setExitPos({ row: rows - 2, col: cols - 2 });
  }, []);

  const drawMaze = (context) => {
    if (!maze.length) return;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        context.fillStyle = maze[r][c] === 1 ? "#000" : "#fff";
        context.fillRect(c * cellSize, r * cellSize, cellSize, cellSize);
        context.strokeStyle = "#ccc";
        context.strokeRect(c * cellSize, r * cellSize, cellSize, cellSize);
      }
    }
    context.fillStyle = "#0f0";
    context.fillRect(
      exitPos.col * cellSize,
      exitPos.row * cellSize,
      cellSize,
      cellSize
    );
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext("2d");
      drawMaze(context);
    }
  }, [maze, exitPos]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      e.preventDefault();
      let newPos = { ...playerPos };
      if (e.key === "ArrowUp") {
        newPos.row -= 1;
      } else if (e.key === "ArrowDown") {
        newPos.row += 1;
      } else if (e.key === "ArrowLeft") {
        newPos.col -= 1;
      } else if (e.key === "ArrowRight") {
        newPos.col += 1;
      }
      if (
        newPos.row >= 0 &&
        newPos.row < rows &&
        newPos.col >= 0 &&
        newPos.col < cols &&
        maze[newPos.row][newPos.col] === 0
      ) {
        setPlayerPos(newPos);
        if (newPos.row === exitPos.row && newPos.col === exitPos.col) {
          const newMaze = generateMaze();
          setMaze(newMaze);
          setPlayerPos({ row: 1, col: 1 });
          setExitPos({ row: rows - 2, col: cols - 2 });
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [playerPos, maze, exitPos]);

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    setIsDragging(true);
    setDragStart({ x: touch.clientX, y: touch.clientY });
    setDragDelta({ x: 0, y: 0 });
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    setDragDelta({
      x: touch.clientX - dragStart.x,
      y: touch.clientY - dragStart.y,
    });
  };

  const handleTouchEnd = (e) => {
    if (!isDragging) return;
    setIsDragging(false);

    const canvasRect = canvasRef.current.getBoundingClientRect();
    const originalX = playerPos.col * cellSize;
    const originalY = playerPos.row * cellSize;
    const dropX = originalX + dragDelta.x;
    const dropY = originalY + dragDelta.y;

    const targetCol = Math.floor(dropX / cellSize);
    const targetRow = Math.floor(dropY / cellSize);

    if (
      targetRow >= 0 &&
      targetRow < rows &&
      targetCol >= 0 &&
      targetCol < cols &&
      maze[targetRow][targetCol] === 0
    ) {
      setPlayerPos({ row: targetRow, col: targetCol });
      if (targetRow === exitPos.row && targetCol === exitPos.col) {
        const newMaze = generateMaze();
        setMaze(newMaze);
        setPlayerPos({ row: 1, col: 1 });
        setExitPos({ row: rows - 2, col: cols - 2 });
      }
    }
    setDragDelta({ x: 0, y: 0 });
  };

  return (
    <div
      style={{ position: "relative", width: canvasWidth, height: canvasHeight }}
    >
      <canvas
        ref={canvasRef}
        width={canvasWidth}
        height={canvasHeight}
        style={{ border: "2px solid #000" }}
      />
      <div
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{
          position: "absolute",
          left: playerPos.col * cellSize,
          top: playerPos.row * cellSize,
          width: cellSize,
          height: cellSize,
          pointerEvents: "auto",
          transform: `translate(${dragDelta.x}px, ${dragDelta.y}px)`,
          transition: isDragging ? "none" : "transform 0.2s ease-out",
        }}
      >
        <Icon size={cellSize} color={skillColor} />
      </div>
    </div>
  );
};

export default MazeGame;
