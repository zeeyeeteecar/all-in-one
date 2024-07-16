"use client";
import React from "react";
import PlusButton from "./PlusButton";
import { IoAddCircleOutline } from "react-icons/io5";
import moment from "moment-timezone";

export default function MakeItFair_Main({
  questionList,
  fetch_AnswerList,
}: any) {
  const [showModal_Show, setShowModal_Show] = React.useState(false);
  const handleOnClose = () => setShowModal_Show(false);

  const [stateQuestionList, setStateQuestionList] = React.useState<any>(
    questionList
  );

  const [stateAnswerList, setStateAnswerList] = React.useState<any>([]);

  async function handleClick_Select_Question(e: any) {
    const questionID = e.currentTarget.value.toString();
    const answerList = await fetch_AnswerList(questionID);
    setStateAnswerList(answerList);
    console.log(questionID);
  }

  return (
    <div className="w-full h-full flex flex-row p-4 space-x-2 text-slate-500">
      <div id="divQuestionList" className="w-[700px] h-full border bg-white">
        <div
          id="divQuestionList_TopTitle"
          className="sm:flex items-center justify-between p-4"
        >
          <div className="flex items-center">
            <a
              className="rounded-full focus:outline-none focus:ring-2  focus:bg-indigo-50 focus:ring-indigo-800"
              href=" javascript:void(0)"
            >
              <div className="py-2 px-8 bg-indigo-100 text-indigo-700 rounded-full">
                <p>All</p>
              </div>
            </a>
            <a
              className="rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 ml-4 sm:ml-8"
              href="javascript:void(0)"
            >
              <div className="py-2 px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full ">
                <p>Done</p>
              </div>
            </a>
            <a
              className="rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 ml-4 sm:ml-8"
              href="javascript:void(0)"
            >
              <div className="py-2 px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full ">
                <p>Pending</p>
              </div>
            </a>
          </div>
          <button className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-indigo-200 hover:bg-indigo-600 focus:outline-none rounded-lg">
            <p className="text-sm font-medium leading-none text-white">
              Add Question
            </p>
          </button>
        </div>
        {stateQuestionList &&
          stateQuestionList.map((question: any, key: number) => {
            return (
              <div key={key} className="flex flex-col gap-0 p-2">
                <label className="border-0">
                  <input
                    type="radio"
                    value={question.ID.toString()}
                    className="peer hidden"
                    name="framework"
                    onClick={(e) => handleClick_Select_Question(e)}
                  />

                  <div
                    className="flex flex-row  items-center justify-center h-full w-full  hover:bg-red-50 px-4  space-x-2 py-2 border bg-slate-50 
                  rounded-lg cursor-pointer text-sm border-gray-100 group peer-checked:border-red-200 peer-checked:bg-red-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1"
                      stroke="currentColor"
                      className="w-9 h-9 float-left text-red-600 invisible group-[.peer:checked+&]:visible"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>

                    <div className=" h-full flex items-center justify-center space-y-1 font-medium text-gray-500 border-0 border-red-300 ">
                      {question.ID} - {question.quesTitle} -{" "}
                      {question.quesContent}
                    </div>

                    <div className="border-0 border-blue-200 grow ">
                      <button
                        id="staffID"
                        name="staffID"
                        type="button"
                        className="w-[50px]  h-[50px] border hover:bg-gray-400 text-gray-800 font-bold py-2 px-2 rounded  items-center"
                        value={question.ID.toString()}
                        // onClick={(e) => {
                        //   handle_Select_LeaveDate(e.currentTarget.value);
                        // }}
                        onClick={() => setShowModal_Show(true)}
                      >
                        Edit
                      </button>
                    </div>
                    <div className="border-0 border-red-200 grow flow-root justify-center  ">
                      <PlusButton question={question} />
                    </div>
                  </div>
                </label>
              </div>
            );
          })}
      </div>

      <div id="divAnswerList" className="w-[1000px] h-full border bg-white">
        {JSON.stringify(stateAnswerList)}

        <div className="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
          <div className="sm:flex items-center justify-between">
            <div className="flex items-center">
              <a
                className="rounded-full focus:outline-none focus:ring-2  focus:bg-indigo-50 focus:ring-indigo-800"
                href=" javascript:void(0)"
              >
                <div className="py-2 px-8 bg-indigo-100 text-indigo-700 rounded-full">
                  <p>All</p>
                </div>
              </a>
              <a
                className="rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 ml-4 sm:ml-8"
                href="javascript:void(0)"
              >
                <div className="py-2 px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full ">
                  <p>Done</p>
                </div>
              </a>
              <a
                className="rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 ml-4 sm:ml-8"
                href="javascript:void(0)"
              >
                <div className="py-2 px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full ">
                  <p>Pending</p>
                </div>
              </a>
            </div>
            <button className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
              <p className="text-sm font-medium leading-none text-white">
                Add Task
              </p>
            </button>
          </div>
          {stateAnswerList &&
            stateAnswerList.map((answer: any, key: number) => {
              return (
                <div
                  key={key}
                  className="mt-7 overflow-x-auto flex flex-col  text-sm"
                >
                  <div> {answer.answerContent} </div>
                  <div>
                    {answer.ID} - {answer.quesID} - {answer.clientIP} -{" "}
                    {moment(answer.answerDateTime.toString()).format(
                      "YYYY-MM-DD HH:mm:ss"
                    )}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
