"use client";
import useInterval from "@/hooks/useInterval";
import { fetchQuestion, incrementStep } from "@/lib/features/quizSlice";
import { AppDispatch, RootState } from "@/lib/store";
import React, { use, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

type Props = {};

const INITIAL_COUNT_QUESTION = 10;
const INITIAL_COUNT_QUERY = 10;

const timeLimit = {
  quiz: 600,
  question: 30,
};

const Timer = (props: Props) => {
  const [secondsRemaining, setSecondsRemaining] = useState(timeLimit);

  const [quizTime, setQuizTime] = useState(0);
  const [questionTime, setQuestionTime] = useState(0);

  const quiz = useSelector((state: RootState) => state.quiz);
  const dispatch = useDispatch<AppDispatch>();

  const { questions, status, step } = quiz;

  const handleStart = () => {
    dispatch(fetchQuestion());
  };

  useEffect(() => {
    if (quiz.questions.length > 0) {
    }
  }, [quiz.questions]);

  // saniye artışını takip etmek için kullanılan hook
  useInterval(
    () => {
      if (quizTime < timeLimit.quiz && questionTime < timeLimit.question) {
        console.log("Time is running", { questionTime, quizTime });

        setQuizTime(quizTime + 1);
        setQuestionTime(questionTime + 1);
      } else if (questionTime >= timeLimit.question) {
        console.log("next question");
        dispatch(incrementStep());
      } else {
        console.log("Time is up");
      }
    },
    status === "IN_PROGRESS" ? 1000 : null
  );

  // yeni soruya geçildiğinde soru süresini sıfırla
  useEffect(() => {
    if (status === "IN_PROGRESS") {
      setQuestionTime(0);
    }
  }, [step, status]);

  console.log(quiz);

  return (
    <div className="text-black">
      {quiz.questions.length > 0 && <div>Questions are ready</div>}
      {status === "LOADING" && <div>Loading...</div>}

      {status === "INITIAL" && (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
          onClick={handleStart}
        >
          Start Quiz
        </button>
      )}

      {status === "IN_PROGRESS" && (
        <div>
          <div>
            Quiz Time:
            {secondsToHms(timeLimit.quiz - quizTime)}
          </div>
          <div>
            Question Time:
            {secondsToHms(timeLimit.question - questionTime)}
          </div>
        </div>
      )}
    </div>
  );
};

export default Timer;

function secondsToHms(d: number) {
  var h = Math.floor(d / 3600);
  var m = Math.floor((d % 3600) / 60);
  var s = Math.floor((d % 3600) % 60);

  var hDisplay = h > 0 ? h + (h == 1 ? ":" : ":") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? ":" : ":") : "";
  var sDisplay = s > 0 ? s : "";
  return hDisplay + mDisplay + sDisplay;
}
