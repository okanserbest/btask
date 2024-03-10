"use client";
import useInterval from "@/hooks/useInterval";
import {
  changeCanRespond,
  fetchQuestion,
  incrementStep,
} from "@/lib/features/quizSlice";
import { AppDispatch, RootState } from "@/lib/store";
import React, { use, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

type Props = {};

const timeLimit = {
  question: 30,
  blokAnswer: 10,
};

const Timer = (props: Props) => {
  const [questionTime, setQuestionTime] = useState(0);

  const quiz = useSelector((state: RootState) => state.quiz);
  const dispatch = useDispatch<AppDispatch>();

  const { questions, status, step, canRespond } = quiz;

  useEffect(() => {
    if (questions.length > 0) {
    }
  }, [questions]);

  // saniye artışını takip etmek için kullanılan hook
  useInterval(
    () => {
      if (questionTime < timeLimit.question) {
        setQuestionTime(questionTime + 1);
      } else {
        dispatch(incrementStep());
      }

      dispatch(changeCanRespond(questionTime >= timeLimit.blokAnswer));
    },
    status === "IN_PROGRESS" ? 1000 : null
  );

  // yeni soruya geçildiğinde soru süresini sıfırla
  useEffect(() => {
    if (status === "IN_PROGRESS") {
      setQuestionTime(0);
    }
  }, [step, status]);

  return (
    <div className="flex flex-col items-center justify-center p-4 text-black ">
      {status === "IN_PROGRESS" && (
        <div>
          <div>
            Question Time:
            {timeLimit.question - questionTime}
          </div>
          <div>
            {step + 1}/{questions.length}
          </div>
        </div>
      )}
      {status === "QUIZ_COMPLETED" && (
        <div className="text-4xl text-green-600">Quiz Completed</div>
      )}
    </div>
  );
};

export default Timer;
