import { useRef } from 'react';

import { KEYBOARD } from '@/app/constants';
import { adjustTextareaHeight } from '@/app/utils';

const Textarea = ({ value, onChange, placeholder, minRows = 1, maxRows, search }: TextareaProps) => {
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
    <div className="inline-flex w-full items-center gap-6 rounded-14 px-4">
      <textarea
        ref={textareaRef}
        className="w-full resize-none rounded-14 py-3"
        placeholder={placeholder}
        rows={minRows}
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      {search && <span className="icon-sm">search</span>}
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
}

export default Textarea;
