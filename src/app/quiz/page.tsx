import QuizFlowController from "@/components/Quiz/QuizFlowController";
import Timer from "@/components/Timer/Timer";
import Link from "next/link";

export default function Quiz() {
  return (
    <main className="bg-white flex min-h-screen self-center  flex-col items-center   text-gray-950">
      <div className="grid grid-cols-3 w-full max-w-1440 p-4 lg:px-20 lg:py-6">
        <h1 className=" text-4xl col-start-2 font-semibold text-center p-4 text-blue-700">
          Quiz App
        </h1>
        <div className="col-start-3 justify-self-end ">
          <Link href="/">
            <button className="grow justify-center self-stretch px-7 py-3 whitespace-nowrap rounded-lg border-2 border-solid border-[color:var(--Amber-900,#78350F)] hover:bg-amber-700 hover:text-white">
              CSS Task
            </button>
          </Link>
        </div>
      </div>
      <Timer />
      <QuizFlowController />
    </main>
  );
}
