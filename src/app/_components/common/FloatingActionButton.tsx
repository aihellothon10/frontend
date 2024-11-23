'use client';

import { cn, VariantProps } from 'dotori-utils';

import Image from './Image';

const FloatingActionButton = ({ color, positionX, positionY, onClick }: FloatingActionButtonProps) => (
  <div className="fixed bottom-0 left-0 right-0 mx-auto w-mobile">
    <div className="relative">
      <button className={floatingActionButtonStyle({ color, positionX, positionY })} onClick={onClick}>
        <div className="inline-flex justify-center gap-8 rounded-inherit bg-grayscale-10 px-4 py-3">
          <Image alt="twinkle" containerClassName="w-6 h-6" sizes="1.5rem" src="/images/twinkle2.svg" />
          <span className="body-sm-15-medium">메모 생성하기</span>
        </div>
      </button>
    </div>
  </div>
);

interface FloatingActionButtonProps extends VariantProps<typeof floatingActionButtonStyle> {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const floatingActionButtonStyle = cn(
  'absolute bottom-0 right-0 text-nowrap inline-flex justify-center items-center rounded-max z-10 cursor-pointer mb-mobile-bottom-navigation-height p-[2px]',
  {
    variants: {
      color: {
        white: 'bg-grayscale-10',
        blue: 'bg-create-memo-gradient',
      },
      positionX: {
        right: 'right-4',
      },
      positionY: {
        bottom: 'bottom-4',
      },
    },
    defaultVariants: {
      color: 'blue',
      positionX: 'right',
      positionY: 'bottom',
    },
  },
);

export default FloatingActionButton;
