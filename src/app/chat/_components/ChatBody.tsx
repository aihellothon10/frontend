import { cn } from 'dotori-utils';

import { Image } from '@/app/_components/common';

const ChatBody = ({ chats }: ChatBodyProps) => (
  <div className="flex flex-col gap-20 px-4">
    {chats.map((chat, index) => (
      <div key={index} className={chatContainerStyle({ isMyChat: true })}>
        <div key={index} className={chatStyle({ isMyChat: true })}>
          {chat}
        </div>
      </div>
    ))}
    {[
      '아이가 열이 많이 나는 상황에서는 다음과 같은 조치를 취하는 것이 중요합니. 체온 측정. 직장 체온: 38°C 이상, 구강 체온: 37.5°C 이상, 겨드랑이 체온: 37.2°C 이상이면 열로 간주합니다.',
    ].map((chat, index) => (
      <div key={index} className={chatContainerStyle({ isMyChat: false })}>
        <div>
          <button className="rounded-max bg-grayscale-10 p-2" type="submit">
            <Image alt="twinkle" className="" containerClassName="w-6 h-6" sizes="1.5rem" src="/images/twinkle2.svg" />
          </button>
        </div>
        <div className={chatStyle({ isMyChat: false })}>{chat}</div>
      </div>
    ))}
  </div>
);

interface ChatBodyProps {
  chats: string[];
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
