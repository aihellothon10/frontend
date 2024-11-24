'use client';

import { useState } from 'react';

import { cn } from 'dotori-utils';

import { Button, Image, Modal, Textarea } from '@/app/_components/common';
import { useDisClosure, useHorizontalScroll, useOutSideClick } from '@/app/hooks/common';

const ChatInput = ({ addChat }: ChatInputProps) => {
  const [form, setForm] = useState<{ text: string; links: string[] }>({
    text: '',
    links: [],
  });
  const [link, setLink] = useState('');
  const { isOpen, close, toggle } = useDisClosure();
  const formRef = useOutSideClick<HTMLFormElement>(close);
  const { isOpen: modalIsOpen, open: modalOpen, close: modalClose } = useDisClosure();
  const { containerRef, onDragStart, onDragMove, onDragEnd } = useHorizontalScroll();

  const handleValueChange = (newValue: string) => setForm({ ...form, text: newValue });

  const addLink = () => {
    setLink('');
    modalClose();
    setForm({ ...form, links: [...form.links, link] });
  };
  const cancelLink = () => {
    modalClose();
    setLink('');
  };
  const deleteLink = (targetDeletedLink: string) => {
    setForm({ ...form, links: form.links.filter(_link => _link !== targetDeletedLink) });
  };

  const handleModalOpen = () => {
    close();
    modalOpen();
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    handleValueChange('');
    addChat(form);
    setForm({ text: '', links: [] });
  };

  return (
    <>
      <form ref={formRef} className="flex flex-col gap-12" onSubmit={handleSubmit}>
        {isOpen && (
          <div className="grid grid-cols-2 gap-6">
            <Button className="rounded-12 py-3 text-grayscale-60 body-sm-15-regular" onClick={handleModalOpen}>
              <span>링크 추가</span>
              <span className="text-grayscale-60 icon-xs">link</span>
            </Button>
            <Button className="rounded-12 py-3 text-grayscale-60 body-sm-15-regular" onClick={() => {}}>
              <span>이미지 추가</span>
              <span className="text-grayscale-60 icon-xs">image</span>
            </Button>
          </div>
        )}

        <div className="rounded-[22px] bg-chat-border-gradient p-[2px]">
          <div className="rounded-20 bg-grayscale-10 p-3">
            {form.links.length > 0 && (
              <div
                ref={containerRef}
                className="mb-2 flex gap-6 overflow-x-hidden text-nowrap"
                role="button"
                tabIndex={0}
                onMouseDown={onDragStart}
                onMouseLeave={onDragEnd}
                onMouseMove={onDragMove}
                onMouseUp={onDragEnd}>
                {form.links.map(_link => (
                  <div
                    key={_link}
                    className="inline-flex items-center gap-8 rounded-14 border border-grayscale-30 bg-grayscale-10 px-3 py-1.5 text-grayscale-60">
                    <div className="line-clamp-1 underline">{_link}</div>
                    <button className="text-grayscale-50 icon-sm" onClick={() => deleteLink(_link)}>
                      close
                    </button>
                  </div>
                ))}
              </div>
            )}

            <Textarea
              className="p-0"
              maxRows={2}
              placeholder="아이가 열이 많이 나요"
              value={form.text}
              leftIcon={
                <button className={actionButtonStyle({ isOpen })} onClick={toggle}>
                  add
                </button>
              }
              rightIcon={
                <button className="rounded-max border-2 border-blue-50 p-2" type="submit">
                  <Image
                    alt="twinkle"
                    className=""
                    containerClassName="w-6 h-6"
                    sizes="1.5rem"
                    src="/images/twinkle2.svg"
                  />
                </button>
              }
              onChange={handleValueChange}
            />
          </div>
        </div>
      </form>
      <Modal close={modalClose} isOpen={modalIsOpen}>
        <div className="p-2">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-grayscale-80 title-md-22-extrabold">링크 추가</h3>
            <span className="text-grayscale-50 icon-sm">link</span>
          </div>
        </div>

        <Textarea
          className="mb-4 bg-grayscale-20 p-3"
          maxRows={1}
          minRows={1}
          placeholder="링크를 입력해주세요."
          value={link}
          onChange={setLink}
        />
        <div className="flex gap-8">
          <Button className="py-3" color="gray" onClick={cancelLink}>
            취소
          </Button>
          <Button className="py-3" color="blue" onClick={addLink}>
            추가
          </Button>
        </div>
      </Modal>
    </>
  );
};

interface ChatInputProps {
  addChat: (value: { text: string; links: string[] }) => void;
}
const actionButtonStyle = cn('mr-1.5 rounded-max bg-grayscale-20 p-2 text-grayscale-50 icon-md transition-all', {
  variants: {
    isOpen: {
      true: 'rotate-45',
      false: 'rotate-0',
    },
  },
});

export default ChatInput;
