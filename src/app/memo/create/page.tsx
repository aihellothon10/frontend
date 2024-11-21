'use client';

import { CreateMemoStepper } from './_components';
import CreateMemoHeader from './_components/CreateMemoHeader';

const CreateMemo = () => {
  console.log();

  return (
    <div className="bg-grayscale-10">
      <CreateMemoHeader />
      <CreateMemoStepper />
    </div>
  );
};

export default CreateMemo;
