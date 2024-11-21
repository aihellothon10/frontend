'use client';

import { AlertMemo, MemoCards, MemoHeader, MemoInput } from './_components';
import CoreMemo from './_components/CoreMemo';
import MemoChips from './_components/MemoChips/MemoChips';

const Memo = () => (
  <div className="bg-grayscale-20 px-4 pb-4">
    <MemoHeader />
    <MemoInput />
    <MemoChips />
    <div className="mt-4 rounded-12 bg-grayscale-10 p-3">
      <CoreMemo />
      <AlertMemo />
      <MemoCards />
    </div>
  </div>
);

export default Memo;
