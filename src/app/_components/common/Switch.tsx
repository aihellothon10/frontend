'use client';

import { cn } from 'dotori-utils';

import Button from './Button';

const Switch = ({ items, currentId, onClick }: SwitchProps) => (
  <div className="flex h-12.5 justify-center rounded-14 bg-grayscale-30 p-1.5">
    {items.map(({ id, label }) => (
      <Button key={id} className={switchBoxStyle({ current: currentId === id })} onClick={() => onClick({ id, label })}>
        {label}
      </Button>
    ))}
  </div>
);

interface SwitchProps {
  items: { label: string; id: string; [index: string]: string }[];
  onClick: ({ label, id }: { label: string; id: string }) => void;
  currentId: string;
}

const switchBoxStyle = cn(
  'inline-flex flex-1 cursor-pointer items-center justify-center rounded-8 body-sm-15-regular',
  {
    variants: {
      current: {
        true: 'bg-grayscale-10',
        false: 'bg-inherit text-grayscale-60',
      },
    },
    defaultVariants: {
      current: false,
    },
  },
);

export default Switch;
