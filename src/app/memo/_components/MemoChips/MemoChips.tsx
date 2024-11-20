import { useCallback, useRef, useState } from 'react';

import MemoChip from './MemoChip';

const MemoChips = () => {
  const [filter, setFilter] = useState<Set<string>>(new Set());

  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [totalX, setTotalX] = useState(0);

  const preventSideEffect = useCallback((e: Event) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const onDragStart: React.MouseEventHandler<HTMLDivElement> = e => {
    preventSideEffect(e.nativeEvent);

    setIsDragging(true);
    const x = e.clientX;
    setStartX(x);
    if (containerRef.current && 'scrollLeft' in containerRef.current) setTotalX(x + containerRef.current.scrollLeft);
  };
  const onDragMove: React.MouseEventHandler<HTMLDivElement> = e => {
    preventSideEffect(e.nativeEvent);

    if (!isDragging) return;

    const scrollLeft = totalX - e.clientX;

    if (containerRef.current && 'scrollLeft' in containerRef.current) containerRef.current.scrollLeft = scrollLeft;
  };
  const onDragEnd: React.MouseEventHandler<HTMLDivElement> = e => {
    if (!isDragging) return;
    if (!containerRef.current) return;

    const endX = e.clientX;
    const dragDiff = Math.abs(startX - endX);

    if (dragDiff > 10) preventSideEffect(e.nativeEvent);

    setIsDragging(false);
  };

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
