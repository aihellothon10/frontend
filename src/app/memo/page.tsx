'use client';

import { useRouter } from 'next/navigation';

import { BottomNavigation, FloatingActionButton } from '@/app/_components/common';
import { PATH } from '@/app/constants';
import { useMemoStepStore } from '@/app/store';

import { MemoCards, MemoHeader, MemoInput } from './_components';
import CoreMemo from './_components/CoreMemo';
import MemoChips from './_components/MemoChips/MemoChips';

const Memo = () => {
  const router = useRouter();
  const { resetStep } = useMemoStepStore();

  const handleAddMemoClick = () => {
    router.push(PATH.MEMO_CREATE);
    resetStep();
  };

  return (
    <>
      <MemoHeader />
      <div className="relative h-full bg-grayscale-20 px-4 pb-4">
        <MemoInput />
        <MemoChips />
        <div className="mt-4 rounded-20 bg-grayscale-10 p-3">
          <CoreMemo />
          <MemoCards />
        </div>
        <FloatingActionButton onClick={handleAddMemoClick} />
      </div>
      <BottomNavigation />
    </>
  );
};

export default Memo;
