import { Button } from '@/app/_components/common';

const CoreMemo = () => (
  <div className="flex gap-8">
    <Button className="bg-grayscale-20 py-3">
      <span className="inline-flex items-center gap-6">
        <span className="text-grayscale-60 label-md-14-regular">즐겨찾는 메모</span>
        <span className="text-grayscale-50 icon-xs">star</span>
      </span>
    </Button>
    <Button className="bg-grayscale-20 py-3">
      <span className="inline-flex items-center gap-6">
        <span className="text-grayscale-60 label-md-14-regular">숨겨진 메모</span>
        <span className="text-grayscale-50 icon-xs">lock</span>
      </span>
    </Button>
  </div>
);

export default CoreMemo;
