import { Button } from '@/app/_components/common';

import FamilyBabyEllipse from './FamilyBabyEllipse';

const FamilyBabies = () => (
  <div className="rounded-b-20 rounded-t-76 bg-grayscale-10 p-3">
    <div className="flex flex-col gap-16">
      {babies.map(baby => (
        <FamilyBabyEllipse key={baby.babyId} {...baby} />
      ))}
      <div className="inline-flex justify-center">
        <Button className="bg-grayscale-20" fullWidth={false} size="sm" onClick={() => {}}>
          <span className="text-grayscale-60">아이 추가</span>
          <span className="text-grayscale-50 icon-xs">add</span>
        </Button>
      </div>
    </div>
  </div>
);

const babies = [
  { name: '가나다', order: '첫째', age: '48개월', tall: '83cm', weight: '10.2kg', babyId: 1 },
  { name: '마바사', order: '둘째', age: '48개월', tall: '83cm', weight: '10.2kg', babyId: 2 },
];

export default FamilyBabies;
