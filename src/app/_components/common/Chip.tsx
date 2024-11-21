import { cn, VariantProps } from 'dotori-utils';

const Chip = ({ checked, onChange, children, className, ...rest }: ChipProps) => (
  <label className={chipStyle({ className, checked, ...rest })}>
    <input checked={checked} className="hidden" type="checkbox" onChange={onChange} />
    {children}
  </label>
);

interface ChipProps extends VariantProps<typeof chipStyle> {
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  children: string;
  className?: string;
}

const chipStyle = cn('rounded-max text-grayscale-10 cursor-pointer inline-block', {
  variants: {
    color: {
      blue: 'bg-blue-20 text-blue-50',
      violet: 'bg-violet-20 text-violet-50',
    },
    size: {
      md: 'py-2 px-4 label-md-14-semibold',
      sm: 'py-1.5 px-2 label-sm-12-medium',
    },
    checked: {
      true: '',
      false: '',
    },
  },
  compoundVariants: [
    { checked: true, color: 'blue', className: 'bg-blue-50 text-blue-20' },
    { checked: true, color: 'violet', className: 'bg-violet-50 text-violet-20' },
  ],
  defaultVariants: {
    color: 'blue',
    size: 'md',
    checked: false,
  },
});

export default Chip;
