import React, { useState, useEffect } from 'react';
import '../index.css'
import { Link } from 'react-router-dom';

const ROWS = 30;
const COLS = 30;

const Snake = () => {
  const [grid, setGrid] = useState([]);
  const [snake, setSnake] = useState([]);
  const [food, setFood] = useState({});
  const [direction, setDirection] =useState('RIGHT');
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const initGrid = () => {
      let grid = [];
      for (let i = 0; i < ROWS; i++) {
        let row = [];
        for (let j = 0; j < COLS; j++) {
          row.push(0);
        }
        grid.push(row);
      }
      setGrid(grid);
    };

    const initSnake = () => {
      let snake = [
        { x: Math.floor(COLS / 2), y: Math.floor(ROWS / 2) },
        { x: Math.floor(COLS / 2) - 1, y: Math.floor(ROWS / 2) },
        { x: Math.floor(COLS / 2) - 2, y: Math.floor(ROWS / 2) },
      ];
      setSnake(snake);
    };

    const initFood = () => {
      let food = {
        x: Math.floor(Math.random() * COLS),
        y: Math.floor(Math.random() * ROWS),
      };
      setFood(food);
    };

    initGrid();
    initSnake();
    initFood();
  }, []);

  useEffect(() => {

  
    const handleKeyDown = (event) => {
      if (event.keyCode === 37 && direction !== 'RIGHT') {
        setDirection('LEFT');
      } else if (event.keyCode === 38 && direction !== 'DOWN') {
        setDirection('UP');
      } else if (event.keyCode === 39 && direction !== 'LEFT') {
        setDirection('RIGHT');
      } else if (event.keyCode === 40 && direction !== 'UP') {
        setDirection('DOWN');
      }
    };
  
    window.addEventListener('keydown', handleKeyDown);
  
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [direction, gameOver, snake]);

  useEffect(() => {
    if (gameOver) {
      return;
    }

    const moveSnake = () => {
      let newSnake = [...snake];
      let newHead = {
        x: newSnake[0].x,
        y: newSnake[0].y,
      };

      if (direction === 'LEFT') {
        newHead.x--;
      } else if (direction === 'UP') {
        newHead.y--;
      } else if (direction === 'RIGHT') {
        newHead.x++;
      } else if (direction === 'DOWN') {
        newHead.y++;
      }

      newSnake.unshift(newHead);

      if (newHead.x === food.x && newHead.y === food.y) {
        setFood({
          x: Math.floor(Math.random() * COLS),
          y: Math.floor(Math.random() * ROWS),
        });
        setScore(score + 10);
      } else {
        newSnake.pop();
      }

      setSnake(newSnake);
    };

    const checkGameOver = () => {
      let head = snake[0];
      if (head.x < 0 || head.x >= COLS || head.y < 0 || head.y >= ROWS) {
        setGameOver(true);
      }
      for (let i = 1; i < snake.length; i++) {
        if (snake[i].x === head.x && snake[i].y === head.y) {
          setGameOver(true);
        }
      }
    };

    const intervalId = setInterval(() => {
      moveSnake();
      checkGameOver();
    }, 100);

    return () => clearInterval(intervalId);
  }, [snake, direction, food, gameOver, score]);
  const renderGrid = () => {
    return (
      <div className="grid" style={{ border: "5px solid red" }}>
        {grid.map((row, rowIndex) => (
          <div className="row" key={rowIndex}>
            {row.map((cell, colIndex) => (
              <div
                className={`cell ${isSnake(colIndex, rowIndex) ? 'snake' : ''}`}
                key={`${colIndex}-${rowIndex}`}
              >
                {isFood(colIndex, rowIndex) && (
                  <img
                    src="../assets/apple.png"
                    alt="food"
                    className="food-image"
                  />
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };

  const isSnake = (x, y) => {
    return snake.some((cell) => cell.x === x && cell.y === y);
  };

  const isFood = (x, y) => {
    return food.x === x && food.y === y;
  };

  return (
    <>
 
 <div className="bg-green-900 h-screen " id="snake">
 <h1 className="text-center text-4xl font-bold text-white font-serif mt-3 mb-5">My Snake Game</h1>
  <div className="grid-container flex justify-center items-center">
    <div className="grid grid-cols-20 gap-1">
      {renderGrid()}
    </div>
  </div>

  <div class="w-full max-w-3xl mt-4 mx-auto">
    <div class="flex justify-between items-center">
      <div class="bg-blue-500 text-white px-4 py-2 rounded font-serif">Score : {score}</div>
      {gameOver && (
        <button
          class="bg-blue-500 text-white px-4 py-2 rounded ml-4 font-serif"
          onClick={() => window.location.reload()}
        >
          Play Again
        </button>
      )}
    </div>
  </div>
 
</div> 
</>
  );
};

export default Snake;