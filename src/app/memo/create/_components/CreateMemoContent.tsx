'use client';

import { useMemoStepStore } from '@/app/store';

import CreateMemoDraft from './CreateMemoDraft/CreateMemoDraft';
import CreateMemoSetting from './CreateMemoSetting/CreateMemoSetting';

const CreateMemoContent = ({ onChange }: CreateMemoContentProps) => {
  const { step } = useMemoStepStore();

  return (
    <>
      {step === 1 && <CreateMemoDraft onChange={onChange} />}
      {step === 2 && <CreateMemoSetting />}
    </>
  );
};

interface CreateMemoContentProps {
  onChange: (isLoading: boolean) => void;
}

export default CreateMemoContent;
