'use client';

import { useState } from 'react';

import { Checkbox, Image, Button } from '@/app/_components/common';

import CreateMemoSection from '../CreateMemoSection';

const CreateMemoConnection = () => {
  const [checked, setChecked] = useState<boolean[]>(parents.map(() => false));

  const handleCheckboxChange = (index: number) => (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setChecked(checked.map((check, idx) => (idx === index ? !check : check)));
  };

  // const handleAddPeopleClick = () => {
  //   setChecked([...checked, false]);
  // };

  return (
    <>
      <CreateMemoSection title="이 메모와 관련있는 사람" help>
        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-2 gap-8">
            {parents.map(({ name }, i) => (
              <Button
                key={i}
                className="bg-grayscale-20 px-3 py-3 body-sm-15-regular"
                onClick={handleCheckboxChange(i)}>
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
          {/* <Button className="text-grayscale-60" onClick={handleAddPeopleClick}>
            <span className="inline-flex items-center gap-8 body-sm-15-regular">
              <span>사람 더 보기</span>
              <span className="icon-sm">keyboard_arrow_down</span>
            </span>
          </Button> */}
        </div>
      </CreateMemoSection>
    </>
  );
};

const parents = [
  { name: '김아빠' },
  { name: '박엄마' },
  { name: '김삼촌' },
  { name: '박이모' },
  { name: '최할아버지' },
  { name: '왕할머니' },
];

export default CreateMemoConnection;
