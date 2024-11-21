import { cn, VariantProps } from 'dotori-utils';

const FloatingActionButton = ({ positionX, positionY, onClick }: FloatingActionButtonProps) => {
  const rightPosition = '';

  return (
    <button className={floatingActionButtonStyle({ positionX, positionY, className: rightPosition })} onClick={onClick}>
      <span className="text-grayscale-10 icon-lg">add</span>
    </button>
  );
};

interface FloatingActionButtonProps extends VariantProps<typeof floatingActionButtonStyle> {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const floatingActionButtonStyle = cn(
  'fixed w-15 h-15 inline-flex justify-center items-center rounded-max z-10 cursor-pointer mb-mobile-bottom-navigation-height',
  {
    variants: {
      color: {
        blue: 'bg-blue-50',
      },
      positionX: {
        right: 'right-[calc(50%-theme(width.mobile)/2+theme(width.15))] translate-x-1/2',
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
