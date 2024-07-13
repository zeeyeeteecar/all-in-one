import { prisma } from "@/lib/prisma";

export async function fetch_QuestionList() {
  "use server";
  const response = await prisma.tbl_MakeItFair_2024_Ques.findMany({
    select: {
      ID: true,
      quesTitle: true,
      quesContent: true,
      answer: {
        select: {
          ID: true,
          answerContent: true,
          clientIP: true,
          answerDateTime: true,
          answerTel: true,
          answerEmail: true,
        },
      },
    },
  });
  return response;
}

export async function fetch_AnswerList(quesID: string) {
  "use server";
  const response = await prisma.tbl_MakeItFair_2024_Answer.findMany({
    where: {
      quesID: Number(quesID),
    },
  });

  return response;
}
