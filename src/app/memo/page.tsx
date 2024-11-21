'use client';

import { useRouter } from 'next/navigation';

import { BottomNavigation, FloatingActionButton } from '@/app/_components/common';
import { PATH } from '@/app/constants';

import { MemoCards, MemoHeader, MemoInput } from './_components';
import CoreMemo from './_components/CoreMemo';
import MemoChips from './_components/MemoChips/MemoChips';

const Memo = () => {
  const router = useRouter();

  return (
    <>
      <MemoHeader />
      <div className="relative h-full px-4 pb-4">
        <MemoInput />
        <MemoChips />
        <div className="mt-4 rounded-12 bg-grayscale-10 p-3">
          <CoreMemo />
          <MemoCards />
        </div>
        <FloatingActionButton onClick={() => router.push(PATH.MEMO_CREATE)} />
      </div>
      <BottomNavigation />
    </>
  );
};

export default Memo;
