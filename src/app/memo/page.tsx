'use client';

import { useState } from 'react';

import { useRouter } from 'next/navigation';

import { BottomNavigation, FloatingActionButton } from '@/app/_components/common';
import { PATH } from '@/app/constants';
import { useMemoStepStore } from '@/app/store';

import { MemoCards, MemoHeader, MemoInput } from './_components';
import CoreMemo from './_components/CoreMemo';
import MemoChips from './_components/MemoChips/MemoChips';

const Memo = () => {
  const [filters, setFilters] = useState<Set<string>>(new Set());
  const [coreFilters, setCoreFilters] = useState(defaultCoreFilters);
  const router = useRouter();
  const { resetStep } = useMemoStepStore();

  const handleAddMemoClick = () => {
    router.push(PATH.MEMO_CREATE);
    resetStep();
  };

  const handleFilterChange = (newFilter: string) => {
    setFilters(prev => {
      const set = new Set(prev);

      if (set.has(newFilter)) set.delete(newFilter);
      else set.add(newFilter);

      return set;
    });
  };

  const handleCoreFilterChange = (newCoreFilters: CoreFilters) => {
    console.log(newCoreFilters);
    setCoreFilters(newCoreFilters);
  };

  return (
    <>
      <MemoHeader />
      <div className="relative h-full flex-1 bg-grayscale-20 px-4 pb-4">
        <MemoInput />
        <MemoChips onChange={handleFilterChange} />
        <div className="mt-4 rounded-20 bg-grayscale-10 p-3">
          <CoreMemo filters={coreFilters} onChange={handleCoreFilterChange} />
          <MemoCards coreFilters={coreFilters} filters={[...filters]} />
        </div>
        <FloatingActionButton onClick={handleAddMemoClick} />
      </div>
      <BottomNavigation />
    </>
  );
};

export type CoreFilters = typeof defaultCoreFilters;
export type KeyOfCoreFilters = keyof CoreFilters;

const defaultCoreFilters = {
  liked: false,
  invisible: false,
} as const;

export default Memo;
