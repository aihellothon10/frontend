import { NextRequest, NextResponse } from 'next/server';

import { PROMPT } from '@/app/constants/prompt';
import { eliceHelpyVInstance } from '@/service/elice/chat';

import type { HelpyVResponse } from '@/app/types/response';

const prompt = {
  model: 'helpy-v-large',
  max_tokens: 1000,
  messages: [
    {
      role: 'system',
      content: [
        {
          type: 'text',
          text: PROMPT.BABY_PROFESSOR,
        },
      ],
    },
  ],
};

const createMessage = (text: string) => ({ role: 'user', content: [{ type: 'text', text }] });

export const POST = async (req: NextRequest) => {
  const { question } = (await req.json()) as { question: string };

  //! 나중에 (primary key): 사용자 id, 질문할 때의 session_id, data: message를 db에 저장하기, 불러오기.
  const { data } = await eliceHelpyVInstance<HelpyVResponse>({
    method: 'POST',
    data: { ...prompt, messages: [...prompt.messages, createMessage(question)] },
  });

  return NextResponse.json(data);
};
