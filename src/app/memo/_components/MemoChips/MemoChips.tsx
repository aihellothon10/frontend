import { useState } from 'react';

import { useHorizontalScroll } from '@/app/hooks/common';

import MemoChip from './MemoChip';

const MemoChips = () => {
  const [filter, setFilter] = useState<Set<string>>(new Set());
  const { containerRef, onDragStart, onDragMove, onDragEnd } = useHorizontalScroll();

  const handleChipChange = (item: string) => {
    setFilter(prev => {
      const current = new Set(prev);

      if (current.has(item)) current.delete(item);
      else current.add(item);

      return current;
    });
  };

  return (
    <>
      <div
        ref={containerRef}
        className="mt-4 flex gap-6 overflow-x-hidden text-nowrap"
        role="button"
        tabIndex={0}
        onMouseDown={onDragStart}
        onMouseLeave={onDragEnd}
        onMouseMove={onDragMove}
        onMouseUp={onDragEnd}>
        {items.map(item => (
          <MemoChip key={item} filter={filter} item={item} onChange={handleChipChange} />
        ))}
      </div>
    </>
  );
};

const items = ['아이1', '아이2', '병원', '약', '교육1', '교육2'];

export default MemoChips;
