import { fetchQuestion } from "@/lib/features/quizSlice";
import { AppDispatch } from "@/lib/store";
import React from "react";
import { useDispatch } from "react-redux";

type Props = {};

const QuizInital = (props: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const handleStart = () => {
    dispatch(fetchQuestion());
  };
  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
        onClick={handleStart}
      >
        Start Quiz
      </button>
    </div>
  );
};
export default QuizInital;
