'use client';

import { MemoWarningCard } from '@/app/memo/_components';

import MemoNoteBody from './MemoNoteBody';
import MemoNoteHeader from './MemoNoteHeader';

const MemoNotes = () => (
  <>
    <div className="flex flex-col gap-20">
      <MemoNoteHeader />
      <MemoWarningCard>
        분석 결과, 해당 메모에는 <span className="text-red-50">잘못된 정보</span>와{' '}
        <span className="text-red-50">유해한 정보</span>가 포함되어 있을 수 있습니다.
      </MemoWarningCard>
      <MemoNoteBody />
    </div>
  </>
);

export default MemoNotes;
