import { decode } from 'html-entities';
import React, {
  createContext,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

import { shuffleArray } from '../utils/shuffle-array';

import { CountdownContext } from './CountdownContext';

interface Question {
  question: string;
  answers: string[];
  correctAnswer: string;
}

interface ResponseQuestion {
  question: string;
  // eslint-disable-next-line camelcase
  correct_answer: string;
  // eslint-disable-next-line camelcase
  incorrect_answers: string[];
}

interface ChallengesProviderProps {
  children: ReactNode;
}

interface ChallengesContextData {
  questions: Question[];
  current: number;
  total: number;
  amountCorrect: number;
  amountIncorrect: number;
  isLoading: boolean;
  hasFinished: boolean;
  avgTimePerQuestion: number;
  totalTime: number;
  startNewChallenge: () => Promise<void>;
  answerQuestion: (answer: string) => boolean;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const { totalTime: countdownTotalTime, timeInMilliseconds } = useContext(
    CountdownContext,
  );

  const [questions, setQuestions] = useState<Question[]>([]);
  const [current, setCurrent] = useState(0);
  const [amountCorrect, setAmountCorrect] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [hasFinished, setHasFinished] = useState(false);
  const [timeToAnswer, setTimeToAnswer] = useState<number[]>([]);
  const [avgTimePerQuestion, setAvgTimePerQuestion] = useState(0);
  const [totalTime, setTotalTime] = useState(0);

  const total = 5;

  useEffect(() => {
    if (timeToAnswer.length === 0) return;
    const timePerAnswerSum = timeToAnswer.reduce((tot, time) => tot + time);

    setAvgTimePerQuestion(
      Number((timePerAnswerSum / timeToAnswer.length).toFixed(1)),
    );
    setTotalTime(Number(timePerAnswerSum.toFixed(1)));
  }, [timeToAnswer]);

  async function startNewChallenge() {
    setIsLoading(true);
    setHasFinished(false);
    setTimeToAnswer([]);
    setAmountCorrect(0);

    const { results } = await fetch(
      `https://opentdb.com/api.php?amount=${total}&type=multiple`,
    ).then((resp) => resp.json());

    const resultQuestions: Question[] = results.map(
      (item: ResponseQuestion) => {
        return {
          question: decode(item.question),
          answers: shuffleArray(
            [item.correct_answer, ...item.incorrect_answers].map((str) =>
              decode(str),
            ),
          ),
          correctAnswer: decode(item.correct_answer),
        } as Question;
      },
    );

    setQuestions(resultQuestions);
    setIsLoading(false);
  }

  function answerQuestion(answer: string) {
    const timeTook = (countdownTotalTime - timeInMilliseconds) / 1000;
    setTimeToAnswer([...timeToAnswer, timeTook]);

    const isCorrect = answer === questions[current].correctAnswer;
    if (isCorrect) {
      setAmountCorrect(amountCorrect + 1);
    }

    const nextQuestion = current < total - 1 ? current + 1 : 0;
    setCurrent(nextQuestion);

    if (nextQuestion === 0) {
      setHasFinished(true);
    }

    return isCorrect;
  }

  return (
    <ChallengesContext.Provider
      value={{
        questions,
        current,
        total,
        amountCorrect,
        amountIncorrect: total - amountCorrect,
        isLoading,
        hasFinished,
        avgTimePerQuestion,
        totalTime,
        startNewChallenge,
        answerQuestion,
      }}>
      {children}
    </ChallengesContext.Provider>
  );
}
