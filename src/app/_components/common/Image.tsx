import { cn } from 'dotori-utils';
import NextImage from 'next/image';

const Image = ({ width, height, className, containerClassName, ...reset }: ImageProps) => (
  <div className={ImageContainerStyle({ className: containerClassName })} style={{ width, height }}>
    <NextImage className={ImageStyle({ className })} {...reset} fill />
  </div>
);

interface ImageProps extends Omit<React.ComponentProps<typeof NextImage>, 'width' | 'height'> {
  width?: string;
  height?: string;
  containerClassName?: string;
}

const ImageContainerStyle = cn('relative');

const ImageStyle = cn('object-cover');

export default Image;
