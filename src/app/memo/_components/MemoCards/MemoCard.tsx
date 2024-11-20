import Image from 'next/image';

const MemoCard = ({ isError }: MemoCardProps) => (
  <div className="flex justify-between p-4">
    <div className="flex flex-col gap-5 text-grayscale-60">
      <p className="flex gap-6 label-sm-12-medium">
        {isError && (
          <>
            <span className="text-red-50">잘못된 정보 포함</span>
            <span className="">&#183;</span>
          </>
        )}
        <span>부모님 1</span>
        <span className="">&#183;</span>
        <span>어제</span>
      </p>
      <p className="text-body-sm text-grayscale-80">메모 제목</p>
      <p className="flex items-center gap-5">
        <span className="icon-xs">summarize</span>
        <span className="label-sm-12-medium">메모 내용 요약된 텍스트 한 줄</span>
      </p>
    </div>
    <div className="relative h-11 w-11 border border-grayscale-30">
      <Image alt="image" className="object-cover" sizes="11rem" src="/images/baby_mock.png" fill />
    </div>
  </div>
);

interface MemoCardProps {
  isError: boolean;
}

export default MemoCard;
