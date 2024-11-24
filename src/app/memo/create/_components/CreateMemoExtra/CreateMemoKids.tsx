import { useState } from 'react';

import { Button, Checkbox, Image } from '@/app/_components/common';

import CreateMemoSection from '../CreateMemoSection';

const CreateMemoKids = () => {
  const [checked, setChecked] = useState<boolean[]>([false, false]);

  const handleCheckboxChange = (index: number) => (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setChecked(checked.map((check, idx) => (idx === index ? !check : check)));
  };

  return (
    <CreateMemoSection title="이 메모와 관련있는 사람" help>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-8">
          {kids.map(({ name }, i) => (
            <Button key={i} className="bg-grayscale-20 px-3 py-3 body-sm-15-regular" onClick={handleCheckboxChange(i)}>
              <span className="inline-flex w-full justify-between">
                <span className="inline-flex w-full items-center gap-6">
                  <Image alt="user image" containerClassName="w-5 h-5 rounded-max" src="/images/baby_mock.png" />
                  <span>{name}</span>
                </span>
                <Checkbox checked={checked[i]} onChange={() => {}} />
              </span>
            </Button>
          ))}
        </div>
      </div>
    </CreateMemoSection>
  );
};

const kids = [{ name: '아이1' }, { name: '아이2' }];

export default CreateMemoKids;
