"use client";
import React from "react";
import { pollData } from "../lib/lib";

export default function MakeItFair_Main({ answerList }: any) {
  const [showModal_Show, setShowModal_Show] = React.useState(false);
  const handleOnClose = () => setShowModal_Show(false);

  const [stateAnswerList, setStateAnswerList] = React.useState<any>([]);

  return (
    <div className="w-full h-full flex flex-col p-4 space-y-4 text-slate-500">
      {pollData.map((question: any, key: number) => {
        return (
          <>
            <div
              key={key}
              id="divQuestion1"
              className="w-[1500px] h-[400px] border bg-white relative bg-clip-border rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none m-0 flex flex-col items-center justify-between p-6"
            >
              <div className="w-full min-w-[640px] table-auto">
                <div className="w-full ">
                  <p className="block antialiased font-sans text-[20px] font-medium uppercase text-blue-gray-400">
                    --- Question {key + 1} --- {question.question_Title}
                  </p>
                </div>
                <div className="w-full p-4 space-y-2">
                  {question.question_Answer.map(
                    (eachAnswer: any, key: number) => {
                      const answerCount = answerList.filter(
                        ({ answer }: any) => answer === eachAnswer.answerValue
                      ).length;
                      const answerPercent:number =
                        (answerCount /
                          answerList.filter(({ answer }: any) =>
                            answer.includes("question1")
                          ).length) *
                        100;

                      return (
                        <>
                          <div className="flex flex-row border">
                            <span className="w-[500px] block antialiased font-sans text-lg leading-normal text-blue-gray-900 font-semibold">
                              {eachAnswer.answerTitle}
                            </span>

                            {/* <span className="w-[500px] block antialiased font-sans text-lg leading-normal text-blue-gray-900 font-semibold">
                            {eachAnswer.answerValue}
                          </span> */}

                            <span className="w-[200px] block antialiased font-sans text-sm text-blue-gray-600">
                              {answerCount}
                            </span>

                            <span className="antialiased font-sans mb-1 block text-sm  text-blue-gray-600">
                              {answerPercent.toString() + "%"}
                            </span>

                            <div className="relative w-[100px] border">
                              <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
                                <span
                                  className={
                                    `w-[` +
                                    answerPercent.toString() +
                                    `px] shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600`
                                  }
                                >percent</span>
                              </div>
                            </div>
                            <div className="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
                              <div className="flex justify-center items-center h-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white"></div>
                            </div>
                          </div>
                        </>
                      );
                    }
                  )}
                </div>
              </div>
            </div>
          </>
        );
      })}
      {/* {JSON.stringify(answerList)} */}
    </div>
  );
}
