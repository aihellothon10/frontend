import { Button } from '@/app/_components/common';

const CoreMemo = () => (
  <div className="flex gap-8">
    <Button className="bg-grayscale-20 py-3">
      <span className="text-grayscale-60 label-md-14-regular">즐겨찾는 메모</span>
      <span className="text-grayscale-50 icon-fill icon-xs">star</span>
    </Button>
    <Button className="bg-grayscale-20 py-3">
      <span className="text-grayscale-60 label-md-14-regular">숨겨진 메모</span>
      <span className="text-grayscale-50 icon-fill icon-xs">lock</span>
    </Button>
  </div>
);

export default CoreMemo;
