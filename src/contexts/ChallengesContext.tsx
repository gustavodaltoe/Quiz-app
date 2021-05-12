import { decode } from 'html-entities';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { createContext, ReactNode, useState } from 'react';

import { shuffleArray } from '../utils/shuffle-array';

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
  isLoading: boolean;
  hasFinished: boolean;
  startNewChallenge: () => Promise<void>;
  answerQuestion: (answer: string) => boolean;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [current, setCurrent] = useState(0);
  const [amountCorrect, setAmountCorrect] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [hasFinished, setHasFinished] = useState(false);

  const total = 5;

  async function startNewChallenge() {
    setIsLoading(true);
    setHasFinished(false);

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
        isLoading,
        hasFinished,
        startNewChallenge,
        answerQuestion,
      }}>
      {children}
    </ChallengesContext.Provider>
  );
}
