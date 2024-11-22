'use client';

import Image from 'next/image';

import CreateMemoSection from '../CreateMemoSection';

const CreateMemoNote = () => (
  <CreateMemoSection title="내용 및 요약">
    <div className="rounded-t-14 bg-grayscale-20 px-4 py-3 text-grayscale-50">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita aut voluptatibus, ipsa officia aperiam natus
      incidunt voluptatem quis quibusdam? Ut?
    </div>
    <div className="flex gap-6">
      <div className="flex flex-col items-start gap-6">
        <span className="text-nowrap text-grayscale-60 label-md-14-regular">요약</span>
        {/* 이거 너무 어려워요....ㅜㅠ */}
        <Image alt="home" height={100} src="/images/round_connect.svg" width={24} />
      </div>
      <div className="max-h-fit w-full rounded-b-14 bg-grayscale-20 bg-alert-memo-gradient px-4 py-3 text-grayscale-80">
        Lorem ipsum dolor s
      </div>
    </div>
  </CreateMemoSection>
);

export default CreateMemoNote;
