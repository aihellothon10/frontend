'use client';

import { useState } from 'react';

import { cn } from 'dotori-utils';

import { Chip, Image } from '@/app/_components/common';

const MemoNoteHeader = () => {
  const [like, setLike] = useState(false);

  const handleLickClick = () => setLike(!like);

  return (
    <div className="mx-1.5 flex flex-col gap-8">
      <div className="flex items-center justify-between text-grayscale-60 label-md-14-regular">
        <div className="flex items-center gap-8">
          <Image
            alt="user image"
            containerClassName="w-5 h-5 rounded-max border-grayscale-40"
            src="/images/baby_mock.png"
          />
          <span>부모님1</span>
          <span className="">&#183;</span>
          <span>어제 2:24</span>
        </div>
        <div className="flex items-center gap-6">
          <span>질문</span>
          <span className="">&#183;</span>
          <span>숨겨진 내용</span>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <h3 className="title-lg-24-extrabold">메모 제목입니다.</h3>
        <button className={likeStarStyle({ like })} onClick={handleLickClick}>
          star
        </button>
      </div>
      <div>
        <Chip color="gray" size="sm" type="solid" variant="outline">
          질문 메모
        </Chip>
      </div>
    </div>
  );
};

const likeStarStyle = cn('cursor-pointer icon-lg', {
  variants: {
    like: {
      true: 'icon-fill text-blue-50',
      false: 'text-grayscale-50',
    },
  },
  defaultVariants: {
    like: false,
  },
});

export default MemoNoteHeader;
