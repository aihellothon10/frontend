import { Fragment } from 'react';

import { cn } from 'dotori-utils';

import { Image } from '@/app/_components/common';

export interface ChatResponse {
  q: string;
  a: string;
  status: string;
  analyzeInput: {
    images: string[];
    query: string;
    links: string[];
  };
  analyzeResult: {
    assistantContent: string;
    generatedTitle: string;
    answer: string;
    contentContainBoolean: 0;
    contentContainBooleanExplain: string;
    crawlingContents: string[];
    toxicityTexts: string[];
    toxicityPredictions: [
      {
        score: 0;
        toxic: true;
      },
    ];
    content: string;
    citations: string[];
    keyword: string;
    searchResults: [
      {
        title: string;
        link: string;
        description: string;
      },
    ];
  };
}

const ChatBody = ({ chats }: ChatBodyProps) => (
  <div className="flex flex-col gap-20 px-4">
    {chats?.map(({ q, a}, index) => (
      <Fragment key={index}>
        <div className={chatContainerStyle({ isMyChat: true })}>
          <div className={chatStyle({ isMyChat: true })}>{q}</div>
        </div>
        <div className={chatContainerStyle({ isMyChat: false })}>
          <div>
            <button className="rounded-max bg-grayscale-10 p-2" type="submit">
              <Image
                alt="twinkle"
                className=""
                containerClassName="w-6 h-6"
                sizes="1.5rem"
                src="/images/twinkle2.svg"
              />
            </button>
          </div>
          <div className={chatStyle({ isMyChat: false })}>{a}</div>
          <div>
            {citations}
          </div>
        </div>
      </Fragment>
    ))}
  </div>
);

interface ChatBodyProps {
  chats?: ChatResponse[];
}

const chatContainerStyle = cn('flex max-w-[90%] gap-12', {
  variants: {
    isMyChat: {
      true: 'self-end',
      false: 'self-start',
    },
  },
});

const chatStyle = cn('inline-block  rounded-b-16 rounded-tl-16 rounded-tr-4', {
  variants: {
    isMyChat: {
      true: 'bg-blue-50 text-grayscale-10 px-4 py-3.5',
      false: 'bg-grayscale-20 text-grayscale-80',
    },
  },
});

export default ChatBody;
