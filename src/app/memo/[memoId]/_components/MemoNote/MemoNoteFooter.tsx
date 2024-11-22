import { useState } from 'react';

import { Button, Image } from '@/app/_components/common';

const MemoNoteFooter = () => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => setChecked(!checked);

  return (
    <div className="flex flex-col gap-8">
      <div>이 메모와 관련있는 사람</div>
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
  );
};

export default MemoNoteFooter;
