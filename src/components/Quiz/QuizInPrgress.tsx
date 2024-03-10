"use client";
import React, { useState } from "react";
import QuestionOptions from "./QuestionOptions";
import {
  Question,
  changeAnswer,
  incrementStep,
} from "@/lib/features/quizSlice";
import { AppDispatch, RootState } from "@/lib/store";
import { useDispatch, useSelector } from "react-redux";

const QuizInPrgress = () => {
  const quiz = useSelector((state: RootState) => state.quiz);
  const [warningMessage, setWarningMessage] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const { questions, status, step, canRespond } = quiz;

  const question = questions[step];

  const handleOptionClick = (optionIndex: number) => {
    if (!canRespond) {
      setWarningMessage("İlk 10 saniye cevap veremezsiniz");
      setTimeout(() => {
        setWarningMessage("");
      }, 2000);
      return;
    }
    dispatch(changeAnswer(optionIndex));
  };

  const handleNextClick = () => {
    dispatch(incrementStep());
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 text-gray-950">
      <QuestionOptions
        question={question}
        handleOptionClick={handleOptionClick}
      />
      {question?.answerIndex !== -1 && (
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition-colors"
          onClick={handleNextClick}
        >
          Next
        </button>
      )}
      {warningMessage && (
        <div className="text-red-500 mt-4">{warningMessage}</div>
      )}
    </div>
  );
};
export default QuizInPrgress;
