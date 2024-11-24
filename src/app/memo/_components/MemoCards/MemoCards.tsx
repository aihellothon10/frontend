import { MEMOS } from '@/app/constants/memos';

import MemoCard from './MemoCard';

const MemoCards = ({ filters }: MemoCardsProps) => {
  const filtered = filters.length === 0 ? MEMOS : MEMOS.filter(memo => memo.tags.some(tag => filters.includes(tag)));

  return (
    <div>
      {filtered.map(memo => (
        <MemoCard key={memo.memoId} {...memo} />
      ))}
    </div>
  );
};

interface MemoCardsProps {
  filters: string[];
}

export default MemoCards;
