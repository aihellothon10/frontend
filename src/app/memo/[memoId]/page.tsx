'use client';

import { Divider } from '@/app/_components/common';

import { MemoHeader, MemoNote, MemoNoteRelative, MemoReference } from './_components';
import MemoBottomFooter from './_components/MemoBottomFooter';

const Memo = () => (
  <>
    <MemoHeader />
    <div className="flex h-full flex-1 flex-col gap-24 px-5 py-3">
      <MemoNote />
      <Divider />
      <MemoReference />
      <MemoNoteRelative />
    </div>
    <MemoBottomFooter />
  </>
);

export default Memo;
