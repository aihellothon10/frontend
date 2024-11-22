'use client';

import { Image } from '@/app/_components/common';
import { useFileReader } from '@/app/hooks/common';

import CreateMemoSection from '../CreateMemoSection';

const CreateMemoUpload = () => {
  const { images, reader } = useFileReader();

  const handleImageChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    const files = [...(e.target?.files ?? [])] as File[];

    [...files].forEach(file => reader(file));
  };

  return (
    <CreateMemoSection title="사진">
      <div className="flex gap-8">
        {images.map((image, index) => (
          <Image
            key={index}
            alt="thumbnail"
            className="border border-grayscale-30"
            containerClassName="w-18 h-18 rounded-14"
            sizes="4.5rem"
            src={image}
          />
        ))}
        <div>
          <label className="inline-flex h-18 w-18 cursor-pointer items-center justify-center rounded-14 border border-grayscale-30">
            <input className="hidden" type="file" onChange={handleImageChange} />
            <span className="inline-flex items-center justify-center text-grayscale-50 icon-fill icon-lg">
              add_photo_alternate
            </span>
          </label>
        </div>
      </div>
    </CreateMemoSection>
  );
};

export default CreateMemoUpload;
