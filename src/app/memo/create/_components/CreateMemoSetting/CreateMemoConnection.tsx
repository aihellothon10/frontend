'use client';

import { useState } from 'react';

import { Checkbox, Image, Button } from '@/app/_components/common';

import CreateMemoSection from '../CreateMemoSection';

const CreateMemoConnection = () => {
  const [checked, setChecked] = useState<boolean[]>([false, false]);

  const handleCheckboxChange = (index: number) => (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setChecked(checked.map((check, idx) => (idx === index ? !check : check)));
  };

  const handleAddPeopleClick = () => {
    setChecked([...checked, false]);
  };

  return (
    <>
      <CreateMemoSection title="이 메모와 관련있는 사람" help>
        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-2 gap-8">
            {checked.map((check, i) => (
              <Button
                key={i}
                className="bg-grayscale-20 px-3 py-3 body-sm-15-regular"
                onClick={handleCheckboxChange(i)}>
                <span className="inline-flex w-full justify-between">
                  <span className="inline-flex w-full items-center gap-6">
                    <Image alt="user image" containerClassName="w-5 h-5 rounded-max" src="/images/baby_mock.png" />
                    <span>부모님1</span>
                  </span>
                  <Checkbox checked={check} onChange={() => {}} />
                </span>
              </Button>
            ))}
          </div>
          <Button className="text-grayscale-60" onClick={handleAddPeopleClick}>
            <span className="inline-flex items-center gap-8 body-sm-15-regular">
              <span>사람 더 보기</span>
              <span className="icon-sm">keyboard_arrow_down</span>
            </span>
          </Button>
        </div>
      </CreateMemoSection>
    </>
  );
};

export default CreateMemoConnection;
