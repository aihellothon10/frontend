'use client';

import { cn } from 'dotori-utils';
import { usePathname, useRouter } from 'next/navigation';

import { PATH } from '@/app/constants';

import Footer from './Footer';

const BottomNavigation = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleLinkClick = (path: string) => () => {
    router.push(path);
  };

  return (
    <Footer className="flex items-center justify-center">
      {leftNavigations.map(({ label, path, iconText }) => (
        <button
          key={label}
          className={labelContainerStyle({ current: `/${pathname.split('/')[1]}` === path })}
          onClick={handleLinkClick(path)}>
          <span className="icon-fill icon-md">{iconText}</span>
          <span className="text-nowrap label-sm-12-medium">{label}</span>
        </button>
      ))}
      {centerNavigations.map(({ label, iconText, path }) => (
        <button
          key={label}
          className={chatContainerStyle({ current: `/${pathname.split('/')[1]}` === path })}
          onClick={handleLinkClick(path)}>
          <span className="text-grayscale-10 icon-fill icon-lg">{iconText}</span>
        </button>
      ))}
      {rightNavigations.map(({ label, path, iconText }) => (
        <button
          key={label}
          className={labelContainerStyle({ current: `/${pathname.split('/')[1]}` === path })}
          onClick={handleLinkClick(path)}>
          <span className="icon-fill icon-md">{iconText}</span>
          <span className="text-nowrap label-sm-12-medium">{label}</span>
        </button>
      ))}
    </Footer>
  );
};

const leftNavigations = [
  { label: '맞춤 정보', iconText: 'full_coverage', path: PATH.HOME },
  { label: '메모', iconText: 'ink_pen', path: PATH.MEMO },
];
const centerNavigations = [{ label: '채팅', iconText: 'contact_support', path: PATH.CHAT }];
const rightNavigations = [
  { label: '가족', iconText: 'diversity_4', path: PATH.FAMILY },
  { label: '이웃', iconText: 'apartment', path: PATH.ME },
];

const labelContainerStyle = cn('flex flex-col items-center py-3 px-7 gap-6 ', {
  variants: {
    current: {
      true: 'text-blue-50',
      false: 'text-grayscale-50',
    },
  },
  defaultVariants: {
    current: false,
  },
});

const chatContainerStyle = cn('p-3 rounded-max flex mx-3.5', {
  variants: {
    current: {
      true: 'bg-chat-border-gradient',
      false: 'bg-blue-50',
    },
  },
  defaultVariants: {
    current: false,
  },
});

export default BottomNavigation;
