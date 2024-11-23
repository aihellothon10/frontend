import { useState } from 'react';

import { cn } from 'dotori-utils';

import { Button, Divider } from '@/app/_components/common';

import BabyContentWarningCard from './BabyContentWarningCard';
import BabyStatusBar from './BabyStatusBar';

const BabyGrowth = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const dates = toSortedDate(getDates({ currentDate, count: 7, dir: 'prev' }), 'asc');
  const under = getUpperDate(dates, 'asc');
  const upper = getUpperDate(dates, 'desc');

  const filteredItems = items.filter(item => isWithinRange(item, under, upper));

  const handleNextDate = () => {
    const today = new Date();
    const current = new Date(currentDate);

    current.setDate(current.getDate() + 1);
    if (today.getTime() < current.getTime()) return;

    setCurrentDate(current);
  };
  const handlePrevDate = () => {
    const current = new Date(currentDate);

    current.setDate(current.getDate() - 1);
    setCurrentDate(current);
  };

  return (
    <>
      <Button className="inline-flex items-center justify-center gap-8" onClick={() => {}}>
        <span className="text-grayscale-60 body-sm-15-regular">새로운 신체 데이터 입력</span>
        <span className="text-grayscale-60 icon-sm">edit</span>
      </Button>
      <div className="flex items-center justify-between">
        <div>
          <Button className="bg-grayscale-20 px-3 py-1.5 label-md-14-regular" size="sm" onClick={handlePrevDate}>
            이전
          </Button>
        </div>
        <div>
          <p>
            {under.year.toString().slice(2)}.{under.month}.{under.date}. ~ {upper.year.toString().slice(2)}.
            {upper.month}.{upper.date}.
          </p>
        </div>
        <div>
          <Button className="bg-grayscale-20 px-3 py-1.5 label-md-14-regular" size="sm" onClick={handleNextDate}>
            다음
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-center gap-12">
        {profiles.map(({ label, id, color }) => (
          <div key={id} className="flex items-center gap-6">
            <span className={profileStyle({ color })}>circle</span>
            <span>{label}</span>
          </div>
        ))}
      </div>
      <div>
        <div className="grid grid-cols-7">
          {dates.map(({ year, month, date }) => {
            const foundItem = filteredItems.find(
              item => item.year === year && item.month === month && item.date === date,
            );

            const maxTall = filteredItems.reduce((acc, { tall }) => (acc < tall ? tall : acc), -Infinity);
            const maxWeight = filteredItems.reduce((acc, { weight }) => (acc < weight ? weight : acc), -Infinity);
            // const bmi = weight / (tall / 100 ) ** 2

            return (
              <div key={`${year}${month}${date}`} className="flex flex-col items-center justify-center">
                <span className="mb-3 inline-block px-2 text-grayscale-50 label-sm-12-medium">
                  {month}.{date}
                </span>
                <div className="relative mb-4 flex h-24 w-full justify-center gap-4">
                  <BabyStatusBar color="blue" total={maxTall} value={foundItem?.tall ?? 0} />
                  <BabyStatusBar color="green" total={maxWeight} value={foundItem?.weight ?? 0} />
                  <div className="absolute -z-10 h-full w-full">
                    <Divider className="absolute top-0 w-full bg-grayscale-30" />
                    <Divider className="absolute top-1/4 w-full bg-grayscale-30" />
                    <Divider className="absolute top-2/4 w-full bg-grayscale-30" />
                    <Divider className="absolute top-3/4 w-full bg-grayscale-30" />
                    <Divider className="absolute top-full w-full bg-grayscale-30" />
                  </div>
                </div>
                <div className="mb-1.5 mt-2 inline-block px-2 text-blue-50 label-sm-12-medium">
                  {foundItem ? foundItem.tall : '-'}
                </div>
                <div className="mb-2 inline-block px-2 text-lightgreen-60 label-sm-12-medium">
                  {foundItem ? foundItem.weight : '-'}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div></div>
      <div>
        <BabyContentWarningCard title="주의 필요">
          키와 몸무게 데이터가 비정상적입니다. 잘못된 값을 입력했는지 확인하시고, 실제 데이터라면 병원에서 진단을 받는
          것을 권장합니다.
        </BabyContentWarningCard>
      </div>
    </>
  );
};

interface DateType {
  year: number;
  month: number;
  date: number;
  day: number;
}

const profiles = [
  { label: '키', id: 'tall', color: 'blue' },
  { label: '몸무게', id: 'weight', color: 'green' },
  { label: '주의 필요', id: 'warning', color: 'red' },
] as const;

const items = [
  { year: 2024, month: 11, date: 23, tall: 173, weight: 75, warning: 50 },
  { year: 2024, month: 11, date: 22, tall: 188, weight: 60, warning: 50 },
  { year: 2024, month: 11, date: 20, tall: 160, weight: 82, warning: 50 },
  { year: 2024, month: 11, date: 19, tall: 179, weight: 92, warning: 50 },
  { year: 2024, month: 11, date: 17, tall: 155, weight: 64, warning: 50 },
  { year: 2024, month: 11, date: 16, tall: 182, weight: 85, warning: 50 },
  { year: 2024, month: 11, date: 15, tall: 162, weight: 90, warning: 50 },
  { year: 2024, month: 11, date: 14, tall: 170, weight: 77, warning: 50 },
  { year: 2024, month: 11, date: 13, tall: 178, weight: 68, warning: 50 },
  { year: 2024, month: 11, date: 12, tall: 163, weight: 56, warning: 50 },
];

const profileStyle = cn('icon-xs-fill', {
  variants: {
    color: {
      blue: 'text-blue-50',
      green: 'text-lightgreen-60',
      red: 'text-red-50',
    },
  },
});

const getDate = (date: Date = new Date()) => {
  const now = new Date(date);

  return {
    year: now.getFullYear(),
    month: now.getMonth() + 1,
    date: now.getDate(),
    day: now.getDay(),
  };
};

const getDates = ({ currentDate, count, dir }: { currentDate: Date; count: number; dir: 'next' | 'prev' }) =>
  Array.from({ length: count }, (_, i) => {
    const now = new Date(currentDate);
    const sign = dir === 'prev' ? -1 : 1;
    now.setDate(now.getDate() + sign * i);

    return getDate(now);
  });

const getUpperDate = (dates: DateType[], order: 'asc' | 'desc') => {
  const orderedDate = toSortedDate(dates, order);

  return orderedDate[0];
};

const toSortedDate = (dates: DateType[], order: 'asc' | 'desc') => {
  const pivot = order === 'asc' ? 1 : -1;

  return dates.toSorted((a, b) => {
    if (a.year !== b.year) return (a.year - b.year) * pivot;
    if (a.month !== b.month) return (a.month - b.month) * pivot;
    if (a.date !== b.date) return (a.date - b.date) * pivot;
    return (a.day - b.day) * pivot;
  });
};

const compareDates = (date1: Omit<DateType, 'day'>, date2: Omit<DateType, 'day'>) => {
  const d1 = new Date(date1.year, date1.month - 1, date1.date);
  const d2 = new Date(date2.year, date2.month - 1, date2.date);
  return d1.getTime() - d2.getTime();
};

const isWithinRange = (
  date: Omit<DateType, 'day'> & { [index: string]: string | number | boolean },
  lowerBound: DateType,
  upperBound: DateType,
) => compareDates(lowerBound, date) <= 0 && compareDates(date, upperBound) <= 0;

export default BabyGrowth;
