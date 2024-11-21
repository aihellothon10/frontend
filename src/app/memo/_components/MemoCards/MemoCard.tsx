import { Image } from '@/app/_components/common';

const MemoCard = ({ isError, liked }: MemoCardProps) => (
  <div className="flex justify-between p-4 label-sm-12-regular">
    <div className="flex flex-col gap-5 text-grayscale-60">
      <p className="flex items-center gap-6">
        {liked && (
          <>
            <span className="text-blue-50 icon-fill icon-xs">star</span>
            <span className="">&#183;</span>
          </>
        )}

        <span>부모님 1</span>
        <span className="">&#183;</span>
        <span>어제</span>
        {isError && (
          <>
            <span className="">&#183;</span>
            <span className="text-red-50">잘못된 정보 포함</span>
          </>
        )}
      </p>
      <p className="text-body-sm text-grayscale-80">메모 제목</p>
      <p className="flex items-center gap-5">
        <span className="icon-xs">summarize</span>
        <span>메모 내용 요약된 텍스트 한 줄</span>
      </p>
    </div>
    <Image
      alt="thumbnail"
      className="border border-grayscale-30"
      containerClassName="w-13 h-13 rounded-8"
      sizes="3.25rem"
      src="/images/baby_mock.png"
    />
  </div>
);

interface MemoCardProps {
  isError: boolean;
  liked: boolean;
}

export default MemoCard;
