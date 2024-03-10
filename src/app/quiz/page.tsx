import QuizFlowController from "@/components/Quiz/QuizFlowController";
import Timer from "@/components/Timer/Timer";

export default function Quiz() {
  return (
    <main className="bg-white flex min-h-screen self-center  flex-col items-center  p-4 text-gray-950">
      <h1 className="text-4xl font-semibold text-center p-4 text-blue-700">
        Quiz App
      </h1>
      <Timer />
      <QuizFlowController />
    </main>
  );
}
