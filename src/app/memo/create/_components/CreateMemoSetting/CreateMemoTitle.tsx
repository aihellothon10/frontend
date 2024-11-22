import { useState } from 'react';

import { Textarea } from '@/app/_components/common';

import CreateMemoSection from '../CreateMemoSection';

const CreateMemoTitle = () => {
  const [title, setTitle] = useState('생성된 제목');

  const handleTitleChange = (newTitle: string) => {
    setTitle(newTitle);
  };

  return (
    <CreateMemoSection title="생성된 제목">
      <Textarea
        className="bg-grayscale-20 bg-alert-memo-gradient body-sm-15-regular"
        maxRows={5}
        value={title}
        onChange={handleTitleChange}
      />
    </CreateMemoSection>
  );
};

export default CreateMemoTitle;
