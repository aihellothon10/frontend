import MemoCard from './MemoCard';

const MemoCards = () => (
  <div>
    {cards.map(({ label, isError, liked }) => (
      <MemoCard key={label} isError={isError} liked={liked} />
    ))}
  </div>
);

const cards = [
  { label: '목데이터', isError: true, liked: false },
  { label: '테스트', isError: false, liked: false },
  { label: '입니다', isError: false, liked: false },
  { label: '.', isError: true, liked: true },
  { label: '1', isError: true, liked: true },
  { label: '2', isError: true, liked: true },
];

export default MemoCards;
