import { Button, Image } from '@/app/_components/common';

import MemoSection from './MemoSection';

const CreateMemoUpload = () => (
  <MemoSection title="사진">
    <div className="flex gap-8">
      <Image
        alt="thumbnail"
        className="rounded-14 border border-grayscale-30"
        containerClassName="w-18 h-18"
        sizes="4.5rem"
        src="/images/baby1_mock.png"
      />
      <Image
        alt="thumbnail"
        className="rounded-14 border border-grayscale-30"
        containerClassName="w-18 h-18"
        sizes="4.5rem"
        src="/images/baby2_mock.png"
      />
      <div>
        <Button className="w-18 h-18 p-0" fullWidth={false} onClick={() => {}}>
          <span className="inline-flex items-center justify-center text-grayscale-50 icon-fill icon-lg">
            add_photo_alternate
          </span>
        </Button>
      </div>
    </div>
  </MemoSection>
);

export default CreateMemoUpload;