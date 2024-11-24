'use client';

import { Header } from '@/app/_components/common';

const ChatHeader = () => (
  <Header>
    <div className="flex w-full items-center justify-between bg-grayscale-20 px-6 py-4">
      <div className="flex items-center gap-6">
        <button className="icon-fill icon-lg" onClick={() => {}}>
          contact_support
        </button>
        <span className="title-md-22-extrabold">페이지</span>
      </div>
      <div className="flex cursor-pointer items-center justify-center">
        <span className="icon-lg">more_vert</span>
      </div>
    </div>
  </Header>
);

export default ChatHeader;
