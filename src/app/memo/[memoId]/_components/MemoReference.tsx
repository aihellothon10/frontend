'use client';

import { Button } from '@/app/_components/common';
import { useHorizontalScroll } from '@/app/hooks/common';
import { CreateMemoSection } from '@/app/memo/create/_components';

const MemoReference = () => {
  const { containerRef, onDragStart, onDragMove, onDragEnd } = useHorizontalScroll();

  return (
    <CreateMemoSection
      link="믿을만한 자료인가요?"
      title="참고 자료"
      linkDescription={({ close }) => (
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-12 p-2">
            <div className="flex justify-between">
              <p className="title-md-22-extrabold">믿을만한 자료인가요?</p>
              <span className="text-grayscale-50 icon-fill icon-md">help</span>
            </div>
            <p>
              네, 안심아이에서는 검증된 사실만 제공하기 위해 논문과 신뢰할 수 있는 출처만 표시되도록 필터링을 거치고
              있습니다.
            </p>
          </div>
          <Button className="bg-grayscale-20 px-4 py-3 body-sm-15-regular" onClick={close}>
            알겠습니다!
          </Button>
        </div>
      )}>
      <div
        ref={containerRef}
        className="flex gap-8 overflow-hidden text-nowrap"
        role="button"
        tabIndex={0}
        onMouseDown={onDragStart}
        onMouseLeave={onDragEnd}
        onMouseMove={onDragMove}
        onMouseUp={onDragEnd}>
        {references.map(({ title, description, link }, index) => (
          <a
            key={index}
            className="flex min-w-56 max-w-56 flex-col gap-12 rounded-14 bg-grayscale-20 px-4 py-3"
            href={link}
            rel="noreferrer"
            target="_blank">
            <div className="flex flex-col gap-8 text-wrap">
              <div className="flex gap-6">
                <div className="line-clamp-2 text-grayscale-80 body-sm-15-medium">{title}</div>
                <button className="self-start icon-sm">more_vert</button>
              </div>
              <div className="line-clamp-2 text-grayscale-60 label-md-14-regular">{description}</div>
            </div>
            <div className="rounded-14 bg-grayscale-10 px-3 py-1.5">
              <div className="line-clamp-1">{link}</div>
            </div>
          </a>
        ))}
      </div>
    </CreateMemoSection>
  );
};

const references = [
  {
    title:
      '아이 감기의 자연치유법에 대한 부모의 인식 및 실천 조사 실천 조사 아이 감기의 자연치유법에 대한 부모의 인식 및 실천 조사 실천 조사',
    description:
      '아이 감기의 자연치유법에 대한 부모의 인식 및 실천 조사 실천 조사 아이 감기의 자연치유법에 대한 부모의 인식 및 실천 조사 실천 조사',
    link: 'https://academic.naver.com/article.naver?doc_id=79763546',
  },
  {
    title:
      '아이 감기의 자연치유법에 대한 부모의 인식 및 실천 조사 실천 조사 아이 감기의 자연치유법에 대한 부모의 인식 및 실천 조사 실천 조사',
    description:
      '아이 감기의 자연치유법에 대한 부모의 인식 및 실천 조사 실천 조사 아이 감기의 자연치유법에 대한 부모의 인식 및 실천 조사 실천 조사',
    link: 'https://academic.naver.com/article.naver?doc_id=79763546',
  },
];

export default MemoReference;
