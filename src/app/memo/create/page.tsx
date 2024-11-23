'use client';

import { useState } from 'react';

import { CreateMemoContent, CreateMemoStepper } from './_components';
import CreateMemoHeader from './_components/CreateMemoHeader';
import Loading from './_components/Loading';

const CreateMemo = () => {
  const [loading, setLoading] = useState(false);

  const handleLoadingChange = (isLoading: boolean) => setLoading(isLoading);

  if (loading)
    return (
      <>
        <CreateMemoHeader />
        <Loading />
      </>
    );

  return (
    <>
      <CreateMemoHeader />
      <div className="h-full flex-1 bg-grayscale-10">
        <CreateMemoStepper />
        <CreateMemoContent onChange={handleLoadingChange} />
      </div>
    </>
  );
};

export default CreateMemo;
