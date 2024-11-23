'use client';

import { MemoWarningCard } from '@/app/memo/_components';

import MemoNoteBody from './MemoNoteBody';
import MemoNoteHeader from './MemoNoteHeader';

const MemoNotes = () => (
  <>
    <div className="flex flex-col gap-20">
      <MemoNoteHeader />
      <MemoWarningCard />
      <MemoNoteBody />
    </div>
  </>
);

export default MemoNotes;
