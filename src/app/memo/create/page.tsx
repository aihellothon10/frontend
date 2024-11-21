'use client';

import { CreateMemoContent, CreateMemoStepper } from './_components';
import CreateMemoHeader from './_components/CreateMemoHeader';

const CreateMemo = () => (
  <>
    <CreateMemoHeader />
    <div className="bg-grayscale-10">
      <CreateMemoStepper />
      <CreateMemoContent />
    </div>
  </>
);

export default CreateMemo;
