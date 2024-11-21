import { useMemoStepStore } from '@/app/store';

import CreateMemoDraft from './CreateMemoDraft/CreateMemoDraft';

const CreateMemoContent = () => {
  const { step } = useMemoStepStore();

  return <>{step === 1 && <CreateMemoDraft />}</>;
};

export default CreateMemoContent;
