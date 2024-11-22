import { CoreFilters } from '../../page';

import MemoCard from './MemoCard';

const MemoCards = ({ filters, coreFilters }: MemoCardsProps) => {
  const filtered = filters.length === 0 ? cards : cards.filter(card => card.tags.some(tag => filters.includes(tag)));

  const coreFiltered = filtered.filter(
    card => (coreFilters.liked || !card.liked) && (coreFilters.invisible || !card.invisible),
  );

  // filtered.filter(card => {
  //   // const {liked, invisible} = card;
  //   coreFilters.liked === card.like
  // })
  // const coreFiltered = filtered.filter(card => {

  // })

  return (
    <div>
      {coreFiltered.map(({ label, isError, liked }) => (
        <MemoCard key={label} isError={isError} liked={liked} />
      ))}
    </div>
  );
};

interface MemoCardsProps {
  filters: string[];
  coreFilters: CoreFilters;
}

const cards = [
  { label: '목데이터', isError: true, liked: false, invisible: false, tags: ['아이1'] },
  { label: '테스트', isError: false, liked: false, invisible: false, tags: ['아이2', '아이1'] },
  { label: '입니다', isError: false, liked: false, invisible: true, tags: [] },
  { label: '.', isError: true, liked: true, invisible: false, tags: ['병원'] },
  { label: '1', isError: true, liked: true, invisible: true, tags: ['약', '아이1'] },
  { label: '2', isError: true, liked: true, invisible: false, tags: ['교육1'] },
  { label: '3', isError: true, liked: true, invisible: false, tags: ['아이2', '교육2'] },
];

export default MemoCards;
