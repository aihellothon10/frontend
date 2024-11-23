import { Button, Image } from '@/app/_components/common';

const FamilyGuardian = () => (
  <div className="flex flex-col gap-12 rounded-20 bg-grayscale-10 p-4">
    <div className="flex items-center justify-between">
      <h3 className="text-grayscale-80 title-md-22-extrabold">보호자</h3>
      <Button className="bg-grayscale-20 px-3 py-1.5 text-grayscale-60" fullWidth={false} size="sm" onClick={() => {}}>
        보호자 추가
      </Button>
    </div>
    <div className="grid grid-cols-2 gap-8">
      {guardians.map(guardian => (
        <Button
          key={guardian}
          className="inline-flex justify-start rounded-14 bg-grayscale-20 p-2 text-grayscale-60 label-md-14-regular"
          onClick={() => {}}>
          <Image
            alt="user image"
            containerClassName="w-10 h-10 rounded-max border border-grayscale-50"
            src="/images/baby_mock.png"
          />
          <span>엄마</span>
        </Button>
      ))}
    </div>
  </div>
);

const guardians = ['1', '2', '3', '4'];

export default FamilyGuardian;
