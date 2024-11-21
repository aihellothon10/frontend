'use client';

import { MemoCards, MemoHeader, MemoInput } from './_components';
import CoreMemo from './_components/CoreMemo';
import MemoChips from './_components/MemoChips/MemoChips';

const Memo = () => (
  <div className="h-full px-4 pb-4">
    <MemoHeader />
    <MemoInput />
    <MemoChips />
    <div className="mt-4 rounded-12 bg-grayscale-10 p-3">
      <CoreMemo />
      <MemoCards />
    </div>
  </div>
);

export default Memo;
