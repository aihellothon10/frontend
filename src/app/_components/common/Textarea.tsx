'use client';

import { useRef } from 'react';

import { cn } from 'dotori-utils';

import { KEYBOARD } from '@/app/constants';
import { adjustTextareaHeight } from '@/app/utils';

const Textarea = ({
  value,
  onChange,
  placeholder,
  minRows = 1,
  maxRows,
  leftIcon,
  rightIcon,
  className,
}: TextareaProps) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleKeyDown: React.KeyboardEventHandler<HTMLTextAreaElement> = e => {
    if (e.key !== KEYBOARD.ENTER || !e.shiftKey) return;

    e.preventDefault();
    onChange(`${value}\n`);
  };

  const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = e => {
    onChange(e.target.value);
    adjustTextareaHeight<HTMLTextAreaElement>(textareaRef.current, maxRows);
  };

  return (
    <div className={textareaContainerStyle({ className })}>
      {leftIcon}
      <textarea
        ref={textareaRef}
        className="w-full resize-none text-grayscale-80"
        placeholder={placeholder}
        rows={minRows}
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      {rightIcon}
    </div>
  );
};

interface TextareaProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  maxRows: number;
  minRows?: number;
  search?: boolean;
  className?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const textareaContainerStyle = cn('inline-flex w-full items-center gap-6 rounded-14 px-4 text-grayscale-80');

export default Textarea;
