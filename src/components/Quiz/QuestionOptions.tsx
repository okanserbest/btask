import { Question } from "@/lib/features/quizSlice";
import React from "react";

// Props türlerini tanımlayın (eğer TypeScript kullanıyorsanız)
interface OptionProps {
  question: Question;
  handleOptionClick?: (index: number) => void;
}

const QuestionOptions = ({ question, handleOptionClick }: OptionProps) => {
  const { questionText, options, answerIndex } = question;

  return (
    <div>
      <div className="text-lg font-semibold mb-4">{questionText}</div>
      <div className="flex flex-col space-y-2">
        {options.map((option, index) => (
          <button
            key={index}
            className={`w-full text-left px-4 py-2 rounded-lg border-2 
                                        ${
                                          answerIndex === index
                                            ? "border-blue-500 bg-blue-100"
                                            : "border-gray-300"
                                        }`}
            onClick={() => handleOptionClick && handleOptionClick(index)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionOptions;
