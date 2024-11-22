import { cn, VariantProps } from 'dotori-utils';

const Chip = <Type extends 'checkbox' | 'solid'>({
  type,
  checked,
  onChange,
  children,
  className,
  ...rest
}: Type extends 'checkbox'
  ? ChipProps<Type>
  : Omit<ChipProps<Type>, 'checked' | 'onChange'> & Pick<Partial<ChipProps<Type>>, 'checked' | 'onChange'>) => (
  <label className={chipStyle({ className, checked, type, ...rest })}>
    {type === 'checkbox' && <input checked={checked} className="hidden" type="checkbox" onChange={onChange} />}
    {children}
  </label>
);

interface ChipProps<Type> extends Omit<VariantProps<typeof chipStyle>, 'type'> {
  checked: Type extends 'checkbox' ? boolean : never;
  onChange: Type extends 'checkbox' ? React.ChangeEventHandler<HTMLInputElement> : never;
  children: React.ReactNode;
  className?: string;
  type: Type;
}

const chipStyle = cn('rounded-max text-grayscale-10 inline-block', {
  variants: {
    type: {
      checkbox: 'cursor-pointer',
      solid: '',
    },
    variant: {
      outline: '',
      filled: '',
    },
    color: {
      blue: 'bg-blue-20 text-blue-50',
      violet: 'bg-violet-20 text-violet-50',
      gray: 'bg-grayscale-20 text-grayscale-50',
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
    { checked: true, color: 'blue', variant: 'filled', className: 'bg-blue-50 text-blue-20' },
    { checked: true, color: 'violet', variant: 'filled', className: 'bg-violet-50 text-violet-20' },
    { checked: true, color: 'gray', variant: 'filled', className: 'bg-grayscale-50 text-grayscale-20' },
    { color: 'blue', variant: 'outline', className: 'border border-blue-50 bg-grayscale-10 text-blue-50' },
    { color: 'violet', variant: 'outline', className: 'border border-violet-50 bg-grayscale-10 text-violet-50' },
    { color: 'gray', variant: 'outline', className: 'border border-grayscale-40 bg-grayscale-10 text-grayscale-50' },
  ],
  defaultVariants: {
    variant: 'filled',
    color: 'blue',
    size: 'md',
    checked: false,
  },
});

export default Chip;
