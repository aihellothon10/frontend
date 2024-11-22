'use client';

import { useRouter } from 'next/navigation';

import { Button, Footer } from '@/app/_components/common';
import { PATH } from '@/app/constants';
import { useMemoStepStore } from '@/app/store';

const CreateMemoBottomButtons = () => {
  const { resetStep } = useMemoStepStore();
  const router = useRouter();
  const memoItem = `${PATH.MEMO}/1`;

  const handleInvisibleMemoSaveClick = () => {
    router.push(memoItem);
  };

  const handleVisibleMemoSaveClick = () => {
    router.push(memoItem);
    resetStep();
  };

  return (
    <Footer>
      <div className="flex w-full gap-8">
        <Button className="body-sm-15-regular" color="gray" onClick={handleInvisibleMemoSaveClick}>
          숨긴 메모로 저장
        </Button>
        <Button className="body-sm-15-regular" color="blue" onClick={handleVisibleMemoSaveClick}>
          저장
        </Button>
      </div>
    </Footer>
  );
};

export default CreateMemoBottomButtons;
