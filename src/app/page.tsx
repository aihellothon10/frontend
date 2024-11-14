'use client';

import { useRef, useState } from 'react';

import { Button } from '@mui/base';
import { Input } from '@mui/base/Input';

const Home = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const submitButtonRef = useRef<HTMLButtonElement | null>(null);
  const [state, setState] = useState('');

  const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    const { value } = e.target;

    setState(value);
    handleResizeHeight();
  };

  const handleResizeHeight = () => {
    if (!inputRef.current) return;

    inputRef.current.style.height = 'auto';
    inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = e => {
    const enterKey = e.key === 'Enter';
    const lineBreak = (enterKey && e.shiftKey) || (enterKey && e.ctrlKey);
    const isSubmit = enterKey && !lineBreak;

    if (isSubmit) {
      e.preventDefault();

      submitButtonRef.current?.click();
    }
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
  };

  return (
    <div className="h-svh bg-gray-100">
      <form className="m-auto flex h-full flex-col justify-center" onSubmit={handleSubmit}>
        <div className="text-center">https://www.perplexity.ai 의 API를 사용</div>
        <Input
          aria-label="Demo input"
          className="bg-white px-10 font-wanted-sans"
          placeholder="사용자의 질문 내용"
          rows={1}
          value={state}
          slotProps={{
            root: () => ({
              className: 'flex flex-col items-center',
            }),
            input: () => ({
              className: 'w-full py-2 px-1 resize-none',
              ref: inputRef,
            }),
          }}
          multiline
          onChange={handleOnChange}
          onKeyDown={handleKeyDown}
        />
        <Button slotProps={{ root: () => ({ ref: submitButtonRef }) }} type="submit">
          요청
        </Button>
      </form>
    </div>
  );
};

export default Home;
