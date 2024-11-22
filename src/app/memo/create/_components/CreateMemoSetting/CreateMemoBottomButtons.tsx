'use client';

import { useEffect } from 'react';

import { usePathname, useRouter } from 'next/navigation';

import { Button, Footer } from '@/app/_components/common';
import { PATH } from '@/app/constants';
import { useMemoStepStore } from '@/app/store';
import { sleep } from '@/app/utils';

const CreateMemoBottomButtons = () => {
  const { resetStep } = useMemoStepStore();
  const router = useRouter();
  const pathname = usePathname();
  const memoItem = `${PATH.MEMO}/1`;

  const handleInvisibleMemoSaveClick = async () => {
    await sleep(1000);
    router.push(memoItem);
  };

  const handleVisibleMemoSaveClick = async () => {
    await sleep(1000);
    router.push(memoItem);
  };

  useEffect(() => {
    if (pathname !== PATH.MEMO_CREATE) resetStep();
  }, [pathname, resetStep]);

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
