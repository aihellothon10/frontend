'use client';

import { useState } from 'react';

import { Textarea } from '@/app/_components/common';

import CreateMemoSection from '../CreateMemoSection';

const CreateMemoTextarea = () => {
  const [value, setValue] = useState('');
  const handleChangeValue = (newValue: string) => setValue(newValue);

  return (
    <CreateMemoSection title="메모 내용">
      <Textarea
        className="bg-grayscale-20"
        maxRows={9999}
        minRows={6}
        placeholder="메모 내용을 입력해주세요."
        value={value}
        onChange={handleChangeValue}
      />
    </CreateMemoSection>
  );
};

export default CreateMemoTextarea;
