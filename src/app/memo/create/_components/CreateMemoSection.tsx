'use client';

import { Modal } from '@/app/_components/common';
import { useDisClosure } from '@/app/hooks/common';

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
          <div className="flex gap-6">
            <div className="text-grayscale-60">{title}</div>
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

export default CreateMemoSection;
