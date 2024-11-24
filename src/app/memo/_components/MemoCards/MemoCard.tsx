import { useRouter } from 'next/navigation';

import { Image } from '@/app/_components/common';
import { PATH } from '@/app/constants';
import { MEMOS } from '@/app/constants/memos';

const MemoCard = ({ isError, liked }: (typeof MEMOS)[number]) => {
  const router = useRouter();

  const handleMemoCardClick = () => router.push(`${PATH.MEMO}/1`);

  return (
    <button className="flex w-full justify-between p-4 label-sm-12-regular" onClick={handleMemoCardClick}>
      <div className="flex flex-col gap-5 text-grayscale-60">
        <p className="flex items-center gap-6">
          <span>김아빠</span>
          <span>외 3명</span>
          <span className="">&#183;</span>
          <span>어제</span>
        </p>
        <div className="flex items-center gap-6">
          <p className="text-body-sm text-grayscale-80">메모 제목</p>
          {liked && <span className="text-blue-50 icon-fill icon-xs">star</span>}
        </div>
        <div className="flex items-center gap-6">
          {isError ? (
            <>
              <span className="text-red-50 icon-xs">warning</span>
              <span className="text-red-50">잘못된 정보 포함</span>
            </>
          ) : (
            <>
              <span className="icon-xs">summarize</span>
              <span>메모 내용 요약된 텍스트 한 줄</span>
            </>
          )}
        </div>
      </div>
      <Image
        alt="thumbnail"
        className="border border-grayscale-30"
        containerClassName="w-13 h-13 rounded-8"
        sizes="3.25rem"
        src="/images/baby_mock.png"
      />
    </button>
  );
};

export default MemoCard;
