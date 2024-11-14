'use client';

import { useRef, useState } from 'react';

import { Button } from '@mui/base';
import { Input } from '@mui/base/Input';

import { eliceHelpyVRouteInstance } from '@/service/elice/chatRoute';

import type { HelpyVResponse } from '@/app/types/response';

function convertUrlsToLinks(text: string) {
  const urlRegex = /(http:\/\/|https:\/\/)([^\s]+)/g;
  return text.replace(urlRegex, url => `<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`);
}

const Home = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const submitButtonRef = useRef<HTMLButtonElement | null>(null);
  const [question, setQuestion] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [answer, setAnswer] = useState('');

  const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    const { value } = e.target;

    setQuestion(value);
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

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault();
    if (inputRef.current) setQuestion('');
    handleResizeHeight();

    try {
      setIsLoading(true);

      const { data } = await eliceHelpyVRouteInstance<HelpyVResponse>({ method: 'POST', data: { question } });
      const { content } = data.choices[0].message;

      console.log(content);
      setAnswer(content);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-svh bg-gray-100">
      <div className="m-auto flex h-full flex-col justify-center px-5">
        <div className="text-center">엘리스의 helpy-v API를 사용</div>
        <form onSubmit={handleSubmit}>
          <div className="flex">
            <Input
              aria-label="Demo input"
              className="flex-1 bg-white px-2 py-1 font-wanted-sans"
              placeholder="사용자의 질문 내용"
              rows={1}
              value={question}
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
            <Button
              disabled={isLoading}
              type="submit"
              slotProps={{
                root: state => ({ ref: submitButtonRef, className: state.disabled ? 'bg-red-100' : 'bg-gray-200' }),
              }}>
              요청
            </Button>
          </div>
        </form>
        <div className="bg-gray-0">
          <p>질문에 대한 답</p>
          <div className="p-3" dangerouslySetInnerHTML={{ __html: convertUrlsToLinks(answer) }}></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
