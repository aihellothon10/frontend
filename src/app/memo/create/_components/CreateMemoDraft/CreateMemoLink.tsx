import { useState } from 'react';

import { Button, Textarea } from '@/app/_components/common';

import CreateMemoSection from '../CreateMemoSection';

const CreateMemoLink = () => {
  const [linkValues, setLinkValues] = useState<string[]>([]);
  const handleChangeLinkValue = ({ index, newLinkValue }: { index: number; newLinkValue: string }) =>
    setLinkValues(linkValues.map((linkValue, i) => (i === index ? newLinkValue : linkValue)));
  const handleAddLinkValue = () => setLinkValues([...linkValues, '']);

  return (
    <CreateMemoSection title="링크" help>
      {linkValues.map((linkValue, index) => (
        <Textarea
          key={index}
          className="bg-grayscale-20"
          maxRows={3}
          placeholder="링크를 입력해주세요"
          value={linkValue}
          icon={
            <button
              className="text-grayscale-50 icon-sm"
              onClick={() => handleChangeLinkValue({ index, newLinkValue: '' })}>
              close
            </button>
          }
          onChange={(newLinkValue: string) => handleChangeLinkValue({ index, newLinkValue })}
        />
      ))}
      <Button className="text-grayscale-60 body-sm-15-regular" onClick={handleAddLinkValue}>
        <span>링크 추가하기</span>
        <span className="icon-sm">add</span>
      </Button>
    </CreateMemoSection>
  );
};

export default CreateMemoLink;
