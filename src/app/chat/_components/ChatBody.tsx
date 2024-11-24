import { Fragment } from 'react';

import { cn } from 'dotori-utils';

import { Image } from '@/app/_components/common';
import { DOCS } from '@/app/constants';
import { useHorizontalScroll } from '@/app/hooks/common';

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

const ChatBody = ({ chats }: ChatBodyProps) => {
  const {
    containerRef: containerRef1,
    onDragStart: onDragStart1,
    onDragMove: onDragMove1,
    onDragEnd: onDragEnd1,
  } = useHorizontalScroll();
  const {
    containerRef: containerRef2,
    onDragStart: onDragStart2,
    onDragMove: onDragMove2,
    onDragEnd: onDragEnd2,
  } = useHorizontalScroll();

  return (
    <div className="flex flex-col gap-20 px-4">
      {chats?.map(({ q, a, analyzeResult: { citations } }, index) => (
        <Fragment key={index}>
          <div className={chatContainerStyle({ isMyChat: true })}>
            <div className={chatStyle({ isMyChat: true })}>{q}</div>
          </div>
          <div className={chatContainerStyle({ isMyChat: false })}>
            <div>
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
            </div>
          </div>

          <div>
            <div
              ref={containerRef1}
              className="mb-2 flex gap-6 overflow-x-hidden text-nowrap"
              role="button"
              tabIndex={0}
              onMouseDown={onDragStart1}
              onMouseLeave={onDragEnd1}
              onMouseMove={onDragMove1}
              onMouseUp={onDragEnd1}>
              <div className="flex items-center gap-6">
                <div className="text-violet-50">전문자료</div>
                {citations
                  .filter(citation => DOCS.some(docs => citation.includes(docs.url)))
                  .map(citation => (
                    <div
                      key={citation}
                      className="inline-flex items-center gap-8 rounded-14 border border-grayscale-30 bg-grayscale-10 px-3 py-1.5 text-grayscale-60">
                      <div className="line-clamp-1 underline">{citation}</div>
                    </div>
                  ))}
              </div>
            </div>
            <div
              ref={containerRef2}
              className="mb-2 flex gap-6 overflow-x-hidden text-nowrap"
              role="button"
              tabIndex={0}
              onMouseDown={onDragStart2}
              onMouseLeave={onDragEnd2}
              onMouseMove={onDragMove2}
              onMouseUp={onDragEnd2}>
              <div className="flex items-center gap-6">
                <div>일반출처</div>
                {citations
                  .filter(citation => DOCS.some(docs => citation.includes(docs.url)))
                  .map(citation => (
                    <div
                      key={citation}
                      className="inline-flex items-center gap-8 rounded-14 border border-grayscale-30 bg-grayscale-10 px-3 py-1.5 text-grayscale-60">
                      <div className="line-clamp-1 underline">{citation}</div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </Fragment>
      ))}
    </div>
  );
};

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
