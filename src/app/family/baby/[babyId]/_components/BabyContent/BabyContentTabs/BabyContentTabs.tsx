'use client';

import { useState } from 'react';

import BabyContentTab from './BabyContentTab';
import BabyGrowth from './BabyGrowth';
import BabyRelatedMemo from './BabyRelatedMemo';

const BabyContentTabs = () => {
  const [currentId, setCurrentId] = useState<Step['id']>(steps[0].id);

  const handleStepClick = (id: Step['id']) => setCurrentId(id);

  return (
    <div className="flex flex-col gap-16">
      <div className="border-b border-grayscale-30">
        <div className="flex justify-center gap-24">
          {steps.map(step => (
            <BabyContentTab key={step.id} {...step} current={currentId === step.id} onClick={handleStepClick} />
          ))}
        </div>
      </div>
      {currentId === 'growth' && <BabyGrowth />}
      {currentId === 'related' && <BabyRelatedMemo />}
    </div>
  );
};

export type Step = Extract<(typeof steps)[number], { id: string; label: string }>;

const steps = [
  { label: '아이 성장', id: 'growth' },
  { label: '맞춤 추천', id: 'recommend' },
  { label: '관련된 메모', id: 'related' },
] as const;

export default BabyContentTabs;
