import { cn, VariantProps } from 'dotori-utils';

const Button = ({ children, className, ...rest }: ButtonProps) => (
  <button className={buttonStyle({ className, ...rest })}>
    <span className="flex items-center justify-center">{children}</span>
  </button>
);

interface ButtonProps extends VariantProps<typeof buttonStyle> {
  children: React.ReactNode;
  className?: string;
}

const buttonStyle = cn('px-4 rounded-16 inline-flex justify-center items-center gap-8', {
  variants: {
    color: {
      white: 'bg-grayscale-10 border border-grayscale-30',
      blue: 'bg-blue-50 text-grayscale-10',
      red: 'bg-red-50 text-grayscale-10',
    },
    size: {
      md: 'py-4 body-md-17-medium',
      sm: 'py-3 body-sm-15-regular',
    },
    fullWidth: {
      true: 'w-full',
      false: '',
    },
  },
  defaultVariants: {
    color: 'white',
    size: 'md',
    fullWidth: true,
  },
});

export default Button;
