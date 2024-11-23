import { useState } from 'react';

import { Button, Image } from '@/app/_components/common';
import { CreateMemoSection } from '@/app/memo/create/_components';

const MemoNoteRelative = () => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => setChecked(!checked);

  return (
    <CreateMemoSection title="이 메모와 관련있는 사람">
      <div className='className="flex gap-8" flex-col'>
        <div className="grid grid-cols-2 gap-8">
          <Button
            className="inline-flex items-center justify-center bg-grayscale-20 px-3 py-3 text-grayscale-60 body-sm-15-regular"
            onClick={handleCheckboxChange}>
            <Image alt="user image" containerClassName="w-5 h-5 rounded-max" src="/images/baby_mock.png" />
            <span>부모님 1</span>
          </Button>
          <Button
            className="inline-flex items-center justify-center bg-grayscale-20 px-3 py-3 text-grayscale-60 body-sm-15-regular"
            onClick={handleCheckboxChange}>
            <Image alt="user image" containerClassName="w-5 h-5 rounded-max" src="/images/baby_mock.png" />
            <span>부모님 1</span>
          </Button>
        </div>
      </div>
    </CreateMemoSection>
  );
};

export default MemoNoteRelative;
