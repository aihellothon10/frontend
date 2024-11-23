import { Image } from '@/app/_components/common';
import { useHorizontalScroll } from '@/app/hooks/common';

const MemoNoteBody = () => {
  const { containerRef, onDragStart, onDragMove, onDragEnd } = useHorizontalScroll();

  return (
    <>
      <div
        ref={containerRef}
        className="flex gap-8 overflow-hidden text-nowrap"
        role="button"
        tabIndex={0}
        onMouseDown={onDragStart}
        onMouseLeave={onDragEnd}
        onMouseMove={onDragMove}
        onMouseUp={onDragEnd}>
        <Image alt="user image" containerClassName="w-52 h-36 rounded-8 flex-shrink-0" src="/images/baby_mock.png" />
        <Image alt="user image" containerClassName="w-52 h-36 rounded-8 flex-shrink-0" src="/images/baby_mock.png" />
      </div>
      <div className="flex flex-col gap-8 text-grayscale-80 body-sm-15-regular">
        <div className="rounded-14 bg-alert-memo-gradient p-4">
          AI 가 생성한 요약 메모의 요약 내용, AI 가 생성한 요약 메모의 요약 내용, AI 가 생성한 요약 메모의 요약 내용, AI
          가 생성한 요약 메모의 요약 내용
        </div>
        <div className="">
          사용자가 입력한 메모 내용, 사용자가 입력한 메모 내용, 사용자가 입력한 메모 내용, 사용자가 입력한 메모 내용,
          사용자가 입력한 메모 내용
        </div>
      </div>
    </>
  );
};

export default MemoNoteBody;
