// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';

interface CountdownProviderProps {
  children: ReactNode;
}

interface CountdownContextData {
  timeInMilliseconds: number;
  timeInSeconds: number;
  totalTime: number;
  hasFinished: boolean;
  isActive: boolean;
  startCountdown: () => void;
  resetCountdown: () => void;
}

export const CountdownContext = createContext({} as CountdownContextData);

let countdownTimeout: number;
const initialTimeout = 15 * 1000;

export function CountdownProvider({ children }: CountdownProviderProps) {
  const [timeInMilliseconds, setTimeInMilliseconds] = useState(initialTimeout);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  useEffect(() => {
    if (isActive && timeInMilliseconds > 0) {
      countdownTimeout = setTimeout(() => {
        setTimeInMilliseconds(timeInMilliseconds - 100);
      }, 100);
    } else if (isActive && timeInMilliseconds === 0) {
      setHasFinished(true);
      setIsActive(false);
    }

    return () => {
      clearTimeout(countdownTimeout);
    };
  }, [isActive, timeInMilliseconds]);

  const startCountdown = useCallback(() => {
    setIsActive(true);
  }, []);

  const resetCountdown = useCallback(() => {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTimeInMilliseconds(initialTimeout);
    setHasFinished(false);
  }, []);

  return (
    <CountdownContext.Provider
      value={{
        timeInMilliseconds,
        timeInSeconds: Math.ceil(timeInMilliseconds / 1000),
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
