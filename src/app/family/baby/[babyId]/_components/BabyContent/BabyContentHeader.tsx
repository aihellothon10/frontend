'use client';

import { Chip, Image } from '@/app/_components/common';

const BabyContentHeader = () => (
  <div className="flex flex-col gap-16">
    <div className="relative">
      <Image alt="user image" containerClassName="w-full h-40" src="/images/baby_mock.png" />
      <span className="absolute right-4 top-4 rounded-max bg-grayscale-10 p-2.5 text-grayscale-50 icon-sm">edit</span>
    </div>
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-center gap-8">
        <h2 className="text-grayscale-80 title-lg-24-extrabold">김00</h2>
        <Chip color="gray" size="sm" type="solid" variant="outline">
          첫째
        </Chip>
      </div>
      <div className="flex items-center justify-center gap-6 text-grayscale-60 body-sm-15-regular">
        <span>2024.11.23</span>
        <span>&#183;</span>
        <span>48개월</span>
      </div>
    </div>
  </div>
);

export default BabyContentHeader;
