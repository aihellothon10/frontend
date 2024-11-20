import { cn } from 'dotori-utils';

const Divider = ({ className }: DividerProps) => <div className={dividerStyle({ className })} />;

interface DividerProps {
  className?: string;
}

const dividerStyle = cn('my-px h-px bg-grayscale-30');

export default Divider;
