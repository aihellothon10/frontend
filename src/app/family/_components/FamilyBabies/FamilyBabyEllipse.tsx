import { Chip, Image } from '@/app/_components/common';

const FamilyBabyEllipse = ({ name, order, age, tall, weight }: FamilyBabyEllipseProps) => (
  <div className="flex items-center gap-12 rounded-max border border-grayscale-50 border-opacity-20 bg-blue-20 p-4 shadow-lg shadow-blue-20">
    <Image
      alt="baby image"
      containerClassName="w-24 h-24 rounded-max border-grayscale-50 border-opacity-20 border"
      src="/images/baby_mock.png"
    />
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-6">
        <span>{name}</span>
        <Chip size="sm" type="solid" variant="outline">
          {order}
        </Chip>
      </div>
      <div className="flex items-center gap-6 text-grayscale-60 label-sm-12-medium">
        <span>{age}</span>
        <span className="">&#183;</span>
        <span>{tall}</span>
        <span className="">&#183;</span>
        <span>{weight}</span>
      </div>
    </div>
    <div className="text-grayscale-50 icon-md">chevron_forward</div>
  </div>
);

interface FamilyBabyEllipseProps {
  name: string;
  order: string;
  age: string;
  tall: string;
  weight: string;
}

export default FamilyBabyEllipse;
