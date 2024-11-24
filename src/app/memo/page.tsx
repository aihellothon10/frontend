'use client';

import { useState } from 'react';

// import { useQuery } from '@tanstack/react-query';
// import axios from 'axios';
import { useRouter } from 'next/navigation';

import { BottomNavigation, FloatingActionButton } from '@/app/_components/common';
import { PATH } from '@/app/constants';
import { useMemoStepStore } from '@/app/store';

import { MemoCards, MemoHeader, MemoInput, CoreMemo } from './_components';
import MemoChips from './_components/MemoChips/MemoChips';

// const queryFn = async () => {
//   const url = `${process.env.NEXT_PUBLIC_SAFE_CHILD_BASE_URL}/api/memos`;
//   const { data } = await axios({
//     url,
//     method: 'GET',
//   });
//   console.log(data);
//   return data;
// };

const Memo = () => {
  // const { data } = useQuery({ queryKey: QUERY_KEYS.MEMOS, queryFn });
  const [filters, setFilters] = useState<Set<string>>(new Set());
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

  return (
    <>
      <MemoHeader />
      <div className="relative h-full flex-1 bg-grayscale-20 px-4 pb-4">
        <MemoInput />
        <MemoChips onChange={handleFilterChange} />
        <div className="mt-4 rounded-20 bg-grayscale-10 p-3">
          <CoreMemo />
          <MemoCards filters={[...filters]} />
        </div>
        <FloatingActionButton color="blue" onClick={handleAddMemoClick} />
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
