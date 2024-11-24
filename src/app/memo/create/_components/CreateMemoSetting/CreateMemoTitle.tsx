'use client';

import { useState } from 'react';

import { Image, Modal, Textarea } from '@/app/_components/common';
import { useDisClosure } from '@/app/hooks/common';

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

const CreateMemoSection = ({
  title,
  help,
  link,
  children,
  helpDescription,
  linkDescription,
}: CreateMemoSectionProps) => {
  const { isOpen, open, close } = useDisClosure();

  return (
    <>
      <div className="flex flex-col gap-8 label-md-14-regular">
        <div className="flex justify-between">
          <div className="flex items-center gap-6">
            <Image alt="twinkle" containerClassName="w-4 h-4" sizes="1.5rem" src="/images/twinkle.svg" />
            <div className="text-blue-50">{title}</div>
            {help && (
              <button className="text-grayscale-50 icon-xs" onClick={open}>
                help
              </button>
            )}
          </div>
          {link && (
            <button className="cursor-pointer text-blue-50 underline" onClick={open}>
              {link}
            </button>
          )}
        </div>
        {children}
      </div>
      {helpDescription && (
        <Modal close={close} isOpen={isOpen}>
          {helpDescription({ isOpen, open, close })}
        </Modal>
      )}
      {linkDescription && (
        <Modal close={close} isOpen={isOpen}>
          {linkDescription({ isOpen, open, close })}
        </Modal>
      )}
    </>
  );
};

type UseDisclosure = (params: { isOpen: boolean; open: () => void; close: () => void }) => React.ReactNode;

interface CreateMemoSectionProps {
  title: string;
  help?: boolean;
  helpDescription?: UseDisclosure;
  link?: string;
  linkDescription?: UseDisclosure;
  children: React.ReactNode;
}
