'use client';

import { Image } from '@/app/_components/common';

import CreateMemoSection from '../CreateMemoSection';

const CreateMemoNote = () => (
  <CreateMemoSection title="내용 및 링크">
    <div className="flex flex-col gap-6 rounded-t-14 bg-grayscale-20 px-4 py-3 text-grayscale-50">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita aut voluptatibus, ipsa officia aperiam natus
      incidunt voluptatem quis quibusdam? Ut?
      <div>
        <span className="line-clamp-1 underline">https://academic.naver.com/article.naver?doc_id=79763546</span>
        <span className="line-clamp-1 underline">https://academic.naver.com/article.naver?doc_id=79763546</span>
        <span className="line-clamp-1 underline">https://academic.naver.com/article.naver?doc_id=79763546</span>
      </div>
    </div>
    <div className="flex gap-6">
      <div className="flex items-center gap-6">
        <Image alt="twinkle" containerClassName="w-4 h-4" sizes="1.5rem" src="/images/twinkle.svg" />
        <span className="text-nowrap text-blue-50 label-md-14-regular">요약 &nbsp;</span>
      </div>
      <div className="max-h-fit w-full rounded-b-14 bg-grayscale-20 bg-alert-memo-gradient px-4 py-3 text-grayscale-80">
        Lorem ipsum dolor s Lorem ipsum dolor s Lorem ipsum dolor s Lorem ipsum dolor s Lorem ipsum dolor s Lorem ipsum
        dolor s Lorem ipsum dolor s Lorem ipsum dolor s Lorem ipsum dolor s Lorem ipsum dolor s
      </div>
    </div>
  </CreateMemoSection>
);

export default CreateMemoNote;
