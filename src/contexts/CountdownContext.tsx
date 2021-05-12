// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { createContext, ReactNode, useEffect, useState } from 'react';

interface CountdownProviderProps {
  children: ReactNode;
}

interface CountdownContextData {
  timeInSeconds: number;
  totalTime: number;
  hasFinished: boolean;
  isActive: boolean;
  startCountdown: () => void;
  resetCountdown: () => void;
}

export const CountdownContext = createContext({} as CountdownContextData);

let countdownTimeout: number;
const initialTimeout = 15;

export function CountdownProvider({ children }: CountdownProviderProps) {
  // const { startNewChallenge } = useContext(ChallengesContext);

  const [timeInSeconds, setTimeInSeconds] = useState(initialTimeout);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  useEffect(() => {
    if (isActive && timeInSeconds > 0) {
      countdownTimeout = setTimeout(() => {
        setTimeInSeconds(timeInSeconds - 1);
      }, 1000);
    } else if (isActive && timeInSeconds === 0) {
      setHasFinished(true);
      setIsActive(false);
      // startNewChallenge();
    }
  }, [isActive, timeInSeconds]);

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTimeInSeconds(initialTimeout);
    setHasFinished(false);
  }

  return (
    <CountdownContext.Provider
      value={{
        timeInSeconds,
        hasFinished,
        totalTime: initialTimeout,
        isActive,
        startCountdown,
        resetCountdown,
      }}>
      {children}
    </CountdownContext.Provider>
  );
}
