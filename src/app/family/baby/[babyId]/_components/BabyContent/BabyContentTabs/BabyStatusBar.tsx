import { cn, VariantProps } from 'dotori-utils';

const BabyStatusBar = ({ value, total, color }: BabyStatusBarProps) => {
  const percent = ((value / total) * 100).toFixed(0);

  return (
    <div className="flex h-full w-2 rounded-t-4">
      <div className={statusBarStyle({ color })} style={{ height: `${percent}%` }}></div>
    </div>
  );
};

interface BabyStatusBarProps extends VariantProps<typeof statusBarStyle> {
  value: number;
  total: number;
}

const statusBarStyle = cn('w-full self-end rounded-t-4', {
  variants: {
    color: {
      blue: 'bg-blue-50',
      green: 'bg-lightgreen-60',
    },
  },
});

export default BabyStatusBar;
