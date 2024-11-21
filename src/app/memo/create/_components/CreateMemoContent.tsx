import { useMemoStepStore } from '@/app/store';

import CreateMemoDraft from './CreateMemoDraft/CreateMemoDraft';
import CreateMemoSetting from './CreateMemoSetting/CreateMemoSetting';

const CreateMemoContent = () => {
  const { step } = useMemoStepStore();

  return (
    <>
      {step === 1 && <CreateMemoDraft />}
      {step === 2 && <CreateMemoSetting />}
    </>
  );
};

export default CreateMemoContent;
