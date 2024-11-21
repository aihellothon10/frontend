import { Header } from '@/app/_components/common';

const MemoHeader = () => (
  <Header>
    <div className="flex w-full items-center gap-8 bg-grayscale-20 px-6 py-4.25">
      <span className="icon-fill icon-md">description</span>
      <span className="title-md-22-extrabold">메모</span>
    </div>
  </Header>
);

export default MemoHeader;
