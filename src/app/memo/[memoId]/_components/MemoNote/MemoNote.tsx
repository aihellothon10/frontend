'use client';

import MemoNoteBody from './MemoNoteBody';
import MemoNoteFooter from './MemoNoteFooter';
import MemoNoteHeader from './MemoNoteHeader';

const MemoNotes = () => (
  <div className="px-5 py-3">
    <MemoNoteHeader />
    <MemoNoteBody />
    <MemoNoteFooter />
  </div>
);

export default MemoNotes;
