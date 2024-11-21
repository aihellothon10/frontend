import { Button, Image } from '@/app/_components/common';

import CreateMemoSection from '../CreateMemoSection';

const CreateMemoUpload = () => (
  <CreateMemoSection title="사진">
    <div className="flex gap-8">
      <Image
        alt="thumbnail"
        className="border border-grayscale-30"
        containerClassName="w-18 h-18 rounded-14"
        sizes="4.5rem"
        src="/images/baby1_mock.png"
      />
      <Image
        alt="thumbnail"
        className="border border-grayscale-30"
        containerClassName="w-18 h-18 rounded-14"
        sizes="4.5rem"
        src="/images/baby2_mock.png"
      />
      <div>
        <Button className="h-18 w-18 p-0" fullWidth={false} onClick={() => {}}>
          <span className="inline-flex items-center justify-center text-grayscale-50 icon-fill icon-lg">
            add_photo_alternate
          </span>
        </Button>
      </div>
    </div>
  </CreateMemoSection>
);

export default CreateMemoUpload;
