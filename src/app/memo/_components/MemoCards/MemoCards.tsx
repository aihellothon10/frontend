import { MEMOS } from '@/app/constants/memos';

import MemoCard from './MemoCard';

const MemoCards = ({ filters }: MemoCardsProps) => {
  console.log(filters);
  const filtered = filters.length === 0 ? MEMOS : MEMOS.filter(memo => memo.tags.some(tag => filters.includes(tag)));

  console.log(filtered.length);

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
