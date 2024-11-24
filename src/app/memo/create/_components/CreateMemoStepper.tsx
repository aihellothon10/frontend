'use client';

import { cn } from 'dotori-utils';

import { Divider } from '@/app/_components/common';
import { useMemoStepStore } from '@/app/store';

const CreateMemoStepper = () => {
  const { step: currentStep, updateStep } = useMemoStepStore();

  return (
    <div className="flex gap-8 px-5 pb-3">
      {steps.map(({ label, step }) => (
        <button key={step} className="flex flex-1 flex-col justify-center gap-8" onClick={() => {}}>
          <div className={stepBoxStyle({ current: step <= currentStep })}>
            {/* <Chip
              className="cursor-pointer"
              color={step <= currentStep ? 'blue' : 'gray'}
              size="sm"
              type="solid"
              variant="outline">
              {step}단계
            </Chip> */}
            <span className={stepLabelStyle({ current: step <= currentStep })}>{label}</span>
          </div>
          <Divider className={stepDividerStyle({ current: step <= currentStep })} />
        </button>
      ))}
    </div>
  );
};

const steps = [
  { label: '내용 작성', step: 1 },
  { label: '메모 설정', step: 2 },
  { label: '분석 결과', step: 3 },
];

const stepBoxStyle = cn('gap-4 inline-flex w-full items-center justify-center', {
  variants: {
    current: {
      true: 'text-blue-50',
      false: 'text-grayscale-50',
    },
  },
  defaultVariants: {
    current: false,
  },
});

const stepLabelStyle = cn('', {
  variants: {
    current: {
      true: 'body-sm-15-medium',
      false: 'body-sm-15-regular',
    },
  },
  defaultVariants: {
    current: false,
  },
});

const stepDividerStyle = cn('h-1 w-full', {
  variants: {
    current: {
      true: 'bg-blue-50',
      false: '',
    },
  },
  defaultVariants: {
    current: false,
  },
});

export default CreateMemoStepper;
