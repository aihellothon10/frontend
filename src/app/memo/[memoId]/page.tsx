'use client';

import { Divider, Image } from '@/app/_components/common';

import { MemoHeader, MemoNote, MemoNoteRelative, MemoReference } from './_components';
// import MemoBottomFooter from './_components/MemoBottomFooter';

const Memo = () => (
  <>
    <MemoHeader />
    <div className="flex h-full flex-1 flex-col gap-24 px-5 py-3">
      <MemoNote />
      <Divider />
      <div className="flex items-center justify-between text-grayscale-60 label-md-14-regular">
        <div className="flex items-center gap-8">
          <Image
            alt="user image"
            containerClassName="w-5 h-5 rounded-max border-grayscale-40"
            src="/images/baby_mock.png"
          />
          <span>부모님1</span>
          <span className="">&#183;</span>
          <span>어제 2:24</span>
        </div>
        <div className="flex items-center gap-6">
          <span>질문</span>
          <span className="">&#183;</span>
          <span>숨겨진 내용</span>
        </div>
      </div>
      <Divider />
      <MemoReference />
      <MemoNoteRelative />
    </div>
    {/* <MemoBottomFooter /> */}
  </>
);

export default Memo;
