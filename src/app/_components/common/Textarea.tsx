'use client';

import { useRef } from 'react';

import { cn } from 'dotori-utils';

import { KEYBOARD } from '@/app/constants';
import { adjustTextareaHeight } from '@/app/utils';

const Textarea = ({ value, onChange, placeholder, minRows = 1, maxRows, icon, className }: TextareaProps) => {
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
      <textarea
        ref={textareaRef}
        className="w-full resize-none rounded-14 py-3 text-grayscale-80"
        placeholder={placeholder}
        rows={minRows}
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      {icon}
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
  icon?: React.ReactNode;
}

const textareaContainerStyle = cn('inline-flex w-full items-center gap-6 rounded-14 px-4 text-grayscale-80');

export default Textarea;
