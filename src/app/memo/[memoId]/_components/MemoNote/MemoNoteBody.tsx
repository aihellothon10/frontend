import { Image } from '@/app/_components/common';
import { useHorizontalScroll } from '@/app/hooks/common';

const MemoNoteBody = () => {
  const { containerRef, onDragStart, onDragMove, onDragEnd } = useHorizontalScroll();

  return (
    <div>
      <div>
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
      </div>
      <div className="mb-5 mt-3.5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ullam veritatis placeat maxime at nulla
        laboriosam aperiam porro cum deleniti officia quidem odio quam pariatur reprehenderit illum eaque asperiores
        libero, corporis quos alias? Error tempore architecto ab laudantium quaerat culpa, ut ex temporibus perferendis,
        cumque, incidunt minima quasi porro quia!
      </div>
    </div>
  );
};

export default MemoNoteBody;
