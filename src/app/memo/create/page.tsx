import { Suspense } from 'react';

import { CreateMemoContent, CreateMemoStepper } from './_components';
import CreateMemoHeader from './_components/CreateMemoHeader';
import Loading from './loading';

const CreateMemo = () => (
  <>
    <CreateMemoHeader />
    <div className="h-full flex-1 bg-grayscale-10">
      <Suspense fallback={<Loading />}>
        <CreateMemoStepper />
        <CreateMemoContent />
      </Suspense>
    </div>
  </>
);

export default CreateMemo;
