import { cn, VariantProps } from 'dotori-utils';

const FloatingActionButton = ({ position }: FloatingActionButtonProps) => (
  <div className={floatingActionButtonStyle({ position })}>
    <span className="text-grayscale-10 icon-lg">add</span>
  </div>
);

interface FloatingActionButtonProps extends VariantProps<typeof floatingActionButtonStyle> {}

const floatingActionButtonStyle = cn('absolute w-15 h-15 inline-flex justify-center items-center rounded-max', {
  variants: {
    color: {
      blue: 'bg-blue-50',
    },
    position: {
      rightBottom: 'bottom-4 right-4',
    },
  },
  defaultVariants: {
    color: 'blue',
    position: 'rightBottom',
  },
});

export default FloatingActionButton;
