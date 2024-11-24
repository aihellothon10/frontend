'use client';

import { Button } from '@/app/_components/common';

const CoreMemo = () => (
  <div className="flex gap-8">
    {cores.map(({ label, id, icon }) => (
      <Button key={id} className="py-3" onClick={() => {}}>
        <span className="inline-flex items-center gap-6">
          <span className="text-grayscale-60 body-sm-15-regular">{label}</span>
          <span className="text-grayscale-50 icon-xs">{icon}</span>
        </span>
      </Button>
    ))}
  </div>
);

const cores = [
  { label: '즐겨찾는 메모', id: 'liked', icon: 'star' },
  { label: '숨겨진 메모', id: 'invisible', icon: 'lock' },
] as const;

export default CoreMemo;
