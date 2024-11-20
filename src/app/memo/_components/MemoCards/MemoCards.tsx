import MemoCard from './MemoCard';

const MemoCards = () => (
  <div>
    {cards.map(({ label, isError }) => (
      <MemoCard key={label} isError={isError} />
    ))}
  </div>
);

const cards = [
  { label: '목데이터', isError: true },
  { label: '테스트', isError: false },
  { label: '입니다', isError: false },
];

export default MemoCards;
