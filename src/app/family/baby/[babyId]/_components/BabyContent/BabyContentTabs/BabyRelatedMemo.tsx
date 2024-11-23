import MemoCard from '@/app/memo/_components/MemoCards/MemoCard';

const BabyRelatedMemo = () => (
  <>
    <MemoCard isError={false} liked={false} />
    <MemoCard isError={false} liked />
    <MemoCard liked={false} isError />
    <MemoCard isError liked />
  </>
);

export default BabyRelatedMemo;
