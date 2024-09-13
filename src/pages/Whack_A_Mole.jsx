// src/Game.js
import React, { useState, useEffect } from 'react';
import { Howl } from 'howler';
import MoleHill from './MoleHill';
import clickSound from '../assests/click.mp3';
import startSound from '../assests/start.mp3';
import endSound from '../assests/end.mp3';

const NUM_OF_MOLES = 9;          // Number of mole hills
const GAME_DURATION = 30;        // Game duration in seconds
const INITIAL_MOLE_SPEED = 800;  // Initial speed at which moles pop up (ms)

function Whack_A_Mole() {
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [activeMole, setActiveMole] = useState(null);
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
  const [isGameActive, setIsGameActive] = useState(false);
  const [moleSpeed, setMoleSpeed] = useState(800);

  const clickHowl = new Howl({ src: [clickSound] });
  const startHowl = new Howl({ src: [startSound] });
  const endHowl = new Howl({ src: [endSound] });

  useEffect(() => {
    console.log('isGameActive:', isGameActive, 'timeLeft:', timeLeft);
    if (isGameActive) {
      const timerInterval = setInterval(() => {
        setTimeLeft((prevTimeLeft) => {
          if (prevTimeLeft <= 1) {
            clearInterval(timerInterval);
            setIsGameActive(false);
            endHowl.play();
            console.log('Game ended');
            const highScore = localStorage.getItem('whackAMoleHighScore') || 0;
            if (score > highScore) {
              localStorage.setItem('whackAMoleHighScore', score);
            }
            return 0;
          } else {
            console.log('Time left:', prevTimeLeft - 1);
            return prevTimeLeft - 1;
          }
        });
      }, 1000);

      return () => clearInterval(timerInterval);
    }
  }, [isGameActive, score, endHowl]);
 
  
  useEffect(() => {
    let moleInterval;
    if (isGameActive) {
      moleInterval = setInterval(() => {
        const randomMole = Math.floor(Math.random() * NUM_OF_MOLES);
        setActiveMole(randomMole);
      }, moleSpeed);
    } else {
      setActiveMole(null);
    }
    return () => clearInterval(moleInterval);
  }, [isGameActive, moleSpeed]);

  const handleMoleClick = (index) => {
    if (index === activeMole) {
      setScore(prev => prev + 1);
      setActiveMole(null);
      clickHowl.play();
    }
  };

  const startGame = () => {
    startHowl.play();
    setScore(0);
    setLevel(1);
    setMoleSpeed(800);
    setTimeLeft(GAME_DURATION);
    setIsGameActive(true);
  };

  useEffect(() => {
    if (timeLeft === 0 && score >= level * 5) {
      setLevel(prev => prev + 1);
      setMoleSpeed(prev => prev * 0.9);
    }
  }, [timeLeft, score, level]);

  const highScore = localStorage.getItem('whackAMoleHighScore') || 0;

  return (
    <div className="bg-white p-8 text-black rounded-2xl shadow-2xl">
      <h1 className="text-4xl font-bold text-center mb-6">Whack-A-Mole</h1>
      <div className="flex justify-between mb-4">
        <div className="text-2xl">Score: <span className="font-semibold">{score}</span></div>
        <div className="text-2xl">Time Left: <span className="font-semibold">{timeLeft}s</span></div>
        <div className="text-2xl">Level: <span className="font-semibold">{level}</span></div>
        <div className="text-2xl">High Score: <span className="font-semibold">{highScore}</span></div>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {Array.from({ length: NUM_OF_MOLES }).map((_, index) => (
          <MoleHill
            key={index}
            isActive={activeMole === index}
            onWhack={() => handleMoleClick(index)}
          />
        ))}
      </div>
      {!isGameActive && (
        <div className="flex justify-center mt-6">
          <button
            onClick={startGame}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full text-xl transition duration-300"
          >
            {timeLeft === 0 ? 'Play Again' : 'Start Game'}
          </button>
        </div>
      )}
    </div>
  );
}
export default Whack_A_Mole