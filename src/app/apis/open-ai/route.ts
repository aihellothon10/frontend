import { NextResponse } from 'next/server';
// import OpenAI from 'openai';

// const openai = new OpenAI({
//   apiKey: process.env.NEXT_PUBLIC_CHATGPT_API_KEY,
// });

export const GET = (res: Response, req: Request) => {
  console.log('test open ai get');
  console.log(res);
  console.log(req);

  // const completion = await openai.chat.completions.create({
  //   model: 'gpt-3.5-turbo',
  //   messages: [
  //     {
  //       role: 'system',
  //       content: 'You will be provided with statements, and your task is to convert them to standard English.',
  //     },
  //     {
  //       role: 'user',
  //       content: 'She no went to the market.',
  //     },
  //   ],
  //   temperature: 0.7,
  //   max_tokens: 64,
  //   top_p: 1,
  // });

  // console.log(completion);

  // return NextResponse.json(completion);
  return NextResponse.json({ ok: true });
};
