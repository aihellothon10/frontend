'use client';

import { cn } from 'dotori-utils';

import { Button } from '@/app/_components/common';

import type { CoreFilters, KeyOfCoreFilters } from '../page';

const CoreMemo = ({ filters, onChange }: CoreMemoProps) => {
  const handleCheckedChange = (newFilter: KeyOfCoreFilters) => {
    const newFilters = { ...filters, [newFilter]: !filters[newFilter] };
    onChange(newFilters);
  };

  return (
    <div className="flex gap-8">
      {cores.map(({ label, id }) => (
        <Button key={id} className={buttonStyle({ checked: filters[id] })} onClick={() => handleCheckedChange(id)}>
          <span className="inline-flex items-center gap-6">
            <span className={buttonTextStyle({ checked: filters[id] })}>{label}</span>
            <span className={starIconStyle({ checked: filters[id] })}>star</span>
          </span>
        </Button>
      ))}
    </div>
  );
};

interface CoreMemoProps {
  filters: CoreFilters;
  onChange: (value: CoreFilters) => void;
}

const cores = [
  { label: '즐겨찾는 메모', id: 'liked' },
  { label: '숨겨진 메모', id: 'invisible' },
] as const;

const buttonStyle = cn('py-3', {
  variants: {
    checked: {
      true: 'bg-blue-50',
      false: 'bg-grayscale-20',
    },
  },
  defaultVariants: {
    checked: false,
  },
});

const buttonTextStyle = cn('body-sm-15-regular', {
  variants: {
    checked: {
      true: 'text-grayscale-10',
      false: 'text-grayscale-60',
    },
  },
  defaultVariants: {
    checked: false,
  },
});

const starIconStyle = cn('icon-xs', {
  variants: {
    checked: {
      true: 'text-grayscale-10',
      false: 'text-grayscale-50',
    },
  },
  defaultVariants: {
    checked: false,
  },
});

export default CoreMemo;
