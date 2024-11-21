import { useRouter } from 'next/navigation';

import { Button, Footer } from '@/app/_components/common';
import { PATH } from '@/app/constants';

const CreateMemoBottomButtons = () => {
  const router = useRouter();
  const memoItem = `${PATH.MEMO}/1`;

  return (
    <Footer>
      <div className="flex w-full gap-8">
        <Button className="body-sm-15-regular" color="gray" onClick={() => router.push(memoItem)}>
          숨긴 메모로 저장
        </Button>
        <Button className="body-sm-15-regular" color="blue" onClick={() => router.push(memoItem)}>
          저장
        </Button>
      </div>
    </Footer>
  );
};

export default CreateMemoBottomButtons;
