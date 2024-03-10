import { Question, fetchQuestion } from "@/lib/features/quizSlice";
import React from "react";
import QuestionOptions from "./QuestionOptions";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/lib/store";

type Props = {
  handleStart: () => void;
};

const QuizCompleted = () => {
  const questions = useSelector((state: RootState) => state.quiz.questions);
  const dispatch = useDispatch<AppDispatch>();

  const handleStart = () => {
    dispatch(fetchQuestion());
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 text-gray-950">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
        onClick={handleStart}
      >
        Start Again
      </button>
      {questions?.map((question, index) => (
        <div key={index} className="my-8">
          <QuestionOptions question={question} />
        </div>
      ))}
    </div>
  );
};

export default QuizCompleted;
