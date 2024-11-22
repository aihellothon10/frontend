'use client';

import { Button, Footer } from '@/app/_components/common';

const MemoBottomFooter = () => (
  // const {} = use;

  <Footer className="rounded-t-28 border border-grayscale-30 bg-grayscale-20">
    <div className="mt-4 flex justify-center gap-8">
      <button className="text-grayscale-50 icon-fill icon-lg">summarize</button>
      <Button
        className="bg-grayscale-30 px-4 py-2.5 text-grayscale-60 body-sm-15-regular"
        fullWidth={false}
        onClick={() => {}}>
        덧붙인 메모 -개 보기
      </Button>
      {/* <Button className="bg-grayscale-30 px-4 py-2.5 text-grayscale-60 body-sm-15-regular" onClick={() => {}}>
          부모님 추가
        </Button> */}
      <Button
        className="bg-grayscale-30 px-4 py-2.5 text-grayscale-60 body-sm-15-regular"
        fullWidth={false}
        onClick={() => {}}>
        메모 덧붙이기
      </Button>
    </div>
  </Footer>
);
export default MemoBottomFooter;
