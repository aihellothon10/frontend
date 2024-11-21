'use client';

import { useRouter } from 'next/navigation';

import { Header } from '@/app/_components/common';

const CreateMemoHeader = () => {
  const router = useRouter();

  return (
    <Header>
      <div className="flex items-center gap-16 px-6 py-4">
        <button className="icon-lg" onClick={() => router.back()}>
          arrow_back
        </button>
        <span className="body-md-17-medium">메모 작성</span>
      </div>
    </Header>
  );
};

export default CreateMemoHeader;
