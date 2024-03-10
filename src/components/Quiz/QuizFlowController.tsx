"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

import QuestionOptions from "./QuestionOptions";
import QuizCompleted from "./QuizCompleted";
import QuizInPrgress from "./QuizInPrgress";
import QuizInital from "./QuizInital";

type Props = {};

const QuizFlowController = (props: Props) => {
  const status = useSelector((state: RootState) => state.quiz.status);

  if (status === "INITIAL") {
    return <QuizInital />;
  }

  if (status === "LOADING") return <div className="text-black">Loading...</div>;

  if (status === "QUIZ_COMPLETED") {
    return <QuizCompleted />;
  }

  return <QuizInPrgress />;
};

export default QuizFlowController;
