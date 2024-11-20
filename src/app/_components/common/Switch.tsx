import { cn } from 'dotori-utils';

const Switch = ({ items, currentId, onClick }: SwitchProps) => (
  <div className="h-12.5 flex justify-center rounded-14 bg-grayscale-30 p-1.5">
    {items.map(({ id, label }) => (
      <button key={id} className={switchBoxStyle({ current: currentId === id })} onClick={() => onClick({ id, label })}>
        {label}
      </button>
    ))}
  </div>
);

interface SwitchProps {
  items: { label: string; id: string; [index: string]: string }[];
  onClick: ({ label, id }: { label: string; id: string }) => void;
  currentId: string;
}

const switchBoxStyle = cn('inline-flex flex-1 cursor-pointer items-center justify-center rounded-8', {
  variants: {
    current: {
      true: 'bg-grayscale-10',
      false: 'bg-inherit',
    },
  },
  defaultVariants: {
    current: false,
  },
});

export default Switch;
