'use client';

import { useRouter } from 'next/navigation';

import { Header } from '@/app/_components/common';
import { PATH } from '@/app/constants';

const MemoHeader = () => {
  const router = useRouter();

  return (
    <Header>
      <div className="flex w-full items-center justify-between px-6 py-4">
        <div className="flex items-center gap-16 bg-grayscale-10">
          <button className="icon-lg" onClick={() => router.push(PATH.MEMO)}>
            arrow_back
          </button>
          <span className="body-md-17-medium">페이지</span>
        </div>
        <div className="flex cursor-pointer items-center justify-center">
          <span className="icon-lg">more_vert</span>
        </div>
      </div>
    </Header>
  );
};

export default MemoHeader;
