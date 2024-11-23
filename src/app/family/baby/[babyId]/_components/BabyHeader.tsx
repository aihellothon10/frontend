'use client';

import { useRouter } from 'next/navigation';

import { Header } from '@/app/_components/common';

const BabyHeader = () => {
  const router = useRouter();

  return (
    <Header>
      <div className="flex w-full items-center justify-between bg-grayscale-10 px-6 py-4">
        <div className="flex items-center gap-16">
          <button className="icon-lg" onClick={() => router.back()}>
            arrow_back
          </button>
          <span className="body-md-17-medium">내 아이</span>
        </div>
        <div className="flex cursor-pointer items-center justify-center">
          <span className="icon-lg">more_vert</span>
        </div>
      </div>
    </Header>
  );
};

export default BabyHeader;
