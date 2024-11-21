import { Header } from '@/app/_components/common';

const MemoHeader = () => (
  <Header>
    <div className="flex items-center gap-8">
      <span className="icon-fill icon-md">description</span>
      <span className="title-md-22-extrabold">메모</span>
    </div>
  </Header>
);

export default MemoHeader;
