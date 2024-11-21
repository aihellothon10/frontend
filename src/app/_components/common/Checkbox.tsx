import { cn, VariantProps } from 'dotori-utils';

const Checkbox = ({ size, checked, onChange }: CheckboxProps) => (
  <label className={checkboxContainerStyle({ checked })}>
    <span className={checkboxIconStyle({ size, checked })}>check</span>
    <input checked={checked} className="hidden" type="checkbox" onChange={onChange} />
  </label>
);

interface CheckboxProps extends VariantProps<typeof checkboxContainerStyle>, VariantProps<typeof checkboxIconStyle> {
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const checkboxContainerStyle = cn('inline-flex items-center justify-center rounded-4 select-none cursor-pointer', {
  variants: {
    checked: {
      true: 'border border-transparent bg-blue-50 text-grayscale-10',
      false: 'border border-grayscale-40',
    },
  },
  defaultVariants: {
    checked: false,
  },
});

const checkboxIconStyle = cn('', {
  variants: {
    size: {
      sm: 'icon-sm',
    },
    checked: {
      true: 'visible',
      false: 'invisible',
    },
  },
  defaultVariants: {
    size: 'sm',
    checked: false,
  },
});

export default Checkbox;
